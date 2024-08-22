import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  const [endpoints, setEndpoints] = useState([]);
  const [newsActive, setNewsActive] = useState(null);
  const [dataActive, setDataActive] = useState([]);

  useEffect(() => {
    axios.get('https://api-berita-indonesia-839qr56wu-bais-projects-84e5a046.vercel.app/')
      .then(response => {
        const endpointsData = response.data.endpoints.map(endpoint => ({
          name: endpoint.name,
          paths: endpoint.paths,
        }));
        setEndpoints(endpointsData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNav = (source) => {
    const selectedEndpoint = endpoints.find(endpoint => endpoint.name === source);
    if (selectedEndpoint) {
      setNewsActive(source);
      setDataActive(selectedEndpoint.paths);
    }
  };

  return (
    <div className='flex-col bg-primary text-third p-2 border-t border-gray-200 justify-center cursor-pointer'>
      <div className='flex flex-wrap justify-center gap-12'>
        {endpoints.map((endpoint, index) => (
          <div 
            key={index} 
            className='cursor-pointer hover:underline' 
            onClick={() => handleNav(endpoint.name)}
          >
            <h2>{endpoint.name}</h2>
          </div>
        ))}
      </div>
      <div className='border-t mt-4'>
        {newsActive && (
          <div>
            <ul className='flex flex-row mt-2 flex-wrap gap-6 text-center justify-center'>
              {dataActive.map((path, i) => (
                <li key={i} className='text-third hover:underline'>
                  <Link to={`/blogs/${newsActive}/${path.name}`}>{path.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationMenu;
