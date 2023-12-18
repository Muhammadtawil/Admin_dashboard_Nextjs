
import DetailsComponent from "./blogsDetailsMain";


export default async function BlogsDetailsMain({
  params,
  children
}: {
  params: { blogId: string,blogTitle:string };
  children: any;
}) {


  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const blogUrl = process.env.BLOGIDURL;
  const response = await fetch(`${blogUrl}/${params.blogId}`, requestOptions);
  const blog = await response.json();



  return (
    <>
              <head>
        <title>{blog.blogTitle }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={blog.blogTitle } />
        <meta property="og:description" content={blog.blogContent} />
        <meta property="og:image" content={blog.blogImageUrl}/>
        {/* <meta property="og:image:type" content="image/png"/> */}
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:type" content="webiste" />
      </head>
      <DetailsComponent params={params} blogs={blog} children={children}  />
    
    </>
  );
}
