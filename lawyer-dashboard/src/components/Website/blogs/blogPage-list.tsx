// "use client"

// import  { useState } from "react";




// import PageBanner from "../Common/PageBanner";
// import Blog from "./BlogList";


// const BlogsPageComp = ({ blogData }: { blogData: any }) => {

//     const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 10;

//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };
//     return (
//       <>
//          <PageBanner
//                 pageTitle='Blogs'
//                 homePageUrl="/"
//                 homePageText="Home"
//                 activePageText="Blogs"
//             />
//   <Blog blogData={blogData} shouldSlice={false} sliceTarget={3} />
//   <div className="blog-content-section">
//                {/* ... */}
   
//             </div>

//             <div className="pagination">
//         {Array.from({ length: Math.ceil(blogData.length / blogsPerPage) }).map(
//           (_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={currentPage === index + 1 ? "active" : ""}
//             >
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>

//       </>
            
//   );
// };

// export default BlogsPageComp;






