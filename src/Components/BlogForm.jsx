
import React, { useState, useEffect } from 'react';

const AddBlogForm = ({ onAdd, editMode, editBlogData }) => {
  const [blogUrl, setBlogUrl] = useState('');
  const [blogtitle, setBlogTitle] = useState('');
  const [blogdescription, setBlogDescription] = useState('');

  useEffect(() => {
    if (editMode && editBlogData) {
      setBlogUrl(editBlogData.blogUrl);
      setBlogTitle(editBlogData.blogtitle);
      setBlogDescription(editBlogData.blogdescription);
    }
  }, [editMode, editBlogData]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!blogUrl || !blogtitle || !blogdescription){
      alert('Enter valid statements') 
      return};
    onAdd({ blogUrl, blogtitle, blogdescription });
    setBlogUrl('');
    setBlogTitle('');
    setBlogDescription('');
  };

  return (
    <form onSubmit={submitForm} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Image URL"
        value={blogUrl}
        onChange={(e) => setBlogUrl(e.target.value)}
        className="border border-gray-300 rounded-md w-full px-3 py-2 mt-2"
      />
      <input
        type="text"
        placeholder="Blog Title"
        value={blogtitle}
        onChange={(e) => setBlogTitle(e.target.value)}
        className="border border-gray-300 rounded-md w-full px-3 py-2 mt-2 "
      />
      <textarea
        placeholder="Blog Description"
        value={blogdescription}
        onChange={(e) => setBlogDescription(e.target.value)}
        className="border border-gray-300 rounded-md w-full px-3 py-2 mt-2 "
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        {editMode ? 'Edit' : 'Add'}
      </button>
    </form>

  );
};

export default AddBlogForm;
