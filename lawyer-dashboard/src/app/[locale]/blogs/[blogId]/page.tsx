


import BlogsDetails from "@/components/Website/blogs/blogsDetailsPage/root-component";






export default async function blogsDetailsPage({
  params,
}: {
  params: { blogId: string };
  }) {
  
    
  return (
   <>
  <BlogsDetails params={params}/>
   
   
   </>
  


  );
  

  
}
