"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaFacebook,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslations } from "next-intl";





const PostContent = ({
  params,
news,

}: {
  params: { newsId: string};
      news: any;
 
  }) => {
    const t=useTranslations('webNews')
  const newsId = params.newsId;

    const [isCopied, setIsCopied] = useState(false);

    // Check if the news object and its content exist
    if (!news || !news.newsContent) {
        return (
            <div>
                <p>News content is not available.</p>
                {/* You can add further error handling or redirects here */}
            </div>
        );
    }


  return (

   
 

    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image width={1000} height={800} src={news.newsImageUrl} alt="post image" />
        <div className="comment">
        
          {news?.createdAt && news?.createdAt && (
            <span> / </span>
          )}
          {news?.createdAt && (
            <span>
              <FaCalendarAlt fontSize={25} />      {new Date(news.createdAt).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                year: "numeric",
                                                    hour:"numeric"
                                                })} 
            </span>
          )}
        </div>
        <div className="content">
          <h2>{news.newsTitle}</h2>
          <p>{news.newsContent }</p>
          
                  </div>
                  <div className="article-share" style={{ display: "flex", alignItems: "center" }}>
    <h4 style={{ marginRight: "10px" }}>{t('share')}:</h4>
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
                <Link href={`https://twitter.com/share?url=http://localhost:3000/ar/news/${newsId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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
