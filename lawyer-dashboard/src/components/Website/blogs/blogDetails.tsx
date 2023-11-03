"use client"
import React, { useState } from "react";
import Link from "next/link";
import BlogsSidebar from "@/components/Website/blogs/BlogsSidebar";
import PageBanner from "@/components/Website/Common/PageBanner";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { Card, CardContent, Stack } from "@mui/material";
import footerData from "../Footer copy/footerData";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../Footer copy/Footer.module.scss"
import { Col } from "react-bootstrap";
import Image from "next/image";
import HeaderWrapper from "./blogsPage/HeaderWrapper/HeaderWrapper";
import Hero2 from "./blogsPage/Hero2/Hero2";

import Head from "next/head";
import NavBarTest from "../Header/Navbar/Navbar";

function getRandomQuote(blogContent: string) {
    const sentences = blogContent.split(". ");
    if (sentences.length < 2) {
        return "Not enough content for a quote.";
    }

    const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
    const quote = `${sentences[randomIndex]}. ${sentences[randomIndex + 1]}`;
    return quote;
}
  // Sweetalert package configure in react
  const MySwal = withReactContent(Swal);
  // react hook form



export default function BlogsDetails({
    params,
    blog,
}: {
    params: { blogId: string };
    blog: any;
    }) {
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm();
        
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
            
            <Head>
        <title>Cedex - Blogs</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
        <HeaderWrapper>
          <NavBarTest />

          <Hero2>
                        <h1 >{blog.blogTitle }</h1>


          </Hero2>
        </HeaderWrapper>
            <section className="news-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={blog.blogImageUrl} alt="Image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span>{" "}
                                                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </li>
                                            <li>
                                                <span>Posted By:</span>
                                                <Link href="/">{blog.author.authorName}</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>{blog.blogTitle}</h3>

                                    <p>{firstPart}</p>

                                    <blockquote className="flaticon-quote">
                                        <p>{randomQuote}</p>
                                    </blockquote>

                                    <p>{secondPart}</p>
                                </div>

                                if(typeof window !== 'undefined')
                                <div className="article-share" style={{ display: "flex", alignItems: "center" }}>
                                    <h4 style={{ marginRight: "10px" }}>Share:</h4>
                                    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
                                        <li style={{ marginRight: "10px" }}>
                                            <CopyToClipboard text={window.location.href} onCopy={() => setIsCopied(true)}>
                                                <a href="#" style={{ textDecoration: "none" }}>
                                                    <FaFacebook />
                                                </a>
                                            </CopyToClipboard>
                                        </li>
                                        <li style={{ marginRight: "10px" }}>
                                            <a href={`https://twitter.com/share?url=http://localhost:3000/ar/blogs/${blogId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`mailto:?body=${window.location.href}`} style={{ textDecoration: "none" }}>
                                                <FaEnvelope />
                                            </a>
                                        </li>
                                    </ul>
                                    {isCopied && <div style={{ marginLeft: "10px" }}>URL copied to clipboard!</div>}
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogsSidebar currentBlogId={blogId} />
                            <Card sx={{ minWidth: 275 ,backgroundColor:"#6154f2"}}>

                            <CardContent>
                        
                            <Col md={4} lg={3} className="newsLetter">
          
         
             
              <Image src={footerData?.logo} alt="logo" />
              <form>
                <label>{footerData?.formTitle}</label>
                <br />
                <input
                  className={errors.email && "inputErrorStyle"}
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Input your email here"
                />
                <button type="submit">Subscribe</button>
              </form>
                                    </Col>
                                    </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



// <ul className="social">
// <li>
//   <Link href="https://www.facebook.com/" target="_blank">
//     <i className="bx bxl-facebook"></i>
//   </Link>
// </li>
// <li>
//   <Link href="https://www.twitter.com/" target="_blank">
//     <i className="bx bxl-twitter"></i>
//   </Link>
// </li>
// <li>
//   <Link href="https://www.linkedin.com/" target="_blank">
//     <i className="bx bxl-linkedin"></i>
//   </Link>
// </li>
// <li>
//   <Link href="https://www.pinterest.com/" target="_blank">
//     <i className="bx bxl-pinterest-alt"></i>
//   </Link>
// </li>
// </ul>