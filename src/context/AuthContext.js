import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Check if user exists and password matches
    const existingUser = users.find(u => u.username === username && u.password === password);
    if (existingUser) {
      setUser({ username });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const register = (username, password) => {
    // Check if username is already taken
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert('Username already taken');
    } else {
      // Register new user
      setUsers([...users, { username, password }]);
      alert('Registration successful. Please log in.');
      navigate('/login');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
