import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const OrderHistoryPage = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
`;

const NoOrdersMessage = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #777;
`;

const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const OrderCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const OrderHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const OrderDate = styled.p`
  font-size: 1rem;
  color: #777;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ProductQuantity = styled.p`
  font-size: 1rem;
  color: #777;
`;

const OrderHistory = () => {
  const { orders, loadOrders } = useCart();

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <OrderHistoryPage>
      <Title>Order History</Title>
      {orders.length === 0 ? (
        <NoOrdersMessage>No past orders</NoOrdersMessage>
      ) : (
        <OrderContainer>
          {orders.map(order => (
            <OrderCard key={order.id}>
              <OrderHeader>Order #{order.id}</OrderHeader>
              <OrderDate>Date: {new Date(order.date).toLocaleString()}</OrderDate>
              {order.items.map(item => (
                <OrderItem key={item.id}>
                  <ProductImage src={item.image} alt={item.name} />
                  <ProductDetails>
                    <ProductName>{item.name}</ProductName>
                    <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
                    <ProductQuantity>Quantity: {item.quantity}</ProductQuantity>
                  </ProductDetails>
                </OrderItem>
              ))}
            </OrderCard>
          ))}
        </OrderContainer>
      )}
    </OrderHistoryPage>
  );
};

export default OrderHistory;
