// "use client"
// import { motion } from "framer-motion";
// import Image from "next/image";

// import React from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { MdOutlineArrowForwardIos } from "react-icons/md";

// import style from "./Project.module.scss";
// import projectData from "./projectData";
// import { Stack } from "@mui/material";
// import Link from "next/link";

// const Project = ({blogsData}:{blogsData:any}) => {


//   return (
//     <div className={`${style.projectStyle} sectionStyle`}>
//               <div className="section-title">
//             <span>Latest Blogs</span>
//             <h2>Our Recent Blogs</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
//               ipsum fugit temporibus possimus itaque accusamus voluptatibus
//               dignissimos nobis eaque.
//             </p>
//            </div>
//       <Container>

//       <Stack spacing={3} direction={"row"} alignItems="center" justifyContent="space-between">

//           <Link href='/ar/blogs'>
//           <h5 className="view-all"><span>View all</span></h5>
//           </Link>
// </Stack>
//         <h2 className="sectionTitle">{projectData?.section?.title}</h2>
//         <Row className="g-3">
//           {/* Project Cards start */}
//           {blogsData?.map((data:any, index:any) => (
//             <Col
//               key={index}
//               md={index === 2 ? 5 : index === 3 ? 7 : index % 2 === 0 ? 7 : 5}
//             >
//               <motion.div
//                 initial={{ opacity:1}}
//                 whileFocus={{
//                   opacity: 1,
//                   x: 0,
//                   transition: { duration: 0.3, delay: index * 0.2 },
//                 }}
//                 // viewport={{ once: true }}
//                 className="projectCard"
//               >
//                 <div className="d-flex align-items-center">
//                   <div>
//                   <h5>
//                                    {new Date(data.createdAt).toLocaleDateString("en-US", {
//                                      day: "numeric",
//                                      month: "long",
//                                      year: "2-digit",
//                                      hour:"numeric"
//                                    })}
//                                  </h5>
//                     <h3>{data?.blogTitle}</h3>
//                     <Button
              
//                       variant="none"
//                     >
//                      Read more <MdOutlineArrowForwardIos />
//                     </Button>
//                   </div>
//                   <Image layout="fill" src={data.blogImageUrl} alt="Project image" />
//                 </div>
//               </motion.div>
//             </Col>
//           ))}
//           {/* Project Cards end */}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Project;
