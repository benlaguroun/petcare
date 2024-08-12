import React from 'react';
import { Link } from 'react-router-dom'; 
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>About Us</h2>
            <p>
              Welcome to our pet care store. We offer a wide range of products to keep your pets happy and healthy.
              Our mission is to provide the best quality products for your beloved pets. Whether you have a dog, cat,
              bird, or any other pet, we have something for you. Thank you for choosing us for your pet care needs.
            </p>
            <Link to="/more-about-us" className="btn btn-primary read-more-btn">Read More</Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
