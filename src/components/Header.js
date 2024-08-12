import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>
      
      <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>
        <span className="navicon"></span>
      </label>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        <Link to="/order-history" onClick={() => setMenuOpen(false)}>Order History</Link>
        {user ? (
          <button onClick={handleLogout} className="nav-link">Logout</button>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
