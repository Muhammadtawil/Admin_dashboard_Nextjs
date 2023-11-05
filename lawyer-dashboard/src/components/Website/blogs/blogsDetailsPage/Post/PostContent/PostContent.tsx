"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaRegUserCircle, FaTwitter,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Head from "next/head";
import HeaderWrapper from "../../../blogsPage/HeaderWrapper/HeaderWrapper";
import NavBarTest from "@/components/Website/Header/Navbar/Navbar";
import Hero2 from "../../../blogsPage/Hero2/Hero2";
import Hero from "../Hero/Hero";
import { Container } from "react-bootstrap";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import SideBarBlogDetails from "../../SideBar/sideBar";



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
  params: { blogId: string };
      blog: any;
 
  }) => {
  
    const blogId = params.blogId;
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
    <>
      <main>
        <HeaderWrapper>
          <NavBarTest />
          <Hero2>
            <Hero />
          </Hero2>
        </HeaderWrapper>
        <Container>
        <div className="row sectionStyle d-md-flex overflow-hidden gy-4 gy-lg-0">
            <div className="col-lg-8">
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
                                    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
                                        <li style={{ marginRight: "10px" }} className="facebook">
                                            {typeof window !== 'undefined' && (
                                                <CopyToClipboard text={window.location.href} onCopy={() => setIsCopied(true)}>
                                                    <Link href="www.facebook.com" style={{ textDecoration: "none" }}>
                                                        <FaFacebook />
                                                    </Link>
                                                </CopyToClipboard>
                                            )}

                                        </li>
                                        <li style={{ marginRight: "10px" }} className="twitter">
                                            <Link href={`https://twitter.com/share?url=http://localhost:3000/ar/blogs/${blogId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <FaXTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                        {typeof window !== 'undefined' && (
                                            <Link href={`mailto:?body=${window.location.href}`} style={{ textDecoration: "none" }}>
                                                <FaEnvelope />
                                                </Link>
                                                     )}
                                        </li>
                                    </ul>
                                    {isCopied && <div style={{ marginLeft: "10px" }}>URL copied to clipboard!</div>}
                                </div>
                </div>
   
                
              </div>
            </div>
            <div className="col-lg-4">
              <SideBarBlogDetails currentBlogId={blog.blogId} />
            </div>
      </div>
        </Container>
          
        </main>
    </>
      
  );
};

export default PostContent;
