import React, { useContext, useEffect } from 'react'
import TodoCard from './TodoCard'
import addLogo from '../../assets/add-btn.svg'
import TodoContext from '../../context/Todo/TodoContext'

const TodoDisplay = ({setShowTodoModal}) => {
  const todoContext = useContext(TodoContext);
  const {getTodos, todos} = todoContext;

  useEffect(() => {
    
    getTodos()

  }, [todos])
  

  const handleAdd = ()=>{
    setShowTodoModal(true)
  }

  // console.log(todos)

  return (
    <>
    <div className=' h-[95vh] w-[80vw] flex flex-col items-center justify-center bg-[#191920] relative'>

        <div className='  flex flex-wrap gap-[80px] my-20 mb-10 w-[80%] h-[90vh] justify-center py-10 overflow-y-scroll'>
            {
              todos.length==0?<h4 className='text-center my-auto text-gray-500 text-[2rem]'>No <span className='text-pink-600'>TODOs</span> yet</h4>:todos.map(element=>{
                return(
                  <TodoCard key={element._id} todo={element} />
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