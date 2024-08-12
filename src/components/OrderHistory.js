import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const OrderHistory = () => {
  const { orders, loadOrders } = useCart();

  useEffect(() => {
    loadOrders();
    console.log('Loaded orders:', orders);
  }, [loadOrders]);

  return (
    <div className="order-history-page">
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No past orders</p>
      ) : (
        <div>
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <h2>Order #{order.id}</h2>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              {order.items.map(item => (
                <div key={item.id} className="order-product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;

