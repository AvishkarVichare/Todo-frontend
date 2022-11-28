import React, { useContext, useState, useEffect } from 'react'
import addLogo from '../../assets/add-btn.svg'
import leftArrow from '../../assets/left-arrow.svg'
import TaskCard from './TaskCard'
import { useNavigate, useParams } from 'react-router-dom'
import TaskContext from '../../context/Task/TaskContext'
import TaskModal from '../modals/TaskModal'
import EditTaskModal from '../modals/EditTaskModal'
import Spinner from '../Spinner'
import SpinnerContext from '../../context/Spinner/SpinnerContext'
import TodoContext from '../../context/Todo/TodoContext'

const TaskScreen = () => {
  const todoContext = useContext(TodoContext);
  const { todos, setTodos } = todoContext;
  const taskContext = useContext(TaskContext);
  const { tasks, getTasks } = taskContext;
  const { todoId, todoTitle } = useParams()
  const spinnerContext = useContext(SpinnerContext);
  const { isLoading, setIsLoading } = spinnerContext
const [taskIdforEdit, setTaskIdforEdit] = useState("");

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  // setShowEditTaskModal(true)
  // console.log("showedit",showEditTaskModal)
  const [showTaskModal, setShowTaskModal] = useState(false);


  const navigate = useNavigate();

  const handleClickOnBack = () => {
    navigate('/')
  }

  const handleAddTask = () => {
    setShowTaskModal(true)
  }

  useEffect(() => {

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    getTasks(todoId)

  }, [todoId])
  return (
    <div className='relative bg-[#191920]  h-[95vh] w-[100vw] sm:w-[80vw] flex flex-col items-center'>


      <div className='text-[12px] sm:text-[18px] absolute right-5 top-5 font-extrabold	flex gap-5'>
        <h4 className='text-[#6ae3e1] '>
          <span className='text-[#419796]  font-bold'>IN PROGRESS: </span>
          {
            tasks.filter(e => {
              return e.checked === false
            }).length
          }
        </h4>
        <h4 className='text-[#54f6a7] '>
          <span className='text-[#3aab75]  font-bold'>COMPLETED: </span>
          {
            tasks.filter(e => {
              return e.checked === true
            }).length
          }
        </h4>
      </div>

      <div className='w-[80%] sm:w-[60%]  mt-10'>
        <button onClick={handleClickOnBack} className='flex items-center gap-3 ' >
          <div className='px-3 py-3 bg-[#21202a] rounded-xl'>
            <img className='invert h-[19px] mx-auto' src={leftArrow} alt="" />
          </div>
          <h1 className='text-[#cacbcc] text-[2rem] font-bold'>
            {todoTitle}
          </h1>
        </button>
      </div>


      {/* add button  */}
      <button onClick={handleAddTask} className='mt-12 flex gap-3 w-[80%] sm:w-[60%] border-[3px] border-[#1d1d25] px-4 py-3 rounded-2xl group'>
        <div className='bg-[#fd77a1] px-1 py-1 rounded-xl duration-200 ease-in-out group-hover:bg-[#ac2e56]'>
          <img className='h-[25px]' src={addLogo} alt="" />
        </div>
        <h4 className='text-[#8e8f92] text-[19px] font-[500]'>
          Add a task
        </h4>
      </button>

      <div className='overflow-y-scroll w-full flex flex-col items-center mb-10 mt-12'>



        {isLoading || !tasks || tasks.length===0 ? (
          <div className='absolute top-[50%] left-[50%]'>
            {tasks.length===0 && <h1 className='text-[#fd77a1] font-bold'>No tasks</h1>}
            <Spinner isLoading={true} />
          </div>
        ) : (
          <>
            {/* In progress section  */}
            <div className='mt-3 w-[80%] sm:w-[60%]'>
              <h4 className='text-[#cacbcc] text-left text-[1.3rem] font-bold mb-2'>
                In progress - {
                  tasks.filter(e => {
                    return e.checked != true;
                  }).length
                }
              </h4>
              <div className='flex flex-col gap-10'>
                {
                  tasks.filter(e => {
                    return e.checked != true;
                  }).map(element => {
                    return (
                        <TaskCard key={element._id} task={element} setShowEditTaskModal={setShowEditTaskModal} setTaskIdforEdit={setTaskIdforEdit} />
                    )
                  })
                }
              </div>
            </div>

            {/* Completed */}
            <div className='mt-12 w-[80%] sm:w-[60%]'>
              <h4 className='text-[#cacbcc] text-left text-[1.3rem] font-bold mb-2'>
                Completed - {
                  tasks.filter(e => {
                    return e.checked == true;
                  }).length
                }
              </h4>
              <div className='flex flex-col gap-10'>
                {
                  tasks.filter(e => {
                    return e.checked == true;
                  }).map(element => {
                    return (
                      <TaskCard  key={element._id} task={element} setShowEditTaskModal={setShowEditTaskModal} setTaskIdforEdit={setTaskIdforEdit}  />
                    )
                  })
                }
              </div>
            </div>
          </>
        )}


      </div>

      {
        showTaskModal && <TaskModal setShowTaskModal={setShowTaskModal} />
      }
      {
        showEditTaskModal && <EditTaskModal taskIdforEdit={taskIdforEdit} setShowEditTaskModal={setShowEditTaskModal} />
      }

    </div>
  )
}

export default TaskScreen