import React, { useContext, useEffect } from 'react'
import Avtar from '../../assets/avtar.png'
import TodoContext from '../../context/Todo/TodoContext';
import leftArrow from '../../assets/left-arrow.svg'
import UserContext from '../../context/User/UserContext';
import { useNavigate } from 'react-router-dom';
const ProfileMain = () => {
  const userContext = useContext(UserContext);
  const {getUser,user} = userContext;
  const todoContext = useContext(TodoContext);
  const {todos} = todoContext;

  const navigate = useNavigate()

  useEffect(()=>{
    getUser();
  })

  const handleClickOnBack = () => {
    navigate('/')
  }
  return (
    <div className='w-full h-[95vh] bg-[#191920] flex justify-center items-center'>
        <div className='w-[70%] bg-[#21212b]  rounded-xl flex flex-col justify-center py-3 gap-6'>
          <img className='h-[200px] invert block mx-auto' src={Avtar} alt="" />
          <h4 className='text-center text-[#fd77a1] font-bold'>
              @{user.name}
          </h4>
          <h4 className='text-center text-[#eaeaea] font-bold'>
              {user.email}
          </h4>
          <h4 className='text-center my-3  text-[#419796] font-bold'>
              <span>Todos: </span>{todos.length}
          </h4>
        
        </div>

        <div className='w-[80%] sm:w-[60%]  mt-10 fixed top-3'>
        <button onClick={handleClickOnBack} className='flex items-center gap-3 ' >
          <div className='px-3 py-3 bg-[#21202a] rounded-xl'>
            <img className='invert h-[19px] mx-auto' src={leftArrow} alt="" />
          </div>
          <h1 className='text-[#cacbcc] text-[2rem] font-bold'>
            Back
          </h1>
        </button>
      </div>
    </div>
  )
}

export default ProfileMain