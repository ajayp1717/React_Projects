import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function ToDoForm({addToDo}) {
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <ListItem>
            
            <TextField label="Enter Tasks" variant="filled" onChange={handleChange} value={text}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                <IconButton
                  aria-label="create task"
                  edge="end"
                >
                    <Create />
                </IconButton>
              </InputAdornment>),
              }} />
            
        </ListItem>
        </form>
        
    );
}
