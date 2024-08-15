import React, { useEffect, useState } from 'react'
import ListNews from './ListNews'
import { Outlet } from 'react-router-dom';

function BlogPage() {
    
  return (
    <div>
      <div className='bg-primary text-white'><ListNews/></div>
      <div className='container mx-auto py-8'>
        <Outlet/>
      </div>
    </div>
  )
}

export default BlogPage
