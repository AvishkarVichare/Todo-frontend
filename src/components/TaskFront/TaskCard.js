import React from 'react'

const TaskCard = () => {
  return (
    <div className='  bg-[#21202a] px-4 py-3 rounded-2xl group'>
       <div className='flex justify-between'>

        <div  className='flex gap-3 w-full'>
       <button >
         <div className='border-[4px] px-2 py-2 rounded-lg border-[#fd77a1] h-[16px] w-[16px]'>
         </div>
        </button>
            <h4 className='text-[#c2c2c5] text-[1.2rem]'>
            Create Video for Youtube
        </h4>
        </div>

            <div className='flex text-white gap-6 font-bold mx-3'>
            <button className='text-[#419796]'>
                Edit
            </button>
            <button className='text-[#fd77a1]'>
                delete
            </button>
            </div>
       </div>

       <div className='ease-in-out duration-100 h-0 group-hover:h-[30px] '>
        <h4 className='text-[#419796] font-bold py-2 ml-10 hidden  group-hover:block'>
            Created on 20 jan 2022
        </h4>
       </div>
        
    </div>
  )
}

export default TaskCard