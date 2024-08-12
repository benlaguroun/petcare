import React from 'react';
import './MoreAboutUs.css';

const MoreAboutUs = () => {
  return (
    <div className="more-about-us">
      <div className="container">
        <h1 className="section-title">More About Us</h1>
        <div className="content">
          <div className="content-item">
            <h2>Our Mission</h2>
            <p>
              At our pet care store, our mission is to provide the highest quality products and services to ensure the well-being and happiness of your pets. We believe that pets are family and deserve the best care possible.
            </p>
          </div>
          <div className="content-item">
            <h2>Our Story</h2>
            <p>
              Founded by passionate pet lovers, our store has grown from a small local shop to a trusted name in pet care. We are dedicated to serving our community and offering a wide range of products for all types of pets.
            </p>
          </div>
          <div className="content-item">
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced professionals who are passionate about animals. We are here to provide expert advice and support to help you take the best care of your pets.
            </p>
          </div>
          <div className="content-item">
            <h2>Contact Us</h2>
            <p>
              We love to hear from our customers! If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. You can contact us at (123) 456-7890 or email us at support@petcarestore.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;
