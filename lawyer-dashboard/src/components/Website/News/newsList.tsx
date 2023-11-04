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

const NewsList = ({ newsData,sliceTarget,shouldSlice}:{newsData:any,sliceTarget:number,shouldSlice:boolean}) => {
  const router = useRouter();
  let slicedBlogData = shouldSlice ? newsData.slice(0, sliceTarget) : newsData;
  return (
    <div id="news" className={`${style.blogStyle} sectionStyle `}>
            <div className="section-title">
            <span>Latest News</span>
            <h2>Our Recent News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              ipsum fugit temporibus possimus itaque accusamus voluptatibus
              dignissimos nobis eaque.
            </p>
           </div>
      <Container>

      <Stack spacing={3} direction={"row"} alignItems="center" justifyContent="space-between">
  <h2 className="sectionTitle">Recent Blogs</h2>
          <Link href='/ar/news'>
          <h5 className="view-all"><span>View all</span></h5>
          </Link>
</Stack>

        
        <Row className="row-cols-1 row-cols-md-3 gy-4 gy-md-0 ">
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
              
              <div className="image " onClick={()=>router.push(`/ar/news/${news.newsId}`)}>
                <img src={news?.newsImageUrl} alt="blog image" />
                </div>
       
     
              <div className="blogContent" onClick={()=>router.push(`/ar/news/${news.newsId}`)}>
                <div>
               
                  {news?.posted && news?.createdAt}
                  {news?.createdAt && (
                                   <span>
                                   {new Date(news.createdAt).toLocaleDateString("en-US", {
                                     day: "numeric",
                                     month: "long",
                                     year: "2-digit",
                                   })}
                                 </span>
                  )}
                </div>
                <h4 >{news.newsTitle}</h4>
                <Link href={`/ar/news/${news.newsId}`} className="read-more">
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

export default NewsList;






