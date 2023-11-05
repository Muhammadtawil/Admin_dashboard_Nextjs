// import React from "react";
// import Link from "next/link";
// import { getBlogs } from "@/server/web/services/blogs/blogs";


// const BlogsSidebar = async ({ currentBlogId }: { currentBlogId: string }) => {
//   const blogs = await getBlogs(); // Fetch blogs data
//   // Filter out the current blog
//   const filteredBlogs = blogs.filter(
//     (blog: any) => blog.blogId !== currentBlogId
//   );

//   return (
//     <>
//       <div className="widget-area" id="secondary">
//         <div className="widget widget_search">
//           <h3 className="widget-title">Search Now</h3>

//           <div className="post-wrap">
//             <form className="search-form">
//               <label>
//                 <input
//                   type="search"
//                   className="search-field"
//                   placeholder="Search..."
//                 />
//               </label>

//               <button type="submit">
//                 <i className="bx bx-search"></i>
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="widget widget-posts-thumb">
//           <h3 className="widget-title">Popular Blogs</h3>

//           <div className="post-wrap">
//             {filteredBlogs.map((blog: any) => (
//               <article className="item">
//                 <Link href={`/ar/blogs/${blog.blogId}`} className="thumb">
//                   <span className="fullimage cover bg1" role="img">
//                     {" "}
//                     <img src={blog.blogImageUrl} alt="Image" />
//                   </span>
//                 </Link>

//                 <div className="info">
//                   <time>
//                     {" "}
//                     {new Date(blog.createdAt).toLocaleDateString("en-US", {
//                       day: "numeric",
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </time>
//                   <h4 className="title usmall" >
//                     <Link href={`/ar/blogs/${blog.blogId}`}>{blog.blogTitle}</Link>
//                   </h4>
//                 </div>

//                 <div className="clear"></div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogsSidebar;


{/* <div className="popularPost">
<h4>Popular Post</h4>
{blogsData?.slice(1, 4).map((data:any, index:any) => (
    //  <Link href={`/ar/blogs/${data.blogId}`}>
  <div className="postCard" key={index} onClick={()=>router.push(`ar/blogs/${data.blogId}`)}>
 
    <div>
      <Image
        layout="responsive"
        width={200}
        height={200}
        src={data?.blogImageUrl}
        alt="blog image"
      />
      </div>
    <div>
      <h5>{data.blogTitle.slice(0, 20)}...</h5>
      <span>{data.createdAt}</span>
    </div>
  </div>
  // </Link>
    
))}
</div> */}