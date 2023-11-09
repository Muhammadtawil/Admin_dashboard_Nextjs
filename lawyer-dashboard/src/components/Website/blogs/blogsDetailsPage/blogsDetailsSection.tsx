


import { Translator } from "google-translate-api-x";
import DetailsComponent from "./blogsDetailsMain";

export default async function BlogsDetailsMain({
  params,
  children
}: {
    params: { blogId: string };
    children: any;
    }) {

        const token = process.env.TOKEN;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // next: {
      //   revalidate: 120,
      // },
    };
    const blogUrl = process.env.BLOGIDURL;
  const response = await fetch(`${blogUrl}/${params.blogId}`, requestOptions);
    const blog = await response.json();
    const translator = new Translator({ from: 'en', to: 'ar', forceBatch: false});
    
  const translatedBlogContent = await translator.translate(blog.blogContent);
  const translatedBlogTitle = await translator.translate(blog.blogTitle);
  const translatedBlogAuthor = await translator.translate(blog.author.authorName);

  const translatedValues = {
    translatedBlogContent,
    translatedBlogTitle,
    translatedBlogAuthor,
  };

  
    

  return (
    
    <DetailsComponent params={params} blogs={blog} children={children} translatedValues={translatedValues}/>



  );
  

  
}
