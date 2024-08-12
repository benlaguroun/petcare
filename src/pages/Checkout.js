// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, saveOrder } = useCart();
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      firstName,
      phoneNumber,
      address,
      items: cart,
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
    };

    await saveOrder(orderDetails);

    alert('Order placed successfully!');
    // Redirect or clear form as needed
  };

  return (
    <div className="checkout-page container">
      <h2 className="text-center">Checkout</h2>
      <form onSubmit={handleOrderSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
