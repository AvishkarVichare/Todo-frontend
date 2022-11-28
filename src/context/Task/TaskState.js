import axios from "axios";
import { useState } from "react";
import TodoContext from "./TaskContext";
import { useCookies } from "react-cookie";

const TaskState = (props)=>{    
    const [cookies, setCookie] = useCookies();

    const [tasks, setTasks] = useState([]);

    const headers = {
        'Content-Type': 'application/json',
        'token': cookies.token
      }

    // getting tasks 
    const getTasks = async(todoId)=>{
        const res = await axios.get(`${process.env.REACT_APP_API}/getTasks/${todoId}`,{
            headers
        });
        // console.log(res.data.tasks);
        setTasks(res.data.tasks);
    }

    // add task 
    const addTask = async(todoId, task)=>{
        const res = await axios.put(`${process.env.REACT_APP_API}/addTask/${todoId}`, {
            main: task
        },{
            headers
        });
        const newTasks = res.data.todo.tasks.slice();
        // setTasks(res.data.savedTask.tasks.slice())
        setTasks(newTasks)
    }

    // check task
    const checkTask = async(todoId, taskId)=>{
        console.log(headers)
        const res = await axios.put(`${process.env.REACT_APP_API}/checkTask/${todoId}/${taskId}`,{},{
            headers
        })
        console.log(res);
        const newTasks = res.data.todo.tasks.slice();
        setTasks(newTasks);
    }

    // edit task 
    const editTask = async(todoId, taskId, editedPart)=>{
        console.log(cookies.token)
        const res = await axios.put(`${process.env.REACT_APP_API}/editTask/${todoId}/${taskId}`,editedPart,{
            headers
        })
        console.log(res);
        const newTasks = res.data.todo.tasks.slice();
        setTasks(newTasks);
    }

    // delete task 
    const deleteTask = async(todoId, taskId)=>{
        const res = await axios.put(`${process.env.REACT_APP_API}/deleteTask/${todoId}/${taskId}`,{},
        {
            headers
        }
        )
        const newTasks = res.data.todo.tasks.slice();
        setTasks(newTasks)
        // console.log(res);
    }


    return(

        <TodoContext.Provider value={{getTasks, tasks, addTask, checkTask, editTask, deleteTask}}>
            {
                props.children
            }
        </TodoContext.Provider>
    )
}

export default TaskState;