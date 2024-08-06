import React from 'react';

function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-gray-600 text-xs mt-2"> {post.pubDate} </p>
      </div>
    </div>
  );
}

export default BlogCard;
