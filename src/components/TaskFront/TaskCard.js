import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskContext from '../../context/Task/TaskContext';

const TaskCard = (task) => {
  const taskContext = useContext(TaskContext);
  const {checkTask} = taskContext;
  const todoId = useParams();
  let checkClicked = useRef(false);
  const handleCheck = ()=>{
       
    checkTask(todoId.todoId,task.task._id)
  }

  return (
    <div className='  bg-[#21202a] px-4 py-3 rounded-2xl group'>
       <div className='flex justify-between'>

        <div  className='flex gap-3 w-full'>
       <button onClick={handleCheck}>
         <div  className='border-[4px] px-2 py-2 rounded-lg border-[#fd77a1] h-[16px] w-[16px] relative'>

         <div style={task.task.checked?{
          display:'block'
         }:{
          display:'none'
         }} className=' absolute top-[11.55%] left-[13.5%] w-[12px] h-[12px] bg-[#fd77a1] '></div>

         </div>
        </button>
            <h4 className='text-[#c2c2c5] text-[1.2rem]'>
            {
            task.task.main
            }
        </h4>
        </div>

            <div className='flex text-white gap-6 font-bold mx-3'>
            <button className='text-[#419796]'>
                Edit
            </button>
            <button className='text-[#fd77a1]'>
                delete
            </button>
            </div>
       </div>

       <div className='ease-in-out duration-100 h-0 group-hover:h-[30px] '>
        <h4 className='text-[#419796] font-bold py-2 ml-10 hidden  group-hover:block'>
            {
              task.task.createdat
            }
        </h4>
       </div>
        
    </div>
  )
}

export default TaskCard