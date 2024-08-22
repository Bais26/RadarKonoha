import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import Banner from '../component/Banner'

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API menggunakan Axios
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://radar-konoha.vercel.app/');
        
        // Memeriksa apakah API berhasil merespon
        if (response.data.success) {
          setNews(response.data.data.posts);
        } else {
          console.error('Gagal mengambil data berita');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data berita:', error);
      }
    };

    fetchNews();
  }, []);
  
  return (
    <div>
      <Banner/>
    <div className='container mx-auto py-8'>
      <h1>Berita Terkini</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={post.thumbnail} alt={post.title} className="w-full object-cover" />
            <h2 className='text-gray-600'>{post.title}</h2>
            <p className='text-gray-600 text-xs mt-2'>{post.pubDate}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
