import axios from "axios";
import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props)=>{    

    const [todos, setTodos] = useState([]);

    // getting todos 
    const getTodos = async()=>{
        const res = await axios.get('/getTodos');
        // console.log(res.data.todos);
        setTodos(res.data.todos)
    }

    // adding todo 
    const createTodo = async(title, color)=>{
        const res = await axios.post('/createTodo',{
            title,
            color
        })
        // console.log(res.data.todo)
        todos.push(res.data.todo)
    }

    return(

        <TodoContext.Provider value={{getTodos, todos, createTodo}}>
            {
                props.children
            }
        </TodoContext.Provider>
    )
}

export default TodoState;