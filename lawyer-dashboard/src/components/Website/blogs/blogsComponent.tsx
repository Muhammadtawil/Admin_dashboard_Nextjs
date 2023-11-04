import { getBlogs } from '@/server/web/services/blogs/blogs'
import React from 'react'
import BlogWebList from './BlogList';



export default async function BlogsComponentHome() {
    const blogData = await getBlogs();
  return (
      <>
          <BlogWebList blogsData={blogData}/>
      </>
  )
}
