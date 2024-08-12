// src/components/BlogSection.js
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import './BlogSection.css';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPosts(data.blogPosts))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">From Our Blog</h2>
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          ) : (
            <p className="text-center text-light">No blog posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
