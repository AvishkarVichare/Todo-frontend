import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import UserContext from '../context/User/UserContext'
import logOut from '../assets/logout.png'

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
    <nav className='flex justify-between items-center h-[5vh] px-10 text-[#bcbcbf] bg-[#21212b]'>
        <div>
            Menu
        </div>
        <div>
            <h1 className='text-[1.3rem] font-bold'>
                TO-DOs
            </h1>
        </div>
        <div className='flex gap-8 items-center'>
           <Link to='/profile'>
          <div className='flex gap-2'>
                <span>{user && user.email}</span>
          <h4 className='bg-[#fd77a1] text-white px-4 rounded-xl duration-200 ease-in-out hover:bg-[#ac2e56]'>
               { user && user.name}
            </h4>
          </div>
           </Link>

           <button onClick={()=>navigate('/signup')} className='bg-[#87898b] text-white rounded-xl py-1 px-2'>
            <img className='h-[20px]' src={logOut} alt="" />
           </button>
        </div>
    </nav>
    </>
  )
}

export default NavBar