import { getBlogs } from '@/server/web/services/blogs/blogs'
import React from 'react'
import Blog from './BlogList';


export default async function BlogsComponentHome() {
    const blogData = await getBlogs();
  return (
      <>
          <Blog blogData={blogData} sliceTarget={3} shouldSlice={true } />
      </>
  )
}
