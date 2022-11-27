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
        setTodos(todos.concat(res.data.todo));
    }


    // delete todo
    const deleteTodo = async(todoId)=>{
        const res = await axios.delete(`/deleteTodo/${todoId}`);
        console.log(res)
        setTodos(todos.filter(e=>e._id!==res.data.deletedTodo._id));
    }


    // edit todo 
    const editTodo = async(todoId,editedPart)=>{
        const res = await axios.put(`/editTodo/${todoId}`,editedPart);
        // const index = todos.indexOf(res.data.editedTodo);
        const index = todos.indexOf(todos.filter(e=>e._id===todoId)[0])
        const newTodos = todos.slice();
        newTodos.splice(index,1,res.data.editedTodo);

        // console.log(todos)
        setTodos(newTodos);

    }

    return(

        <TodoContext.Provider value={{getTodos, todos, createTodo, deleteTodo, editTodo}}>
            {
                props.children
            }
        </TodoContext.Provider>
    )
}

export default TodoState;