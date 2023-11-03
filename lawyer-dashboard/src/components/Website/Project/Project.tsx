"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import projectData from "./projectData";
import style from "./Project.module.scss";
import PageBanner from "../Common/PageBanner";

const Project = ({blogData}:{blogData:any}) => {


  return (
    <>
                   <PageBanner
                pageTitle='Blogs'
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blogs"
            />
    <div className={`${style.projectStyle} sectionStyle`}>

      <Container>
        <h2 className="sectionTitle">{projectData?.section?.title}</h2>
        <Row className="g-3">
          {/* Project Cards start */}
          {blogData?.map((data:any, index:any) => (
            <Col
              key={index}
              md={index === 2 ? 5 : index === 3 ? 7 : index % 2 === 0 ? 7 : 5}
            >
              <motion.div
                initial={{ opacity: 1, x: index % 2 === 0 ? -100 : 100 }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: index * 0.3 },
                }}
                key={index}
                className="projectCard"
              >
                <div className="d-flex align-items-center">
                  <div>
                    <h5>{data?.createdAt}</h5>
                    <h3>{data?.blogTitle}</h3>
                    <Button
           
                      variant="none"
                    >
                      View Project <MdOutlineArrowForwardIos />
                    </Button>
                  </div>
                  <Image layout="fill" src={data.blogImageUrl} alt="Project image" />
                </div>
              </motion.div>
            </Col>
          ))}
          {/* Project Cards end */}
        </Row>
      </Container>
      </div>
    </>
      
  );
};

export default Project;
