"use client"
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HeaderWrapper from "../blogsPage/HeaderWrapper/HeaderWrapper";
import NavBar from "../../Header/Navbar/Navbar";
import Hero2 from "../blogsPage/Hero2/Hero2";
import Hero from "./Post/Hero/Hero";


import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const DynamicPostContent = dynamic(() => import('../blogsDetailsPage/Post/PostContent/PostContent'), { ssr: false });


const DetailsComponent = ({ params, blogs ,children}: { params: any, blogs: any,children:any }) => {
  const path = usePathname()
  const arabic=path.includes('ar')

  return (
    <div>
 

    
        <HeaderWrapper>
          <NavBar />
          <Hero2>
            <Hero  title={blogs.blogTitle}/>
          </Hero2>
        </HeaderWrapper>
        <Container>
          <div className="row sectionStyle d-md-flex overflow-hidden gy-4 gy-lg-0">
            <div className="col-lg-8">
              <DynamicPostContent params={params} blog={blogs} />
            </div>
            <div className="col-lg-4">
                      {children }

           
          </div>
          </div>
        </Container>

  
    </div>
  );
};

export default DetailsComponent;
