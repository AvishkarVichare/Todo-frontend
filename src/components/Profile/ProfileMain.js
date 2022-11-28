import React, { useContext, useEffect } from 'react'
import Avtar from '../../assets/avtar.png'
import TodoContext from '../../context/Todo/TodoContext';
import UserContext from '../../context/User/UserContext';
const ProfileMain = () => {
  const userContext = useContext(UserContext);
  const {getUser,user} = userContext;
  const todoContext = useContext(TodoContext);
  const {todos} = todoContext;
  useEffect(()=>{
    getUser();
  })
  return (
    <div className='w-full h-[95vh] bg-[#191920] flex justify-center items-center'>
        <div className='w-[70%] bg-[#21212b] h-[60vh] rounded-xl flex flex-col justify-center gap-6'>
          <img className='h-[200px] invert block mx-auto' src={Avtar} alt="" />
          <h4 className='text-center text-[#fd77a1] font-bold'>
              @{user.name}
          </h4>
          <h4 className='text-center text-[#eaeaea] font-bold'>
              {user.email}
          </h4>
          <h4 className='text-center  text-[#419796] font-bold'>
              <span>Todos: </span>{todos.length}
          </h4>
        
        </div>
    </div>
  )
}

export default ProfileMain