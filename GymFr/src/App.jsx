import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from "react-router-dom";
import Hompage from './Pages/Hompage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Hompage/>} />
        {/* <Route path ="/about" element={<AboutPage/>} /> */}
      </Routes>
    </>
  )
}

export default App
