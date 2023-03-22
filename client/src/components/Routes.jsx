import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegForm from './RegForm'
import LoginForm from './LoginForm'
import Home from './Home'

const Routess = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<RegForm/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routess