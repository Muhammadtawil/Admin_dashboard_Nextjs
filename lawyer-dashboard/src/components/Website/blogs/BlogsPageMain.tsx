
import { getBlogs } from "@/server/web/services/blogs/blogs";
import Blogs from "./blogsPage/blogs";
import SideBarBlogPage from "./blogsPage/SideBar/sideBar";


export default async function BlogsPageMain() {
    const blogData = await getBlogs();

  return (
   <>
      <Blogs blogData={blogData} children={<SideBarBlogPage/>}/>
      </>
  )
}
