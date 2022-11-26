import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import TaskContext from '../../context/Task/TaskContext';
import TodoContext from '../../context/Todo/TodoContext';

const TaskModal = ({setShowTaskModal}) => {

    const taskContext = useContext(TaskContext);
    const {addTask} = taskContext;
    const [task, setTask] = useState("");

    const todoId = useParams();

    const handleDone = (e)=>{

      if(!task){
        alert("enter task add custom alert notification")
        return
      }
        
        e.preventDefault();
        setShowTaskModal(false);
        addTask(todoId.todoId, task);

    }

    const handleCancle = ()=>{
        setShowTaskModal(false)
      }

    const handleOnChange = (e)=>{
        setTask(e.target.value);
    }

  return (
    <>
    <div onClick={handleCancle} className='bg-[#161622] opacity-[.85] absolute top-0 h-[95vh] flex justify-center items-center w-full z-[2] ' >
       
    </div>
    <div className='bg-[#191920] absolute mx-auto top-[30%] z-[10] py-10 px-20 rounded-2xl border-[1px] border-[#A6B2BC]'>
       <div>
        <label className='text-[2rem] text-white font-bold' htmlFor="title">Task:</label>
        <br/>
        <input onChange={handleOnChange} className='w-[650px] mt-10 py-2 pl-3 rounded-xl' name='title' id='title' type="text" />
        </div>
        <div className='flex text-white justify-end gap-3 mt-2 text-[18px]'>
            <button onClick={handleDone} className='px-6 py-1 rounded-lg bg-[#FD77A1]'>
                Done
            </button>
            <button onClick={handleCancle} className='px-6 py-1 rounded-lg bg-[#87898b]'>
                Cancle
            </button>
        </div>
       </div>
    </>
  )
}

export default TaskModal