import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
   
    
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <h1 class="text-3xl font-bold text-center mt-8 mb-4 text-white">Background Changer App</h1>

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <div className='flex flex-wrap justify-center gap-3' >
          <button onClick={()=>{setColor('blue')}} class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Blue</button>
          <button onClick={()=>{setColor('green')}} class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Green</button>
          <button onClick={()=>{setColor('purple')}} class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Purple</button>
          <button onClick={()=>{setColor('red')}} class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Red</button>
          <button onClick={()=>{setColor('lavender')}} class="bg-lavender hover:bg-lavender text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Lavender</button>
          <button onClick={()=>{setColor('yellow')}} class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Yellow</button>
        </div>
      </div>
    </div>
      
   
  )
}

export default App
