import { useState } from 'react'
import './App.css'
import Home from '../src/pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-400">
    <div className="w-full max-w-4xl">
      <Home/>
    </div>
    </div>
    </>
  )
}

export default App
