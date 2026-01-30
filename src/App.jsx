import React, { useState } from 'react'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Product from './Product'
import Navbar from './Navbar'
import Cart from './Cart'
const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (val)=>{
    setCart([...cart,val])

  }
  return (
    <>
    <ToastContainer/>
    <Router>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Product addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App