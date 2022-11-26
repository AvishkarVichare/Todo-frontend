import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoContext from '../../context/Todo/TodoContext';

const SideMenu = () => {


  const todoContext = useContext(TodoContext);
  const { todos, getTodos} = todoContext;

  const navigate = useNavigate();

  const handleClickOnTodo = (todo_id)=>{
    navigate(`/${todo_id}/tasks`)
  }


  useEffect(()=>{
    getTodos();
  },[])
  console.log(todos)
  return (
    <div className='w-[20vw] h-[95vh] bg-[#21212b] border-2 border-[#191920]'>
        <h1 className='text-[#bbbabf] font-bold text-[1.4rem] ml-8 mt-8'>
          TODOs
        </h1>
        <div className='text-[#c9c9cb] text-[1.2rem] font-[600]  my-6 '>
            {
              todos.length==0?<h4 className='text-center mt-20 text-gray-500'>No <span className='text-pink-600'>TODOs</span> yet</h4>:todos.map(element=>{
                return(
                  <div key={element._id} onClick={()=>handleClickOnTodo(element._id)} className='hover:bg-[#262632] px-8  py-4 flex gap-5'>
                      <div className={`rounded-xl w-[40px] h-[40px] bg-${element.color}-500`}></div>
                      <h4 className='text-[1.4rem]'>
                        {
                          element.title
                        }
                      </h4>
                  </div>
                )
              })
            }         
        </div>
    </div>
  )
}

export default SideMenu