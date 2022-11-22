import React from 'react'
import TodoCard from './TodoCard'
import addLogo from '../../assets/add-btn.svg'

const TodoDisplay = ({setShowModal}) => {

  const handleAdd = ()=>{
    setShowModal(true)
  }
  return (
    <>
    <div className=' h-[95vh] w-[80vw] flex flex-col items-center justify-center bg-[#191920] relative'>

        <div className='  flex flex-wrap gap-[80px] my-20 mb-10 w-[80%] h-[90vh] justify-center py-10 overflow-y-scroll'>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
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