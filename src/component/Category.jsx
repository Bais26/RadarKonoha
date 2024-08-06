import React from 'react';
import { Link } from 'react-router-dom';

function Category() {

  const categories = [
    {
      "name": "terbaru",
      "path": "/antara/terbaru/"
      },
      {
      "name": "politik",
      "path": "/antara/politik/"
      },
      {
      "name": "hukum",
      "path": "/antara/hukum/"
      },
      {
      "name": "ekonomi",
      "path": "/antara/ekonomi/"
      },
      {
      "name": "bola",
      "path": "/antara/bola/"
      },
      {
      "name": "olahraga",
      "path": "/antara/olahraga/"
      },
      {
      "name": "humaniora",
      "path": "/antara/humaniora/"
      },
      {
      "name": "lifestyle",
      "path": "/antara/lifestyle/"
      },
      {
      "name": "hiburan",
      "path": "/antara/hiburan/"
      },
      {
      "name": "dunia",
      "path": "/antara/dunia/"
      },
      {
      "name": "tekno",
      "path": "/antara/tekno/"
      },
      {
      "name": "otomotif",
      "path": "/antara/otomotif/"
      }
  ];

  return (
    <div className='flex gap-12 flex-wrap p-2 border-t border-gray-200 justify-center'>
      {categories.map(category => (
        <div key={category.id}>
          <Link to={`/blogs/${category.name}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Category;
