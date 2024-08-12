// src/pages/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page container">
      <h1 className="text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item row mb-4">
              <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${getTotalPrice()}</h2>
          <div className="cart-actions text-center">
            <button className="btn btn-secondary mr-2" onClick={clearCart}>Clear Cart</button>
            <button className="btn btn-primary" onClick={handleCheckout}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
