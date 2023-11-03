"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image';
import { Stack } from "@mui/material";
import React from 'react';
import { usePathname } from "next/navigation";

const MainTest = () => {
  const t = useTranslations('webMainPage');
  const path = usePathname();
const ar=path.startsWith('/ar')

  return (
    <section id="main" className="about-area pt-100 pb-70 ">
      <div className="container">
        <div className="row align-items-center ">
          {/* Text Content (Left) */}
          <div className="col-lg-6 " lang="ar">
            <div className="about-content" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
              <h2 className={ar ? "welcomeTextAr" : "welcomeText servicesHead"}>{t('welcomeMessage')}</h2>
              <p>{t('welcomeMessageTwo')}</p>
              <Link href="/contact-2" className="default-btn">
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="col-lg-6">
            <div className="about-img" data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
              <Image
                src="/contact2.png"
                width={600}
                height={600}
                alt="About Us"
                className="image-with-border" // Apply the CSS class here
              />
            </div>
          </div>
        </div>
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          {/* <img src="/images/home-one/shape/animate2.png" alt="Image" /> */}
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>
      </div>

    </section>
  );
};

export default MainTest;
