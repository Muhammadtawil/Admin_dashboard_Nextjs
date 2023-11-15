"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import style from "./Project.module.scss";
import { Stack } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { convertRawToEditorState } from "../Shared/convert";



const BlogWebList = ({ blogsData }: { blogsData: any }) => {
  const router = useRouter()
  const t = useTranslations('WebBlog')
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale=arabic?"ar":"en"
  const arabicBlogData = blogsData.filter((blog: any) => blog.blogLang === 'arabic')
  const englishBlogDta = blogsData.filter((blog: any) => blog.blogLang === 'english')

  const blogslistData = arabic ? arabicBlogData : englishBlogDta;

  return (
    <div className={`${style.projectStyle} sectionStyle`}>
        <div className="container">
      <div className={arabic ? "main" : "mainsEn"}>
      <span className={arabic ? "main" : "mainsEn"}>{t('firstTitle')}</span>
      <h2 className={arabic ? "mains" : "mainsEng"}>  {t('description')}</h2>
        </div>
        </div>
      <div className="section-title">
     
      </div>
      <Container>
        <div className="blogTitle">
        <Stack spacing={3} direction={"row"} alignItems="center" justifyContent="space-between">
          <h2 className="blogTitle">{t('lastBlogs') }</h2>
          <Link href={`/${locale}/blogs`}>
            <h5 className="view-all"><span>{t('viewAll') }</span></h5>
          </Link>
</Stack>
  </div>


        <Row className="g-3">
          {/* Project Cards start */}
          {blogslistData?.slice(0, 6)?.map((data: any, index: any) => (
            <Col
              key={index}
              md={index === 2 ? 5 : index === 3 ? 7 : index % 2 === 0 ? 7 : 5}
            >
              <motion.div
                initial={{ opacity: 1 }}
                whileFocus={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.3, delay: index * 0.2 },
                }}
                // viewport={{ once: true }}
                className="projectCard"
              >


                <div className="d-flex align-items-center">
                  <div>
                    <h5>
                      {new Date(data.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
                        day: "numeric",
                        month: "long",
                        year: "2-digit",
                   
                      })}
                    </h5>

                    <h3>{data?.blogTitle}</h3>


                    <Button
                      onClick={() => router.push(`/${locale}/blogs/${data.blogId}`)}
                      variant="none"
                    >
                      {t('readMore')} <MdOutlineArrowForwardIos />
                    </Button>
                  </div>


                  <Image
                    fill src={data.blogImageUrl?data.blogImageUrl:"/mainLogo.png"}
                    alt="Project image"
                    onClick={() => router.replace(`/${locale}/blogs/${data.blogId}`)}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/blogs/blog7.png'; 
                    }}
                  />


                </div>

              </motion.div>
            </Col>
          ))}
          {/* Project Cards end */}
        </Row>
      </Container>
    </div>
  );
};

export default BlogWebList;
