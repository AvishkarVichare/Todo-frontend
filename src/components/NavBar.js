import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import UserContext from '../context/User/UserContext'
import logOut from '../assets/logout.png'
import { toast } from 'react-hot-toast'

const NavBar = () => {
    const userContext = useContext(UserContext);
    const {getUser,user} = userContext;
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate()

  

    useEffect(() => {
      
        getUser()
    }, [cookies.token])
    
  return (
    <>
    <nav className='flex justify-between items-center h-[5vh] px-2 sm:px-10 text-[#bcbcbf] bg-[#21212b]'>
        <div className='sm:block hidden'>
        <span>{user && user.email}</span>        </div>
        <div>
            <h1 className='text-[14px] sm:text-[1.3rem] font-bold'>
                TO-DOs
            </h1>
        </div>
        <div className='flex gap-8 items-center'>
           <Link to='/profile'>
          <div className='flex gap-2'>
                
          <h4 className='bg-[#fd77a1] text-white sm:text-base text-[14px]  px-4 rounded-xl duration-200 ease-in-out hover:bg-[#ac2e56] font-bold'>
               { user && user.name}
            </h4>
          </div>
           </Link>

           <button onClick={()=>{
            setCookie('token','')
            navigate('/signup')
            toast.success("Logged Out")
            }} className='bg-[#87898b] text-white rounded-xl py-1 px-2'>
            <img className='h-[20px]' src={logOut} alt="" />
           </button>
        </div>
    </nav>
    </>
  )
}

export default NavBar