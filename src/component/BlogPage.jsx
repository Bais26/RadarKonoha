import React, { useEffect, useState } from 'react'
import Category from './Category';
import { Outlet } from 'react-router-dom';

function BlogPage() {
    
  return (
    <div>
      <div className='bg-primary text-white'><Category/></div>

      <div className='container mx-auto py-8'>
        <Outlet/>
      </div>
    </div>
  )
}

export default BlogPage
