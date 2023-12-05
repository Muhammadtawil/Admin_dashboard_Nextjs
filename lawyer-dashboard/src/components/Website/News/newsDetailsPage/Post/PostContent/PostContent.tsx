"use client"
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaFacebook,FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import style from "./PostContent.module.scss";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import DOMPurify from "dompurify";
import { FaWhatsapp } from "react-icons/fa";





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
    const path = usePathname()
  const arabic = path.includes('ar')
    function createMarkup(html:any) {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }
  
    if (!news || !news.newsContent) {
      return (
          <div>
              <p>News content is not available.</p>
           
          </div>
      );
  }
  return (

   
 

    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image width={1000} height={800} src={news.newsImageUrl} alt="post image" />
        <div className="comment">
        

          {news?.createdAt && (
            <span>
              <FaCalendarAlt fontSize={25} className="comment-Icon" />      {new Date(news.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
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
          <div
    className="content"
    dangerouslySetInnerHTML={createMarkup(news.newsContent)}>
  </div>
          
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
