
// import BlogsDetails from "@/components/Website/blogs/blogDetails/blogDetails";
// import { getBlogs } from "@/server/web/services/blogs/blogs";
// import React from "react";

// export default async function BlogsDetailsMain({
//   params,
// }: {
//   params: { blogId: string };
//     }) {

//         const token = process.env.TOKEN;
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       next: {
//         revalidate: 120,
//       },
//     };
//     const blogUrl = process.env.BLOGIDURL;
//   const response = await fetch(`${blogUrl}/${params.blogId}`, requestOptions);
//     const blog = await response.json();
  
//   return (
//     <>
//       <BlogsDetails params={params} blog={blog}  />
//     </>


//   );
  

  
// }
