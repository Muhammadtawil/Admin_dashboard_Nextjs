"use client"
import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import contactData from "../contactData";
import style from "./GetInTouch.module.scss";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import getContactData from "../contactData";

const GetInTouch = () => {
  const path = usePathname()
  const arabic = path.includes('ar')
  const t = useTranslations('webBooking')
  const contactData = getContactData();
  return (
    <div className={`${style.getInTouchSection} sectionStyle`}>
         <div className="container">
      <div className={arabic ? "main" : "mainsEn"}>
      <span className={arabic ? "main" : "mainsEn"}>{t('titlePage')}</span>
      <h2 className={arabic ? "mains" : "mainsEng"}> {t('offices')} </h2>
        </div>
        </div>
      <Container>
        {!arabic ? (<Row className="row-cols-1 row-cols-md-2 gy-3 gy-md-0">
        <Col>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{
                x: 0,
                transition: { duration: 0.6, type: "spring", damping: 15 },
              }}
              // viewport={{ once: true }}
              className="contactCard"
            >
              <h4>{contactData?.getInTouch?.firstAddress?.title}</h4>
              <p>
                {contactData?.getInTouch?.secondAddress?.address}
                <RiMapPinLine />
              </p>
              <p>
                {contactData?.getInTouch?.secondAddress?.email}
                <HiOutlineMail />

              </p>
              <p>
                {contactData?.getInTouch?.secondAddress?.phone}
                <RiPhoneLine />

              </p>
            </motion.div>
          </Col>
          <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: arabic?"80%":"90%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.1644629423836!2d35.5041660757094!3d33.88541797322031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUzJzA3LjUiTiAzNcKwMzAnMjQuMyJF!5e0!3m2!1sen!2slb!4v1700280573681!5m2!1sen!2slb"
            width="100%"
            height="230"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`hideOnMobile`}
          ></iframe>
        </div>
            </Col>
          <Col>
            <motion.div
              initial={{ x: -1 }}
              whileHover={{
                x: 0,
                transition: { duration: 0.6, type: "spring", damping: 15 },
              }}
              // viewport={{ once: true }}
              className="contactCard"
            >
              
              <h4>{contactData?.getInTouch?.secondAddress?.title}</h4>
              <p>
                <RiMapPinLine />
                {contactData?.getInTouch?.firstAddress?.address}
              </p>
              <p>
                <HiOutlineMail />
                {contactData?.getInTouch?.firstAddress?.email}
              </p>
              <p>
                <RiPhoneLine />
                {contactData?.getInTouch?.firstAddress?.phone}
              </p>
            </motion.div>
          </Col>
          <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: arabic?"80%":"90%" }}
        >
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3315.152246381675!2d35.85813907570601!3d33.80838397324984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ4JzMwLjIiTiAzNcKwNTEnMzguNiJF!5e0!3m2!1sen!2slb!4v1700319585173!5m2!1sen!2slb" 
            width="100%"
            height="230"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`hideOnMobile`}
          ></iframe>
        </div>
            </Col>
      
        </Row>) : (<Row className="row-cols-1 row-cols-md-2 gy-3 gy-md-0">
        <Col>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{
                x: 0,
                transition: { duration: 0.6, type: "spring", damping: 15 },
              }}
              // viewport={{ once: true }}
              className="contactCard"
            >
              <h4>{contactData?.getInTouch?.firstAddress?.title}</h4>
              <p>
                <RiMapPinLine />
                {contactData?.getInTouch?.secondAddress?.address}
              </p>
              <p>
                <HiOutlineMail />
                {contactData?.getInTouch?.secondAddress?.email}
              </p>
              <p>
                <RiPhoneLine />
                {contactData?.getInTouch?.secondAddress?.phone}
              </p>
            </motion.div>
          </Col>
          <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: arabic?"80%":"90%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.1644629423836!2d35.5041660757094!3d33.88541797322031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUzJzA3LjUiTiAzNcKwMzAnMjQuMyJF!5e0!3m2!1sen!2slb!4v1700280573681!5m2!1sen!2slb"
            width="100%"
            height="230"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`hideOnMobile`}
          ></iframe>
        </div>
            </Col>
          <Col>
            <motion.div
              initial={{ x: -1 }}
              whileHover={{
                x: 0,
                transition: { duration: 0.6, type: "spring", damping: 15 },
              }}
              // viewport={{ once: true }}
              className="contactCard"
              >
                
              <h4>{contactData?.getInTouch?.secondAddress?.title}</h4>
              <p>
                <RiMapPinLine />
                {contactData?.getInTouch?.firstAddress?.address}
              </p>
              <p>
                <HiOutlineMail />
                {contactData?.getInTouch?.firstAddress?.email}
              </p>
              <p>
                <RiPhoneLine />
                {contactData?.getInTouch?.firstAddress?.phone}
              </p>
            </motion.div>
            </Col>
            
          <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: arabic?"80%":"90%" }}
        >
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3315.152246381675!2d35.85813907570601!3d33.80838397324984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ4JzMwLjIiTiAzNcKwNTEnMzguNiJF!5e0!3m2!1sen!2slb!4v1700319585173!5m2!1sen!2slb" 
            width="100%"
            height="230"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`hideOnMobile`}
          ></iframe>
        </div>
            </Col>

      
        </Row>)}

      
      </Container>
    </div>
  );
};

export default GetInTouch;
