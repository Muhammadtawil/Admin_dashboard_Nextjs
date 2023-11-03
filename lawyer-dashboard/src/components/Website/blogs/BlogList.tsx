"use client"
import { motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import {
  FaLongArrowAltRight,
  FaRegUserCircle
} from "react-icons/fa";

import style from "./Blog.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";

const Blog = ({blogData,sliceTarget,shouldSlice}:{blogData:any,sliceTarget:number,shouldSlice:boolean}) => {
  const router = useRouter();
  let slicedBlogData = shouldSlice ? blogData.slice(0, sliceTarget) : blogData;
  return (
    <div id="blogs" className={`${style.blogStyle} sectionStyle image-with-border `}>
            <div className="section-title">
            <span>Latest Blogs</span>
            <h2>Our Recent Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              ipsum fugit temporibus possimus itaque accusamus voluptatibus
              dignissimos nobis eaque.
            </p>
           </div>
      <Container>

      <Stack spacing={3} direction={"row"} alignItems="center" justifyContent="space-between">
  <h2 className="sectionTitle">Recent Blogs</h2>
          <Link href='/ar/blogs'>
          <h5 className="view-all"><span>View all</span></h5>
          </Link>
</Stack>

        
        <Row className="row-cols-1 row-cols-md-3 gy-4 gy-md-0 ">
          {slicedBlogData?.slice(0, sliceTarget)?.map((blog:any, index:any) => (
            <motion.div
              
              initial={{ opacity: 1, y: 30 }}
              whileHover={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: index * 0.3 },
              }}
            
              // viewport={{ once: true }}
              key={index}
              className="blogCard col"
            >
              
              <div className="image " onClick={()=>router.push(`/ar/blogs/${blog.blogId}`)}>
                <img src={blog?.blogImageUrl} alt="blog image" />
                </div>
       
     
              <div className="blogContent" onClick={()=>router.push(`/ar/blogs/${blog.blogId}`)}>
                <div>
                  {blog?.author.authorName && (
                    <span>
                      <FaRegUserCircle fontSize={25} /> {blog?.author.authorName}
                    </span>
                  )}
                  {blog?.posted && blog?.createdAt}
                  {blog?.createdAt && (
                                   <span>
                                   {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                     day: "numeric",
                                     month: "long",
                                     year: "2-digit",
                                   })}
                                 </span>
                  )}
                </div>
                <h4 >{blog.blogTitle}</h4>
                <Link href={`/ar/blogs/${blog.blogId}`} className="read-more">
                <button>
                  Read More <FaLongArrowAltRight />
                </button>
                </Link>
              </div>
       
            </motion.div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;




// import Link from "next/link";

// import { getBlogs } from "@/server/web/services/blogs/blogs";
// import truncateText from "@/server/web/services/shared/truncateText";

// const Blogs = async () => {
//   const blogs = await getBlogs(); // Fetch blogs data

//   return (
//     <>
//       <section id="blogs" className="news-area pt-100 pb-70">
//         <div className="container">
//           <div className="section-title">
//             <span>Latest Blogs</span>
//             <h2>Our Recent Blogs</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
//               ipsum fugit temporibus possimus itaque accusamus voluptatibus
//               dignissimos nobis eaque.
//             </p>
//           </div>

//           <div className="row justify-content-center">
//             {blogs.map((blog: any) => (
//               <div
//                 className="col-lg-4 col-md-6"
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 data-aos-delay="200"
//                 key={blog.blogId}
//               >
//                 <div className="single-news">
//                   <div className="blog-img">
//                     <Link href="./news-details">
//                       <img src={blog.blogImageUrl} alt="Image" />
//                     </Link>

//                     <div className="dates">
//                       <span>
//                         {new Date(blog.createdAt).toLocaleDateString("en-US", {
//                           day: "numeric",
//                           month: "long",
//                           year: "2-digit",
//                         })}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="news-content-wrap">
//                     <ul>
//                       <li>
//                         <Link href="/news-grid">
//                           <i className="flaticon-user"></i>{" "}
//                           {blog.author.authorName}
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="flaticon-conversation"></i> 2 Comments
//                       </li>
//                     </ul>

//                     <Link href={`/blogs/${blog.blogId}`}>
//                       <h3>{blog.blogTitle}</h3>
//                     </Link>

//                     <p>{truncateText(blog.blogContent, 50)}</p>

//                     <Link href={`/blogs/${blog.blogId}`} className="read-more">
//                       Read More <i className="bx bx-plus"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blogs;


