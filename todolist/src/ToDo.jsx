import { useState,useEffect } from "react";
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
  };
export default function ToDo() {
    const [todos,setTodos]=useState(getInitialData)
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos]);
    const removeTodo=(id)=>{
        const updatedTodos=todos.filter((todo)=>todo.id!==id)
        setTodos(updatedTodos)
    }
    const toggleTodo=(id)=>{
        const updatedTodos=todos.map((todo)=>{
            if(todo.id===id){
                return {...todo,checked:!todo.checked}
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const addToDo=(text)=>{
        
        setTodos((prevTodos)=>{
            return [...prevTodos,{id:Math.random(),text:text,checked:false}];
        });

    };
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                 <ToDoItem todo={todo} id={todo.id} removeTodo={()=> removeTodo(todo.id)} 
                 toggleTodo={()=>toggleTodo(todo.id)}/>
            ))}
            <ToDoForm addToDo={addToDo}/>
        </List>
    )
}


