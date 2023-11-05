
import { getBlogs } from '@/server/web/services/blogs/blogs'
import SideBarSection from './SideBar-section'

export default async function SideBarBlogPage() {
    const blogsData = await getBlogs();
  return (
    <SideBarSection blogsData={blogsData}/> 
  )
}
