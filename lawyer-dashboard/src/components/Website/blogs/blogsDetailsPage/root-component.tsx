

import NewsDetailsMain from "@/components/Website/blogs/blogsDetailsPage/blogsDetailsSection";
import SideBarNewsDetails from "./SideBar/sideBar";




export default async function BlogsDetails({
  params,
}: {
  params: { blogId: string};
  }) {
  
    
  return (
   <>
     
   
          <NewsDetailsMain params={params} children={<SideBarNewsDetails currentBlogId={params.blogId} />}/>
    
   
   
   </>
  


  );
  

  
}
