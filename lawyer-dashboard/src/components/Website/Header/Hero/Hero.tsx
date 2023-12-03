"use client"

import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import style from "./Hero.module.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Hero = () => {

  const t = useTranslations('webMainPage');
  const path = usePathname();
  const ar = path.startsWith('/ar')

  return (

    <div className={`container sectionStyle ${style.heroSection}`}>
      <Row className="heroContainer m-1 p-0">
        <Col md={6} lg={5} className="d-flex align-items-center">
          {/* Hero details start */}
          <div className="heroDetails">
            <h2 className={ar ? "welcomeTextAr" : "welcomeText servicesHead"}>{t('welcomeMessage')}</h2>
            <h5>{t('welcomeMessageTwo')}</h5>

            {/* <p>{heroData?.details}</p> */}
            <Link href="#contact">
            <Button >{t('contact')}</Button>
            </Link>
          </div>
          {/* Hero details end */}
        </Col>



{/* 
        <Col md={6} lg={4} className="d-flex align-items-center offset-lg-3">
          <Image
            src="/contact2.png"
            width={1000}
            height={1000}
            alt="About Us"
            className="image-with-border"
          />
        </Col> */}



      </Row>

    </div>


  );
};

export default Hero;
