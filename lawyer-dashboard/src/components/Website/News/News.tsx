import React from "react";


// import NewsSwiper from "./news_swiper";
import { getNews } from "@/server/web/services/news/news";
import NewsList from "./newsList";
import style from "./Project.module.scss";

import NewsComponent from "@/components/news/news";

const LatestNews = async () => {
  const news = await getNews();
  return (
    <>
     
         
      <NewsList newsData={news} shouldSlice={true} sliceTarget={3}/>
    
    
    </>
 
    );
  };
  
  export default LatestNews;

    
     
    


  

