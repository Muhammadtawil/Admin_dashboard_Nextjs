"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaRegUserCircle, FaTwitter,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import SideBarSection from "../../SideBar/SideBar-section";


// const SideBarSection = dynamic(() => import("../../SideBar/SideBar-section"), {
//   loading: () => <p>Loading Sidebar...</p>,
//   ssr: false,
// });



function getRandomQuote(blogContent: string) {
  const sentences = blogContent.split(". ");
  if (sentences.length < 2) {
      return "Not enough content for a quote.";
  }

  const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
  const quote = `${sentences[randomIndex]}. ${sentences[randomIndex + 1]}`;
  return quote;
}

const PostContent = ({
  params,
  blog,

}: {
  params: { blogId: string};
      blog: any;
 
  }) => {
  
  const blogId = params.blogId;
  // const blogTitle = params.blogTitle;
    const [isCopied, setIsCopied] = useState(false);

    // Check if the blog object and its content exist
    if (!blog || !blog.blogContent) {
        return (
            <div>
                <p>Blog content is not available.</p>
                {/* You can add further error handling or redirects here */}
            </div>
        );
    }

    const blogContentArray = blog.blogContent.split(". ");
    const firstPart = blogContentArray
        .slice(0, Math.floor(blogContentArray.length / 2))
        .join(". ");
    const secondPart = blogContentArray
        .slice(Math.floor(blogContentArray.length / 2))
        .join(". ");

    const randomQuote = getRandomQuote(blog.blogContent);
  return (

   
 

    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image width={1000} height={800} src={blog.blogImageUrl} alt="post image" />
        <div className="comment">
          {blog.author.authorName && (
            <span>
              <FaRegUserCircle fontSize={25} /> {blog.author.authorName}
            </span>
          )}
          {blog?.createdAt && blog?.createdAt && (
            <span> / </span>
          )}
          {blog?.createdAt && (
            <span>
              <FaCalendarAlt fontSize={25} />      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })} 
            </span>
          )}
        </div>
        <div className="content">
          <h2>{blog.blogTitle}</h2>
          <p>{firstPart}</p>
          <blockquote className="flaticon-quote quote">
                                        <p>{randomQuote}</p>
                                    </blockquote>

                                    <p>{secondPart}</p>
          
                  </div>
                  <div className="article-share" style={{ display: "flex", alignItems: "center" }}>
    <h4 style={{ marginRight: "10px" }}>Share:</h4>
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }} className="team-icon">
        {typeof window !== 'undefined' && (
            <li style={{ marginRight: "10px" }} className="facebook">
                <CopyToClipboard text={window.location.href} onCopy={() => setIsCopied(true)}>
                    <Link href="https://www.facebook.com" style={{ textDecoration: "none" }}>
                        <FaFacebook />
                    </Link>
                </CopyToClipboard>
            </li>
        )}
        {typeof window !== 'undefined' && (
            <li style={{ marginRight: "10px" }} className="twitter">
                <Link href={`https://twitter.com/share?url=http://localhost:3000/ar/blogs/${blogId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <FaXTwitter />
                </Link>
            </li>
        )}
        {typeof window !== 'undefined' && (
            <li>
                <Link href={`mailto:?body=${window.location.href}`} style={{ textDecoration: "none" }}>
                    <FaEnvelope />
                </Link>
            </li>
        )}
    </ul>
    {isCopied && <div style={{ marginLeft: "10px" }}>URL copied to clipboard!</div>}
</div>

                </div>
   
                
                </div>
    
         
        
    

      
  );
};

export default PostContent;

     {/* <div className="col-lg-4">
       
       <SideBarSection currentBlogId={blogId} />
    
   </div> */}