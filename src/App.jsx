// App.js
import React, { useState } from 'react';
import AddBlogForm from './Components/BlogForm';
import Blog from './Components/Blogs';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editBlogData, setEditBlogData] = useState(null);

  const handleAddBlog = (newBlog) => {
    if (editMode) {
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === editBlogData.id) {
          return { ...newBlog, id: editBlogData.id };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      setEditMode(false);
      setEditBlogData(null);
    } else {
      setBlogs([...blogs, { ...newBlog, id: Math.random().toString()}]);
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleEditBlog = (blog) => {
    setEditMode(true);
    setEditBlogData(blog);
  };

  return (
    <div className="App flex flex-col items-center h-screen">
      <h1 className='text-3xl mb-4'>My Blog App</h1>
      <h3 className='text-xl mb-4'>Total number of blogs: {blogs.length}</h3>
      <AddBlogForm onAdd={handleAddBlog} editMode={editMode} editBlogData={editBlogData} />
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} onDelete={handleDeleteBlog} onEdit={handleEditBlog} />
      ))}
    </div>

  );
}

export default App;
