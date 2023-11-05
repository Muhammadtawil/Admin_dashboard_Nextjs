

import BlogsDetailsMain from "@/components/Website/blogs/blogsDetailsPage/blogsDetailsSection";
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
