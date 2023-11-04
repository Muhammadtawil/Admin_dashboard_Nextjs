"use client"
import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import contactData from "../contactData";
import style from "./GetInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div className={`${style.getInTouchSection} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">{contactData?.getInTouch?.title}</h2>
        <Row className="row-cols-1 row-cols-md-2 gy-3 gy-md-0">
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
              <h4>{contactData?.getInTouch?.firstAddress?.title}</h4>
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
            <motion.div
              initial={{ x: 1 }}
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
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;
