import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import { HomePage, Login, Register, Product, Cart, PolicyPage, Contact, Accessory, About } from './container'
import { NotFound, ProductView, AccessoryView } from './components'
import { CartProvider } from "react-use-cart"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes >

          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/catalog' element={<Product />} />
          <Route path='/catalog/:slug' element={<ProductView />} />
          <Route path='/accessories' element={<Accessory />} />
          <Route path='/accessories/:slug' element={<AccessoryView />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Routes>





      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
