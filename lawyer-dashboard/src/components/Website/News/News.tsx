import React from "react";


import NewsSwiper from "./news_swiper";
import { getNews } from "@/server/web/services/news/news";

const LatestNews = async () => {
  const news = await getNews();
  return (
    <div id="news" className="blog-area">
      <div className="blog-inner area-padding">
        <div className="blog-overly"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2 className="news_title">Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Start News */}

            <NewsSwiper news={news} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
