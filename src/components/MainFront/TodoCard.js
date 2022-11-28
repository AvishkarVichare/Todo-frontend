import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TrashLogo from '../../assets/trash.svg'
import EditLogo from '../../assets/edit.png'
import TodoContext from '../../context/Todo/TodoContext'
import SpinnerContext from '../../context/Spinner/SpinnerContext'
import {toast} from 'react-hot-toast'
const TodoCard = ({todo, setShowEditTodoModal, todoToEdit}) => {
  const spinnerContext = useContext(SpinnerContext);
  const {isLoading, setIsLoading} = spinnerContext

  const navigate = useNavigate();
  const todoContext = useContext(TodoContext);
  const {deleteTodo} = todoContext;

  const handleClickOnTodo = ()=>{
    navigate(`/${todo._id}/${todo.title}`);
  }

  const handleDelete = (todoId)=>{
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
    console.log("in todo display useeffect")

    deleteTodo(todoId);
    console.log("first")
    toast.success("TODO DELETED successfully")

  }

  const handleEdit = ()=>{
    
    setShowEditTodoModal(true)
    todoToEdit.current = todo;

  }


  return (
    <div  className='cursor-pointer flex flex-col bg-[#21202a] w-[230px] h-[230px] rounded-2xl relative group'>


      <div className='absolute right-3 mt-2 ml-2 group-hover:block hidden z-10'>
        <button onClick={handleEdit} className='hover:bg-[#191920] p-1 rounded-xl'>
          <img className='h-[20px] ' src={EditLogo} alt="" />
        </button>
        <button onClick={()=>handleDelete(todo._id)} className='hover:bg-[#191920] p-1 rounded-xl'>
          <img className='h-[20px] ' src={TrashLogo} alt="" />
        </button>
      </div>

    <div className='w-[230px] h-[230px]' onClick={handleClickOnTodo}>
    

      <div className='top-[40%] absolute w-full group-hover:top-[10%]  ease-in-out duration-300'>
        <h1 className='text-[1.6rem] text-[#fd77a1] font-bold text-center ease-in-out duration-300 group-hover:opacity-[.2] group-hover:text-[1.2rem] '>
          {
            todo.title.length>15?todo.title.slice(0,14).concat("..."):todo.title
          }
        </h1>
        <div className={`mx-auto w-[20px] h-[20px] rounded-xl bg-${todo.color}-500`}></div>
      </div>

    {/* hover */}
      <div className='flex flex-col items-center top-[40%] absolute w-full  text-white ease-in-out duration-300 opacity-0 group-hover:opacity-[100]'>
        <h4 className='text-[#cc9258] font-bold'>
          Tasks: <span className='font-[600]'>{todo.tasks.length}</span>
        </h4>
        <h4 className='text-[#419796] font-bold'>
          In Progress: <span className='font-[600]'>
            {
              todo.tasks.filter(e=>{
                return e.checked!=true
              }).length
            }
          </span>
        </h4>
        <h4  className='text-[#3aab75] font-bold'>
          Completed: <span className='font-[600]'>
          {
              todo.tasks.filter(e=>{
                return e.checked==true
              }).length
            }
          </span>
        </h4>
    
      </div>
    </div>
    </div>
  )
}

export default TodoCard