
import BlogsDetails from "@/components/Website/blogs/blogDetails";
import BlogsDetailsMain from "@/components/Website/blogs/blogDetails_main";
import React from "react";




export default async function blogsDetails({
  params,
}: {
  params: { blogId: string };
  }) {
  
    
  return (
    <>
    <BlogsDetailsMain params={params} />
    </>


  );
  

  
}
