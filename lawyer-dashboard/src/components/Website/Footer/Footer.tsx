"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Ellipse from "../../../../public/images/common/judge.svg";

import style from "./Footer.module.scss";
import { successAlert } from "@/components/dashboard/alerts/alerts";
import { useTranslations } from "next-intl";
import createFooterData from "./footerData";

const FooterSection = ({Subscribe}:{Subscribe:any}) => {
const t=useTranslations('webSubscriber')
const footerData = createFooterData();
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
              <form
  action={async (formData) => {
    try {
      await Subscribe(formData);
      // If the subscription is successful, reset the form
      reset();
      successAlert(t('alert'));
      document.querySelector('form')?.reset();
    } catch (error) {
      console.error(error);
    }
  }}
>
                <label>{t('title')}</label>
                <br />
                <input
                  className={errors.email && "inputErrorStyle"}
                  {...register("email", { required: true })}
                  type="email"
                    placeholder={t('email')}
                    name="subscriberEmail"
                />
                <button type="submit">{t('subscribe')}</button>
              </form>
            </Col>
              <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: "100%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830913564!2d-74.11976373946231!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1648396699742!5m2!1sen!2sbd"
            width="100%"
            height="250"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
            
            </Col>
            <Col md={4} lg={3} className="information">
              {/* Contact start */}
              {footerData?.contacts?.map((data, index) => (
                <div key={index}>
                  {data?.icon}
                  <p className="footer-info">{data?.message}</p>
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
          <p className="footer-info mt-3 mb-0">{footerData?.copyRightMsg}</p>
        </Container>
      </div>
      </div>
    </>
      
  );
};

export default FooterSection;
