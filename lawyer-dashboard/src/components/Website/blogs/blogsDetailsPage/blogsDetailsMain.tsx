"use client"
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HeaderWrapper from "../blogsPage/HeaderWrapper/HeaderWrapper";
import NavBarTest from "../../Header/Navbar/Navbar";
import Hero2 from "../blogsPage/Hero2/Hero2";
import Hero from "./Post/Hero/Hero";

import PostContent from "./Post/PostContent/PostContent";



const DetailsComponent = ({ params, blogs ,children}: { params: any, blogs: any,children:any }) => {


  return (
    <div>
 

    
        <HeaderWrapper>
          <NavBarTest />
          <Hero2>
            <Hero  title={blogs.blogTitle}/>
          </Hero2>
        </HeaderWrapper>
        <Container>
          <div className="row sectionStyle d-md-flex overflow-hidden gy-4 gy-lg-0">
            <div className="col-lg-8">
              <PostContent params={params} blog={blogs} />
            </div>
            <div className="col-lg-4">
                      <h4>{children }</h4>

           
          </div>
          </div>
        </Container>

  
    </div>
  );
};

export default DetailsComponent;
