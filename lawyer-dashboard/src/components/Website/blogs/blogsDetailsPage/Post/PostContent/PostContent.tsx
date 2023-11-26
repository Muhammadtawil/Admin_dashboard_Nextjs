"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaRegUserCircle,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import DOMPurify from "dompurify";
import { FaWhatsapp } from "react-icons/fa";



function getRandomQuote(blogContent: string) {
  const t=useTranslations('WebBlog')
  const sentences =blogContent ? blogContent.split(". ") : [];
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


}: {
  params: { blogId: string};
      blog: any;
   
  }) => {
  const t = useTranslations('WebBlog')
  const blogId = params.blogId;
  const path = usePathname()
  const arabic = path.includes('ar')
  const currentUrl = `${window.location.origin}${path}`;
  // const blogTitle = params.blogTitle;
    const [isCopied, setIsCopied] = useState(false);
  // const blogsData = arabic ? translatedBlog : blog;
function createMarkup(html:any) {
  return {
    __html: DOMPurify.sanitize(html)
  }
}


    if (!blog || !blog.blogContent) {
        return (
            <div>
                <p>Blog content is not available.</p>
             
            </div>
        );
    }

    const blogContentArray =blog.blogContent.split(". ") ;

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
  function setTextColorToWhite(html: string): string {
    // Implement logic to set the text color to white in the HTML content
    // Example: Replace color: black; with color: white;
    return html.replaceAll(/color:\s*black;/gi, 'color: white;');
  }
 const blackColorContent = setTextColorToWhite(blog.blogContent)
  return (

   
 

    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image width={1000} height={800} src={blog.blogImageUrl} alt="post image" />
        <div className="comment">
          {blog.author.authorName && (
            <span>
            <FaRegUserCircle fontSize={25} /> { blog.author.authorName}
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
        <div className="content" >
          <h2>{blog.blogTitle}</h2>
          <div
    className="content"
    dangerouslySetInnerHTML={createMarkup(blackColorContent)}>
  </div>
          {/* <p>{firstPart}</p>
          <blockquote className="flaticon-quote quote">
          <p>{specificQuote ? specificQuote.toString() : null}</p>
                                    </blockquote>

                                    <p>{secondPart}</p> */}
          
                  </div>
                  <div className="article-share" style={{ display: "flex", alignItems: "center" }}>
    <h4 style={{ marginRight: "10px" }}>{t('share')}:</h4>
    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }} className="team-icon">
            {typeof window !== 'undefined' && (
              <>
            <li style={{ marginRight: "10px" }} className="facebook">
                <CopyToClipboard text={window.location.href} onCopy={() => setIsCopied(true)}>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}style={{ textDecoration: "none" }}>
                        <FaFacebook />
                    </Link>
                </CopyToClipboard>
                </li>
              </>
                
        )}
            {typeof window !== 'undefined' && (
              <>
                <li style={{ marginRight: "10px" }} className="twitter">
                <Link href={`https://twitter.com/share?url=https://www.ghazal-lawfirm.com${path}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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
                          {typeof window !== 'undefined' && (
        <>
            <li style={{ marginRight: "10px" }} className="whatsapp">
                <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <FaWhatsapp />
                </Link>
            </li>
        </>
    )}
    </ul>
    {/* {isCopied && <div style={{ marginLeft: "10px" }}>URL copied to clipboard!</div>} */}
</div>

                </div>
   
                
                </div>
    
         
        
    

      
  );
};

export default PostContent;

     {/* <div className="col-lg-4">
       
       <SideBarSection currentBlogId={blogId} />
    
   </div> */}