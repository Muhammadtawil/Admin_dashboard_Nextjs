"use client"
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import { Row } from "react-bootstrap";
import {
  FaLongArrowAltRight,
  FaRegUserCircle
} from "react-icons/fa";
import style from "./BlogLists.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogLists = ({ blogsData }:any) => {
  const router = useRouter();
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale=arabic?"ar":"en"
const t=useTranslations('WebBlog')
  return (
    <div className={style.blogListStyle}>
      <Row className="row-cols-1 row-cols-md-1 row-cols-lg-2">
        {/* Blog cards start */}
        {blogsData?.map((blog: any, index: any) => (
        
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
                <Image fill src={blog?.blogImageUrl} alt="blog image" />
              </div>
              <div className="blogContent" onClick={()=>router.push(`/${locale}/blogs/${blog.blogId}`)}>
                <div>
                  {blog?.author.authorName && (
                    <span>
                      <FaRegUserCircle fontSize={25} /> {blog?.author.authorName}
                    </span>
                  )}
                  {blog?.posted && blog?.createdAt}
                  {blog?.createdAt && (
                                   <span>
                                   {new Date(blog.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
                                     day: "numeric",
                                     month: "long",
                                     year: "2-digit",
                                   })}
                                 </span>
                  )}
                </div>
                <h4 >{blog.blogTitle}</h4>
                <Link href={`/${locale}/blogs/${blog.blogId}`} className="read-more">
                <button>
                {t('readMore') } <FaLongArrowAltRight />
                </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
        {/* Blog cards end */}
      </Row>
    </div>
  );
};

export default BlogLists;
