import React, { useContext, useState, useEffect } from 'react'
import addLogo from '../../assets/add-btn.svg'
import leftArrow from '../../assets/left-arrow.svg'
import TaskCard from './TaskCard'
import { useNavigate, useParams } from 'react-router-dom'
import TaskContext from '../../context/Task/TaskContext'
import TaskModal from '../modals/TaskModal'

const TaskScreen = () => {

  const taskContext = useContext(TaskContext);
  const {tasks, getTasks} = taskContext;
  const {todoId} = useParams()

  const [showTaskModal, setShowTaskModal] = useState(false);

  const navigate = useNavigate();

  const handleClickOnBack = ()=>{
    navigate('/')
  }

  const handleAddTask = ()=>{
    setShowTaskModal(true)
  }

  useEffect(()=>{
    getTasks(todoId)
  },[todoId, tasks])

  return (
    <div className='relative bg-[#191920]  h-[95vh] w-[80vw] flex flex-col items-center'>


     <div className='w-[60%] mt-10'>
     <button onClick={handleClickOnBack} className='flex items-center gap-3 ' >
        <div className='px-3 py-3 bg-[#21202a] rounded-xl'>
          <img className='invert h-[19px] mx-auto' src={leftArrow} alt="" />
        </div>
        <h1 className='text-[#cacbcc] text-[2rem]'>
          Title
        </h1>
      </button>
     </div>


      {/* add button  */}
      <button onClick={handleAddTask} className='mt-12 flex gap-3 w-[60%] border-[3px] border-[#1d1d25] px-4 py-3 rounded-2xl'>
        <div className='bg-[#fd77a1] px-1 py-1 rounded-xl'>
        <img className='h-[25px]' src={addLogo} alt="" />
        </div>
        <h4 className='text-[#8e8f92] text-[19px] font-[500]'>
          Add a task 
        </h4>
      </button>

     <div className='overflow-y-scroll w-full flex flex-col items-center mb-10 mt-12'>
       {/* In progress section  */}
       <div className='mt-3 w-[60%]'>
        <h4 className='text-[#cacbcc] text-left text-[1.3rem] font-bold mb-2'>
          In progress - {
           tasks.filter(e=>{
            return e.checked!=true;
          }).length
          }
        </h4>
        <div className='flex flex-col gap-10'>
            {
              tasks.filter(e=>{
                return e.checked!=true;
              }).map(element=>{
                return(
                  <TaskCard key={element._id} task={element} />
                )
              })
            }
        </div>
      </div>

      {/* Completed */}
      <div className='mt-12 w-[60%]'>
        <h4 className='text-[#cacbcc] text-left text-[1.3rem] font-bold mb-2'>
          Completed - {
           tasks.filter(e=>{
            return e.checked==true;
          }).length
          }
        </h4>
        <div className='flex flex-col gap-10'>
        {
          tasks.filter(e=>{
            return e.checked==true;
          }).map(element=>{
            return(
              <TaskCard key={element._id} task={element} />
            )
          })
        }
        </div>
      </div>
     </div>

     {
      showTaskModal && <TaskModal setShowTaskModal={setShowTaskModal} />
    }

    </div>
  )
}

export default TaskScreen