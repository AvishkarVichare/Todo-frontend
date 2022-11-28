import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/Todo/TodoContext'
import { useCookies } from "react-cookie";
import {toast} from 'react-hot-toast';

const Search = () => {
    const [cookies, setCookie] = useCookies();

    const todoContext = useContext(TodoContext)
    const {todos, setTodos, getTodos} = todoContext;
    const [search, setSearch] = useState("")

    const headers = {
        'Content-Type': 'application/json',
        'token': `${cookies.token}`
      }

    const handleOnchange = async(e)=>{
        setSearch(e.target.value)
        // console.log(search)

    }

    const handleSearch = async()=>{
      const res = await axios.get(`${process.env.REACT_APP_API}/searchTodos`,{
        headers,
        params:{
            search
        }
    })

    // console.log(res)
    if(res.data.todos.length===0){
      toast.error("no such todo or task exists")
      return;
    }
    setTodos(res.data.todos.slice())
    }

    useEffect(()=>{
      if(search.length===0){
        console.log("In")
        getTodos()
        return
        }

        handleSearch()

      
    },[search])
  return (
    <div className='w-full mt-8'>
        <input className='bg-[#191920] border-4 border-[#21202a] text-[#fd77a1] w-[70%] py-1 px-2 text-[12px] sm:text-[20px] rounded-xl block mx-auto' placeholder='Search..' name='search' id='search' onChange={handleOnchange} type="text" />
    </div>
  )
}

export default Search