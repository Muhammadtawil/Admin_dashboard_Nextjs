
import { getBlogs } from '@/server/web/services/blogs/blogs'
import SideBarSection from './SideBar-section'

export default async function SideBarBlogDetails({currentBlogId}:{currentBlogId:string}) {
    const blogsData = await getBlogs();
  return (
    <SideBarSection blogs={blogsData} currentBlogId={currentBlogId} /> 
  )
}
