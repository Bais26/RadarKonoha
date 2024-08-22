import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogCard from './BlogCard';

const NewsList = () => {
  const { source, category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://api-berita-indonesia-839qr56wu-bais-projects-84e5a046.vercel.app/${source}/${category}/`);
        
        if (response.data.success) {
          setNews(response.data.data.posts);
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [source, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.length > 0 ? (
        news.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default NewsList;
