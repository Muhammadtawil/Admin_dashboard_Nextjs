
import { getNews } from "@/server/web/services/news/news";
import NewsList from "./newsList";

const LatestNews = async () => {
  const news = await getNews();
  return (
    
    
         
      <NewsList newsData={news} shouldSlice={true} sliceTarget={4}/>
    
    
 
    );
  };
  
  export default LatestNews;

    
     
    


  

