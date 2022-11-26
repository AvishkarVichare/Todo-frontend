import axios from "axios";
import { useState } from "react";
import TodoContext from "./TaskContext";

const TaskState = (props)=>{    

    const [tasks, setTasks] = useState([]);

    // getting tasks 
    const getTasks = async(todoId)=>{
        const res = await axios.get(`/getTasks/${todoId}`);
        // console.log(res.data.tasks);
        setTasks(res.data.tasks);
    }

    // add task 
    const addTask = async(todoId, task)=>{
        const res = await axios.put(`/addTask/${todoId}`, {
            main: task
        });
        console.log(res);
    }

    // check task
    const checkTask = async(todoId, taskId)=>{
        const res = await axios.put(`/checkTask/${todoId}/${taskId}`)
        console.log(res);
        setTasks(res.data.todo.tasks)
    }

    return(

        <TodoContext.Provider value={{getTasks, tasks, addTask, checkTask}}>
            {
                props.children
            }
        </TodoContext.Provider>
    )
}

export default TaskState;