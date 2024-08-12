// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';


const Home = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Hero />
        <ProductList />
        <BlogSection />
        <AboutSection />
      
      </div>
     
    </div>
  );
};

export default Home;
