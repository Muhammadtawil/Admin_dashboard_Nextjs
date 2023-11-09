"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaRegUserCircle, FaTwitter,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";



function getRandomQuote(blogContent: string) {
  const t=useTranslations('WebBlog')
  const sentences = blogContent.split(". ");
  if (sentences.length < 2) {
      return "Not enough content for a quote.";
  }

  const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
  const quote = `${sentences[randomIndex]}. ${sentences[randomIndex + 1]}`;
  return quote.toString();
}

const PostContent = ({
  params,
  blog,
 translatedValues,

}: {
  params: { blogId: string};
      blog: any;
      translatedValues:any
  }) => {
  const t = useTranslations('WebBlog')
  const blogId = params.blogId;
  const path = usePathname()
  const arabic = path.includes('ar')
  const { translatedBlogContent, translatedBlogTitle, translatedBlogAuthor } = translatedValues;
  // const blogTitle = params.blogTitle;
    const [isCopied, setIsCopied] = useState(false);
  // const blogsData = arabic ? translatedBlog : blog;
  const blogContent = arabic ? translatedBlogContent.text.toString(): blog.blogContent;
 

    if (!blog || !blog.blogContent) {
        return (
            <div>
                <p>Blog content is not available.</p>
                {/* You can add further error handling or redirects here */}
            </div>
        );
    }

    const blogContentArray = blogContent.split(". ");
    const firstPart = blogContentArray
        .slice(0, Math.floor(blogContentArray.length / 2))
        .join(". ");
    const secondPart = blogContentArray
        .slice(Math.floor(blogContentArray.length / 2))
        .join(". ");

  const randomQuote = getRandomQuote(secondPart);
  function getSpecificQuote(blogContent: string, index: number): string {
    const sentences = secondPart.split(". ");
    if (sentences.length < 2 || index >= sentences.length - 1) {
      return "Not enough content for the specified quote.";
    }
  
    const quote = `${sentences[index]}. ${sentences[index + 1]}`;
    return quote.toString();
  }const specificQuoteIndex = 2; // Change this to the index you want
  const specificQuote = getSpecificQuote(secondPart, specificQuoteIndex)
  
  return (

   
 

    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image width={1000} height={800} src={blog.blogImageUrl} alt="post image" />
        <div className="comment">
          {blog.author.authorName && (
            <span>
            <FaRegUserCircle fontSize={25} /> {arabic ? translatedBlogAuthor.text.toString() : blog.author.authorName}
          </span>
          )}
          {blog?.createdAt && blog?.createdAt && (
            <span> / </span>
          )}
          {blog?.createdAt && (
            <span>
              <FaCalendarAlt fontSize={25} />      {new Date(blog.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })} 
            </span>
          )}
        </div>
        <div className="content">
          <h2>{arabic?translatedBlogTitle.text.toString():blog.blogTitle}</h2>
          <p>{firstPart}</p>
          <blockquote className="flaticon-quote quote">
          <p>{specificQuote ? specificQuote.toString() : null}</p>
                                    </blockquote>

                                    <p>{secondPart}</p>
          
                  </div>
                  <div className="article-share" style={{ display: "flex", alignItems: "center" }}>
    <h4 style={{ marginRight: "10px" }}>{t('share')}:</h4>
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }} className="team-icon">
            {typeof window !== 'undefined' && (
              <>
            <li style={{ marginRight: "10px" }} className="facebook">
                <CopyToClipboard text={window.location.href} onCopy={() => setIsCopied(true)}>
                    <Link href="https://www.facebook.com" style={{ textDecoration: "none" }}>
                        <FaFacebook />
                    </Link>
                </CopyToClipboard>
                </li>
              </>
                
        )}
            {typeof window !== 'undefined' && (
              <>
                <li style={{ marginRight: "10px" }} className="twitter">
                <Link href={`https://twitter.com/share?url=http://localhost:3000/ar/blogs/${blogId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <FaXTwitter />
                </Link>
            </li>
              </>
          
        )}
            {typeof window !== 'undefined' && (
              <>
            <li>
                <Link href={`mailto:?body=${window.location.href}`} style={{ textDecoration: "none" }}>
                    <FaEnvelope />
                </Link>
                </li>
              </>
                
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