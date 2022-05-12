import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Blog from '../pages/Blog'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/blog' element={<Blog/>}/>
    </Routes>
  )
}

export default MyRoutes