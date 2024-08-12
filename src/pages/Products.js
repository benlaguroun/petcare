// src/pages/Products.js
import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Products.css'; // Custom CSS for additional styling

const Products = () => {
  return (
    <div className="products-page container my-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
