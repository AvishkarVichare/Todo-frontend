import React, { useContext, useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import addLogo from '../../assets/add-btn.svg'
import TodoContext from '../../context/Todo/TodoContext'
import Spinner from '../Spinner'
import SpinnerContext from '../../context/Spinner/SpinnerContext'

const TodoDisplay = ({setShowTodoModal, setShowEditTodoModal, todoToEdit}) => {
  const todoContext = useContext(TodoContext);
  const spinnerContext = useContext(SpinnerContext);
  const {getTodos, todos} = todoContext;
  const {isLoading, setIsLoading} = spinnerContext

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    // console.log("in")
    getTodos();

  }, [])
  

  const handleAdd = ()=>{
    setShowTodoModal(true);
    
  }

  // console.log(todos)

  return (
    <>

   
    <div className=' h-[95vh] w-[80vw] flex flex-col items-center justify-center bg-[#191920] relative'>

        <div className='  flex flex-wrap gap-[80px] my-20 mb-10 w-[80%] h-[90vh] justify-center py-10 overflow-y-scroll'>
            {
              isLoading || todos.length===0?<div className='absolute top-[50%] left-[50%]'>
              <Spinner isLoading={true} />
            </div>:todos.map(element=>{
                return(
                <TodoCard key={element._id} todo={element} setShowEditTodoModal={setShowEditTodoModal} todoToEdit={todoToEdit} />
                )
              })
            }
        </div>

        {/* add button  */}

        <button onClick={handleAdd} className='bg-[#fd77a1] rounded-[50%] px-4 py-4 absolute right-20 bottom-6'>
          <img className='invert  h-[40px]' src={addLogo} alt="" />
        </button>


      

    </div>
    </>
  )
}

export default TodoDisplay