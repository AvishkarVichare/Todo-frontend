import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SpinnerContext from '../../context/Spinner/SpinnerContext';
import TaskContext from '../../context/Task/TaskContext';

const TaskCard = ({task, setShowEditTaskModal, setTaskIdforEdit}) => {

  const taskContext = useContext(TaskContext);
  const {checkTask, tasks, deleteTask} = taskContext;
  const todoId = useParams();
  const spinnerContext = useContext(SpinnerContext);
  const {isLoading, setIsLoading} = spinnerContext

  const handleDelete = ()=>{

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    deleteTask(todoId.todoId, task._id)
  }

  const handleCheck = ()=>{

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    checkTask(todoId.todoId,task._id)

  }

  const handleClickOnEdit = ()=>{
    setTaskIdforEdit(task)
    setShowEditTaskModal(true);
  }
// console.log("first")
  return (
    <div className='  bg-[#21202a] px-4 py-3 rounded-2xl group'>
       <div className='flex justify-between'>

        <div  className='flex gap-3 w-full'>
       <button onClick={handleCheck}>
         <div  className='border-[4px] px-2 py-2 rounded-lg border-[#fd77a1] h-[16px] w-[16px] relative'>

         <div style={task.checked?{
          display:'block'
         }:{
          display:'none'
         }} className=' absolute top-[11.55%] left-[13.5%] w-[12px] h-[12px] bg-[#fd77a1] '></div>

         </div>
        </button>
           <div className=''>
           <h4 className='text-[#c2c2c5] text-[1.2rem] overflow-hidden w-[150px] sm:w-full'>
            {
            task.main.length>70?task.main.slice(0,70).concat('...'):task.main
            }
        </h4>
           </div>
        </div>

            <div className='flex text-white gap-6 font-bold mx-3'>
            <button onClick={handleClickOnEdit} className='text-[#419796]'>
                Edit
            </button>
            <button onClick={handleDelete} className='text-[#fd77a1]'>
                delete
            </button>
            </div>
       </div>

       <div className='ease-in-out duration-100 h-0 group-hover:h-[30px] flex text-[14px]'>
        <h4 className='text-[#419796] font-bold py-2 ml-10 hidden  group-hover:block'>
            <span className='mr-2 text-[#fd77a1]'>
              Created At:
            </span>
            <span>
            {
              new Date(task.taskcreatedat).toUTCString()
            }
            </span>
        </h4>
        <h4 className='text-[#419796] font-bold py-2 ml-10 hidden  group-hover:block'>
             <span className='mr-2 text-[#fd77a1]'>
              Updated At:
            </span> 
            <span>
            {
              
              new Date(task.taskupdatedAt).toUTCString()
              
            }
            </span>
        </h4>
       </div>
        
    </div>
  )
}

export default TaskCard