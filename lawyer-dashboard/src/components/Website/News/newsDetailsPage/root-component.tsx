

import SideBarNewsDetails from "./SideBar/sideBar";
import NewsDetailsMain from "./newsDetailsSection";


export default async function NewsDetails({
  params,
}: {
  params: { newsId: string};
  }) {
  
    
  return (
   <>

          <NewsDetailsMain params={params} children={<h1>SideBar</h1>}/>
    
   
   
   </>
  


  );
  

  
}
