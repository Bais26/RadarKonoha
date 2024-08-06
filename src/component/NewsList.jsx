import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { useParams } from 'react-router-dom';

function NewsList() {
  const [news, setNews] = useState([]);
  const { type } = useParams(); // Mendapatkan parameter kategori dari URL

  useEffect(() => {
    // Fungsi untuk mengambil data dari API menggunakan Axios
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/antara/${type}/`);
        
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
  }, [type]); // Memperbarui data saat kategori berubah

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}

export default NewsList;
