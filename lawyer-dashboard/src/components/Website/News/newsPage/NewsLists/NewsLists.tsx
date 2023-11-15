"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Row } from "react-bootstrap";
import {
  FaLongArrowAltRight,
  FaRegUserCircle
} from "react-icons/fa";
import style from "./BlogLists.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NewsLists = ({  newsData }:any) => {
  const router = useRouter();
  const t = useTranslations('WebBlog')
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale=arabic?"ar":"en"
  return (
    <div className={style.blogListStyle}>
      <Row className="row-cols-1 row-cols-md-1 row-cols-lg-2">

        {newsData?.map((news:any, index:any) => (
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileHover={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: index % 2 !== 0 ? 0.2 : 0 },
            }}
            // viewport={{ once: true }}
            key={index}
            className="col"
          >
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="blogCard"
            >
              <div className="image">
                <Image fill src={news?.newsImageUrl} alt="news image" />
              </div>
              <div className="blogContent" onClick={()=>router.push(`/${locale}/news/${news.newsId}`)}>
                <div>
           
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
                {t('readMore') } <FaLongArrowAltRight />
                </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
       
      </Row>
    </div>
  );
};

export default NewsLists;
