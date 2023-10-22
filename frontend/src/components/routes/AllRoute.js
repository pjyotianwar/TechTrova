import React from 'react'
import ProductLoad from '../Context/ProductLoad'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Laptop from '../pages/Laptop'
import Mobile from '../pages/Mobile'
import Tablet from '../pages/Tablet'
import Accessories from '../pages/Accessories'
import ResponsiveAppBar from '../header/ResponsiveAppBar'
import Footer from '../Footer/Footer'
import Login from '../LogIn_SigIn/Login'
import SignUp from '../LogIn_SigIn/SignUp'
import Product from '../ProductShow/Product'
import Order from '../AddToCart/Order'
import Success from '../Payment/Success'
import Cancel from '../Payment/Cancel'

const AllRoute = () => {
  return (
    <div>
      <ProductLoad>
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptop/' element={<Laptop/>}/>
          <Route path='/Mobile/' element={<Mobile/>}/>
          <Route path='/tablet' element={<Tablet/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/Signup"} element={<SignUp/>}/>

          <Route path="/product/:id/:name" element={<Product/>} />
          <Route path="/order" element={<Order />} />


          {/* Payment Routes */}
          <Route path="/Success" element={<Success/>} />
          <Route path="/Cancel" element={<Cancel/>} />
        </Routes>
        <Footer/>
      </ProductLoad>
    </div>
  )
}

export default AllRoute
