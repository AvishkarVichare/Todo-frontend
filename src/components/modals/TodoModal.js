import React, { useContext, useState } from 'react'
import SpinnerContext from '../../context/Spinner/SpinnerContext';
import TodoContext from '../../context/Todo/TodoContext';
import {toast} from 'react-hot-toast'

const TodoModal = ({setShowTodoModal}) => {

    const todoContext = useContext(TodoContext);
    const {createTodo} = todoContext;
    const spinnerContext = useContext(SpinnerContext);

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("red");
    const {isLoading, setIsLoading} = spinnerContext

    const handleDone = ()=>{

      if(!title){
        toast.error("title cant be empty")
        return;
      }
        

        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false)
        }, 500);
        setShowTodoModal(false);
        createTodo(title, color);
        toast.success("TODO Added successfully")

    }

    const handleCancle = ()=>{
      setShowTodoModal(false)
      }

    const handleOnChange = (e)=>{
        setTitle(e.target.value);
    }
    
    const handleKeyUp = (e)=>{
      // console.log(e.key)
      if(e.code ==='Enter')
        handleDone()
    }
  return (
    <>
    <div onClick={handleCancle} className='bg-[#161622] opacity-[.85] absolute top-0 h-[95vh] flex justify-center items-center w-full z-[2] ' >
       
    </div>
    <div className='bg-[#191920] fixed w-fit right-[10%] left-[10%] mx-auto top-[30%]  z-[10] py-10 px-10 sm:px-20 rounded-2xl border-[1px] border-[#A6B2BC]'>
       <div>
        <label className='text-[20px] sm:text-[2rem] text-white font-bold' htmlFor="title">Todo:</label>
        <br/>
        <input onKeyUp={handleKeyUp} onChange={handleOnChange} className='w-[230px] sm:w-[600px] mt-10 py-3 pl-3 rounded-xl' name='title' id='title' type="text" />
        </div>
        <div className='flex flex-col mt-7'>
          <h4 className=' text-[15px] sm:text-basefont-bold text-white mb-3'>
            Choose Color for Your TODO:
          </h4>
            <div className='flex gap-1'>
              <div onClick={()=>setColor("red")} className='cursor-pointer border-2 border-black w-[20px] h-[20px] bg-red-500'></div>
              <div onClick={()=>setColor("blue")} className='cursor-pointer border-2 border-black w-[20px] h-[20px] bg-blue-500'></div>
              <div onClick={()=>setColor("orange")} className='cursor-pointer border-2 border-black w-[20px] h-[20px] bg-orange-500'></div>
              <div onClick={()=>setColor("pink")} className='cursor-pointer border-2 border-black w-[20px] h-[20px] bg-pink-500'></div>
              <div onClick={()=>setColor("gray")} className='cursor-pointer border-2 border-black w-[20px] h-[20px] bg-gray-500'></div>
            </div>
        </div>
        <div className='flex text-white justify-end gap-3 mt-2 text-[14px] sm:text-[18px]'>
            <button  onClick={handleDone} className='px-6 py-1 rounded-lg bg-[#FD77A1] duration-200 ease-in-out hover:bg-[#ac2e56]'>
                Done
            </button>
            <button onClick={handleCancle} className='px-6 py-1 rounded-lg bg-[#87898b] duration-200 ease-in-out hover:bg-[#363637]'>
                Cancle
            </button>
        </div>
       </div>
    </>
  )
}

export default TodoModal