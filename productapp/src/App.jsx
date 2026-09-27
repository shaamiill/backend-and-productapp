import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductApi from './components/ProductApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<ProductApi/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
