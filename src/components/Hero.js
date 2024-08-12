import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="hero">
      <h1>Welcome to Pet Care</h1>
      <p>Your one-stop shop for all pet needs</p>
      <button className="hero-button" onClick={handleShopNow}>
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
