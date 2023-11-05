"use client"
import Head from "next/head";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogLists from "./BlogLists/BlogLists";
import Hero from "./Hero/Hero";
import NavBarTest from "../../Header/Navbar/Navbar";
import Hero2 from "./Hero2/Hero2";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";
import SideBarBlogPage from "./SideBar/sideBar";


const Blogs = ({ blogData }: { blogData: any }) => {
  // State for search functionality implement
  const [blogsData, setBlogsData] = useState(blogData);
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMore = () => {
    const remainingArticles = blogsData.length - visibleCount;
    if (remainingArticles <= 2) {
      const newVisibleCount = visibleCount + remainingArticles;
      setVisibleCount(newVisibleCount);
    }
    const newVisibleCount = visibleCount + 2;

    if (newVisibleCount < blogsData.length) {
      setVisibleCount(newVisibleCount);
    }
  };


  // Search handler function
  const searcHandler = (e: any) => {
    // Search input value
    let searchValue = e?.target?.value?.trim()?.toLowerCase();
    // Check value and filter the data
    if (searchValue) {
      setBlogsData(
        blogData?.filter((data: any) => {
          if (data?.blogTitle?.toLowerCase()?.indexOf(searchValue) !== -1) {
            return data;
          }
        })
      );
    } else {
      setBlogsData(blogData);
    }
  };

  return (
    <div>
      <Head>
        <title>lawFirm - Blogs</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderWrapper>
          <NavBarTest />

          <Hero2>
            <Hero searcHandler={searcHandler} />


          </Hero2>
        </HeaderWrapper>
        <Container>
          <Row className="sectionStyle row">
            <Col md={7} lg={8}>
              <BlogLists blogsData={blogsData.slice(0, visibleCount)} />
              {visibleCount < blogsData.length && (
                <div className="text-center" style={{ paddingTop: "50px" }}>
                  <button onClick={loadMore} className="btn btn-primary">
                    Load More
                  </button>
                </div>
              )}
            </Col>

            <Col md={5} lg={4}>
              <SideBarBlogPage />
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  );
};

export default Blogs;
