import React from 'react'

const TodoModal = ({setShowModal}) => {

    const handleDone = (e)=>{
        e.preventDefault();
        setShowModal(false)

    }

    const handleCancle = ()=>{
        setShowModal(false)
      }

  return (
    <>
    <div onClick={handleCancle} className='bg-[#161622] opacity-[.85] absolute top-0 h-[95vh] flex justify-center items-center w-full z-[2]' >
       
    </div>
    <div className='bg-[#191920] absolute top-[30%] left-[20%] z-[10] py-10 px-20 rounded-2xl border-[1px] border-[#A6B2BC]'>
       <div>
        <label className='text-[2rem] text-white font-bold' htmlFor="title">Title:</label>
        <br/>
        <input className='w-[800px] mt-10 py-3 pl-3 rounded-xl' name='title' id='title' type="text" />
        </div>
        <div className='flex text-white justify-end gap-3 mt-2 text-[18px]'>
            <button onClick={handleDone} className='px-6 py-1 rounded-lg bg-[#FD77A1]'>
                Done
            </button>
            <button onClick={handleCancle} className='px-6 py-1 rounded-lg bg-[#87898b]'>
                Cancle
            </button>
        </div>
       </div>
    </>
  )
}

export default TodoModal