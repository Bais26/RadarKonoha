import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API menggunakan Axios
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3333/antara/terbaru/');
        
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
      <h1>Berita Terkini</h1>
      <div className="news-list">
        {news.map((post, index) => (
          <div key={index} className="news-item">
            <img src={post.thumbnail} alt={post.title} className="thumbnail" />
            <h2>{post.title}</h2>
            <p>{post.pubDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
