"use client"

import { Container } from "react-bootstrap";

import NavBar from "../../Header/Navbar/Navbar";



import PostContent from "./Post/PostContent/PostContent";
import HeaderWrapper from "../../blogs/blogsPage/HeaderWrapper/HeaderWrapper";
import Hero2 from "../../blogs/blogsPage/Hero2/Hero2";
import Hero from "../../blogs/blogsDetailsPage/Post/Hero/Hero";



const DetailsComponent = ({ params, news ,children}: { params: any, news: any,children:any }) => {


  return (
    <div>
 

    
        <HeaderWrapper>
          <NavBar />
          <Hero2>
            <Hero  title={news.newsTitle}/>
          </Hero2>
        </HeaderWrapper>
        <Container>
          <div className="row sectionStyle d-md-flex overflow-hidden gy-4 gy-lg-0">
            <div className="col-lg-8">
              <PostContent params={params} news={news} />
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
