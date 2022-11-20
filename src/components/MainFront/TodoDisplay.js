import React from 'react'
import TodoCard from './TodoCard'

const TodoDisplay = () => {
  return (
    <>
    <div className=' h-[95vh] w-full flex flex-col items-center justify-center bg-[#191920]'>

        <div className='  flex flex-wrap gap-10 my-10 w-[90%] h-[90vh] justify-center py-10 overflow-y-scroll'>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        </div>

    </div>
    </>
  )
}

export default TodoDisplay