
import NewsDetails from "@/components/Website/News/newsDetailsPage/root-component";





export default async function newsDetailsPage({
  params,
}: {
  params: { newsId: string };
  }) {
  
    
  return (
   <>
  <NewsDetails params={params}/>
   
   
   </>
  


  );
  

  
}
