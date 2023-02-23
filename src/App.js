import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about';
import NavBar from './components/navbar';
import Profile from './pages/profile';
import HomePage from './pages/home';
import CheckOut from './pages/checkout';
import Form from './pages/edit';
import Update from './pages/update';
import FooterPage from './components/footer';
import CartHome from './shoping/Carthome';
import ProductInfo from './shoping/productinfo';
import CartPage from './pages/cart';
import Login from './pages/login';
import React from 'react';
import { ThemeContext } from './theme-context';

function App() {
  const { theme } = React.useContext(ThemeContext)

  return (
    // <>
      <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <NavBar />
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/edit" element={<Form />} />
          <Route path="/carthome" element={<CartHome />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<CartPage />} />
          
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
        <FooterPage />
      </div>
    // </>  
  );
}
export default App;