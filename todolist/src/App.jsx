import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import ToDo from './ToDo'

function App() {

  return (
    <>
    <CssBaseline/>
    <h1>ToDo List</h1>
    <ToDo/>
      
    </>
  )
}

export default App
