// src/context/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = state.cart.find(item => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'SAVE_ORDER':
      const newOrder = {
        id: new Date().getTime(),
        items: [...state.cart],
        date: new Date().toISOString()
      };
      const updatedOrders = [...state.orders, newOrder];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      console.log('Orders saved to localStorage:', updatedOrders);
      return { ...state, cart: [], orders: updatedOrders };
    case 'LOAD_ORDERS':
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [], orders: [] });

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    dispatch({ type: 'LOAD_ORDERS', payload: storedOrders });
    console.log('Loaded orders from localStorage:', storedOrders);
  }, []);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = productId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const saveOrder = () => {
    dispatch({ type: 'SAVE_ORDER' });
  };

  const loadOrders = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    dispatch({ type: 'LOAD_ORDERS', payload: orders });
    console.log('Orders loaded:', orders);
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, orders: state.orders, addToCart, removeFromCart, clearCart, saveOrder, loadOrders }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
