"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Ellipse from "../../../../public/images/common/judge.svg";
import footerData from "./footerData";
import style from "./Footer.module.scss";

const FooterMain = () => {


  // Sweetalert package configure in react
  const MySwal = withReactContent(Swal);

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Form submit function
  const onSubmit = (data:any) => {
    console.log(data);
    MySwal.fire({
      icon: "success",
      title: "Thanks",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 2000,
    });
    reset();
  };

  return (
    <>
    <div className={style.footerStyle}>
      <div className="sectionStyle">
        <Container>
          <motion.div
            initial={{ rotate: 0, scale: 0.5 }}
            animate={{
              rotate: [0, 100, 180, 90, 200, 80, 230, 90, 200, -360],
              scale: 0.5,
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="circle1"
          >
            <Image src={Ellipse} alt="ellipse" />
          </motion.div>
          <Row className="gy-4 gy-md-0 justify-content-between">
            <Col md={4} lg={3} className="newsLetter">
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{
                  rotate: [0, 150, 250, 130, 280, 180, 290, 190, 300, -360],
                  scale: 0.8,
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="circle2"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
              <Image src={footerData?.logo} alt="logo" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>{footerData?.formTitle}</label>
                <br />
                <input
                  className={errors.email && "inputErrorStyle"}
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Input your email here"
                />
                <button type="submit">Subscribe</button>
              </form>
            </Col>
 
            <Col md={4} lg={3} className="information">
              {/* Contact start */}
              {footerData?.contacts?.map((data, index) => (
                <div key={index}>
                  {data?.icon}
                  <p>{data?.message}</p>
                </div>
              ))}
              {/* Contact end */}
              {/* Socila link start */}
              <div className="d-flex gap-2 socialLink">
                {footerData?.socialLinks.map((data, index) => (
                  <div key={index}>
                    <a href={data?.link}>{data?.icon}</a>
                  </div>
                ))}
              </div>
              {/* Socila link end */}
              <motion.div
                initial={{ rotate: 0, scale: 0.5 }}
                animate={{
                  rotate: [0, -100, -180, -90, -200, -80, -230, -90, -200, 360],
                  scale: 0.5,
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="circle3"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
            </Col>
          </Row>
          <p className="mt-3 mb-0">{footerData?.copyRightMsg}</p>
        </Container>
      </div>
      </div>
    </>
      
  );
};

export default FooterMain;
