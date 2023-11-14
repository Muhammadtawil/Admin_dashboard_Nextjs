"use client"
import Head from "next/head";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsLists from "./NewsLists/NewsLists";
import Hero from "./Hero/Hero";
import NavBar from "../../Header/Navbar/Navbar";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";
import { useTranslations } from "next-intl";
import Hero2 from "../../blogs/blogsPage/Hero2/Hero2";


const News = ({ newsData ,children}: { newsData: any,children:any }) => {
  // State for search functionality implement
  const t=useTranslations('webNews')
  const [newsStateData, setNewsData] = useState(newsData);
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMore = () => {
    const remainingArticles = newsData.length - visibleCount;
    if (remainingArticles <= 2) {
      const newVisibleCount = visibleCount + remainingArticles;
      setVisibleCount(newVisibleCount);
    }
    const newVisibleCount = visibleCount + 2;

    if (newVisibleCount < newsData.length) {
      setVisibleCount(newVisibleCount);
    }
  };


  // Search handler function
  const searcHandler = (e: any) => {
    // Search input value
    let searchValue = e?.target?.value?.trim()?.toLowerCase();
    // Check value and filter the data
    if (searchValue) {
      setNewsData(
        newsData?.filter((data: any) => {
          if (data?.newsTitle?.toLowerCase()?.indexOf(searchValue) !== -1) {
            return data;
          }
        })
      );
    } else {
      setNewsData(newsData);
    }
  };

  return (
    <div>

      <main>
        <HeaderWrapper>
          <NavBar />

          <Hero2>
            <Hero searcHandler={searcHandler} />


          </Hero2>
        </HeaderWrapper>
        <Container>
          <Row className="sectionStyle row">
            <Col md={7} lg={8}>
              <NewsLists newsData={newsData.slice(0, visibleCount)} />
              {visibleCount < newsData.length && (
                <div className="text-center" style={{ paddingTop: "50px" }}>
                  <button onClick={loadMore} className="btn btn-primary">
                   {t('loadMore')}
                  </button>
                </div>
              )}
            </Col>

            <Col md={5} lg={4}>
              {children}
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  );
};

export default News;
