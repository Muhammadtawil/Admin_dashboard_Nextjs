// "use client"

import NavBarTest from "@/components/Website/Header/Navbar/Navbar";
import BlogsComponentHome from "@/components/Website/blogs/blogsComponent";
import Hero from "@/components/Website/blogs/blogsDetailsPage/Post/Hero/Hero";
import BlogsDetailsMain from "@/components/Website/blogs/blogsDetailsPage/blogsDetailsSection";
import BlogsDetails from "@/components/Website/blogs/blogsDetailsPage/root-component";
import HeaderWrapper from "@/components/Website/blogs/blogsPage/HeaderWrapper/HeaderWrapper";
import Hero2 from "@/components/Website/blogs/blogsPage/Hero2/Hero2";
import React from "react";




export default async function blogsDetailsPage({
  params,
}: {
  params: { blogId: string };
  }) {
  
    
  return (
   <>
  <BlogsDetails params={params}/>
   
   
   </>
  


  );
  

  
}
