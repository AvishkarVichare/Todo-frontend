import React from 'react'

const TodoCard = ({todo}) => {
  return (
    <div className='flex flex-col bg-[#21202a] w-[230px] h-[230px] rounded-2xl relative group'>
      <div className='top-[40%] absolute w-full group-hover:top-[10%]  ease-in-out duration-300'>
        <h1 className='text-[1.6rem] text-[#fd77a1] font-bold text-center ease-in-out duration-300 group-hover:opacity-[.2] group-hover:text-[1.2rem] '>
          OFfice
        </h1>
      </div>

    {/* hover */}
      <div className='flex flex-col items-center top-[40%] absolute w-full  text-white ease-in-out duration-300 opacity-0 group-hover:opacity-[100]'>
        <h4 className='text-[#cc9258] font-bold'>
          Tasks: <span className='font-[600]'>10</span>
        </h4>
        <h4 className='text-[#419796] font-bold'>
          In Progress: <span className='font-[600]'>10</span>
        </h4>
        <h4  className='text-[#3aab75] font-bold'>
          Completed: <span className='font-[600]'>10</span>
        </h4>
    
      </div>
    </div>
  )
}

export default TodoCard