
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card card">
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.excerpt}</p>
        <a href={post.link} className="btn read-more-btn">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;
