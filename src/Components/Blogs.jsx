// Blog.js
import React from 'react';

const Blog = ({ blog, onDelete, onEdit }) => {
  return (
    <div>
      <img src={blog.blogUrl} alt={blog.blogtitle} />
      <h2>{blog.blogtitle}</h2>
      <p>{blog.blogdescription}</p>
      <div className='m-4 ml-0'>
        <button className='bg-blue-500 text-white mr-5 pl-2 pr-2 rounded-lg' onClick={() => onEdit(blog)}>Edit</button>
        <button className='bg-red-500 text-white pl-2 pr-2 rounded-lg' onClick={() => onDelete(blog.id)}>Delete</button>
      </div>
      
    </div>
  );
};

export default Blog;
