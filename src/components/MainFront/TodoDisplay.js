import React, { useContext, useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import addLogo from '../../assets/add-btn.svg'
import TodoContext from '../../context/Todo/TodoContext'
import Spinner from '../Spinner'
import SpinnerContext from '../../context/Spinner/SpinnerContext'
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '../Search'

const TodoDisplay = ({setShowTodoModal, setShowEditTodoModal, todoToEdit}) => {
  const todoContext = useContext(TodoContext);
  const spinnerContext = useContext(SpinnerContext);
  const {getTodos, todos} = todoContext;
  const navigate = useNavigate()
  const {isLoading, setIsLoading} = spinnerContext
  const [cookies, setCookie, cookieState] = useCookies();
  const location = useLocation()
  
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!cookies.token){
      console.log("first")
      navigate('/signup')
    }
    console.log("In todo display")

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    console.log("in todo display useeffect")
    getTodos();

  }, [cookies.token])
  

  const handleAdd = ()=>{
    setShowTodoModal(true);
    
  }

  // console.log(cookies.token)

  return (
    <>

   
    <div className=' h-[95vh] w-[100vw] sm:w-[80vw] flex flex-col items-center justify-center bg-[#191920] relative'>


      <Search/>

            <div className='  flex flex-wrap gap-[20px] sm:gap-[80px] my-20 mt-8 mb-10 w-[80%] h-[90vh] justify-center py-10 overflow-y-scroll'>
            {
              isLoading  || todos?.length===0 ?(<div className='absolute top-[50%] sm:left-[50%]'>
            {todos?.length===0 && <h1 className='text-[#fd77a1] font-bold'>No todos</h1>}

              <Spinner isLoading={true} />
            </div>):todos.map(element=>{
                return(
                <TodoCard key={element._id} todo={element} setShowEditTodoModal={setShowEditTodoModal} todoToEdit={todoToEdit} />
                )
              })
            }
        </div>
          

        {/* add button  */}

        <button onClick={handleAdd} className='bg-[#fd77a1] rounded-[50%] px-4 py-4 absolute right-6 sm:right-20 bottom-2 sm:bottom-6 duration-200 ease-in-out hover:bg-[#ac2e56]'>
          <img className='invert h-[20px] sm:h-[40px]' src={addLogo} alt="" />
        </button>


      

    </div>
    </>
  )
}

export default TodoDisplay