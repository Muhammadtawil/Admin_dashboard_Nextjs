
import { getBlogs } from "@/server/web/services/blogs/blogs";
import Blogs from "./blogsPage/blogs";


export default async function BlogsPageMain() {
    const blogData = await getBlogs();

  return (
   <>
      <Blogs blogData={blogData}/>
      </>
  )
}
