
import { getBlogs } from '@/server/web/services/blogs/blogs'
import SideBarSection from './SideBar-section'
import AddSubscribers from '@/server/subscribers/subscribers';


export default async function SideBarNewsDetails({currentBlogId,}:{currentBlogId:string}) {
  const blogsData = await getBlogs();
  
  async function subscribe(formData: FormData) {
    "use server";
    try {
      await AddSubscribers(formData);

    } catch (error) {}
  }

  
  return (
    <SideBarSection blogs={blogsData} currentBlogId={currentBlogId}  Subscribe={subscribe} /> 
  )
}