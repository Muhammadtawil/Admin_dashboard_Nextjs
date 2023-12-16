


import BlogsDetails from "@/components/Website/blogs/blogsDetailsPage/root-component";






export default async function blogsDetailsPage({
  params,
}: {
    params: { blogId: string ,blogTitle: string; };
  }) {
  
  // console.log('params:', JSON.stringify(params));


  return (
    <>
          <head>
        <title>{params.blogTitle }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={params.blogTitle } />
        <meta property="og:description" content={params.blogTitle} />
        <meta property="og:image" content="/logo-share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="webiste" />
      </head>
  <BlogsDetails params={params}/>
   
   
   </>
  


  );
  

  
}
