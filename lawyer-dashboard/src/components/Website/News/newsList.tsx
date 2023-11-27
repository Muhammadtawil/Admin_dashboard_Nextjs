"use client"
import { motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import Image from 'next/image'

import {
  FaLongArrowAltRight,
} from "react-icons/fa";

import style from "./Blog.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

const NewsList = ({ newsData,sliceTarget,shouldSlice}:{newsData:any,sliceTarget:number,shouldSlice:boolean}) => {
  const router = useRouter();
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale = arabic ? "ar" : "en";
const t=useTranslations('webNews')
  let slicedBlogData = shouldSlice ? newsData.slice(0, sliceTarget) : newsData;
  return (
    <div id="news" className={`${style.blogStyle} sectionStyle `}>
          <div className="container">
      <div className={arabic ? "main" : "mainsEn"}>
      <span className={arabic ? "main" : "mainsEn"}>{t('firstTitle')}</span>
      <h2 className={arabic ? "mains" : "mainsEng"}>  {t('description')}</h2>
        </div>
        <div className="blogTitle">
        <Stack spacing={3} direction={"row"} alignItems="center" justifyContent="space-between">
          <h2 className="blogTitle">{t('lastNews') }</h2>
          <Link href={`/${locale}/news`}>
            <h5 className="view-all"><span>{t('viewAll') }</span></h5>
          </Link>
</Stack>
  </div>
      <Container>

 

        
        <Row className="row-cols-1 row-cols-md-4 gy-4 gy-md-1 ">
          {slicedBlogData?.slice(0, sliceTarget)?.map((news:any, index:any) => (
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
              
              <div className="image " onClick={()=>router.push(`/${locale}/news/${news.newsId}`)}>
                <Image  src={news?.newsImageUrl} alt="blog image" width={350} height={100}/>
                </div>
       
     
              <div className="blogContent" onClick={()=>router.push(`/${locale}/news/${news.newsId}`)}>
                <div>
               
                  {news?.posted && news?.createdAt}
                  {news?.createdAt && (
                                   <span>
                                   {new Date(news.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
                                     day: "numeric",
                                     month: "long",
                                     year: "2-digit",
                                     hour:"numeric"
                                   })}
                                 </span>
                  )}
                </div>
                <h4 >{news.newsTitle}</h4>
                <Link href={`/${locale}/news/${news.newsId}`} className="read-more">
                <button>
                {t('readMore')} <FaLongArrowAltRight />
                </button>
                </Link>
              </div>
       
            </motion.div>
          ))}
        </Row>
        </Container>
        </div>
    </div>
  );
};

export default NewsList;






