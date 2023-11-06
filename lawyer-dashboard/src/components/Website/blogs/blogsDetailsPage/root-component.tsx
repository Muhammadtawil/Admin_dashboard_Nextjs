// "use client"

import NavBarTest from "@/components/Website/Header/Navbar/Navbar";
import BlogsComponentHome from "@/components/Website/blogs/blogsComponent";
import Hero from "@/components/Website/blogs/blogsDetailsPage/Post/Hero/Hero";
import BlogsDetailsMain from "@/components/Website/blogs/blogsDetailsPage/blogsDetailsSection";
import HeaderWrapper from "@/components/Website/blogs/blogsPage/HeaderWrapper/HeaderWrapper";
import Hero2 from "@/components/Website/blogs/blogsPage/Hero2/Hero2";
import React from "react";
import SideBarSection from "./SideBar/SideBar-section";
import SideBarBlogDetails from "./SideBar/sideBar";




export default async function BlogsDetails({
  params,
}: {
  params: { blogId: string};
  }) {
  
    
  return (
   <>
        {/* <HeaderWrapper>
          <NavBarTest />
          <Hero2>
            <Hero />
          </Hero2>
        </HeaderWrapper> */}
          <BlogsDetailsMain params={params} children={<SideBarBlogDetails currentBlogId={params.blogId} />}/>
    
   
   
   </>
  


  );
  

  
}
