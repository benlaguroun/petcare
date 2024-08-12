import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import MoreAboutUs from './components/MoreAboutUs';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/more-about-us" element={<MoreAboutUs />} /> {/* Corrected this line */}
        <Route
          path="/order-history"
          element={<ProtectedRoute element={<OrderHistory />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
