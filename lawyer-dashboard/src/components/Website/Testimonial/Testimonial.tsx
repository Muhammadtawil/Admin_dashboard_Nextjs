"use client"
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import style from "./Testimonial.module.scss";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import getTestimonialsData from "./testimonialData";

const Testimonial = () => {
  // State for control active slide style
  const [active, setActive] = useState(1);
  const testimonialData = getTestimonialsData();
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(max-width:991px)": {
        slides: {
          origin: 0,
          perView: 1.6,
          spacing: 25,
        },
      },
      "(max-width:767px)": {
        slides: {
          origin: 0,
          perView: 1.3,
          spacing: 10,
        },
      },
      "(max-width:450px)": {
        slides: {
          origin: 0,
          perView: 1,
          spacing: 0,
        },
      },
    },
    slides: {
      origin: 0,
      perView: 2.4,
      spacing: 25,
    },
    detailsChanged: (s:any) => {
      setActive(s?.track?.details?.abs);
    },
  });
  const path = usePathname();
  const arabic = path.includes('ar')
  const t=useTranslations('webTestimonials')
  return (
    <div className={`${style.testimonialStyle} sectionStyle`}>
         <div className="container">
      <div className={arabic ? "main" : "mainsEn"}>
      <span className={arabic ? "main" : "mainsEn"}>{t('title')}</span>
      <h2 className={arabic ? "mains" : "mainsEng"}>  {t('description')}</h2>
        </div>
        </div>
      <Container>
     
        {/* Testimonial slider start */}
        <motion.div
          initial={{ opacity: 1, x: 10 }}
          whileHover={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
          // viewport={{ once: true }}
        >
          <div ref={sliderRef} className="keen-slider">
            {testimonialData?.testimonials?.map((data, index) => (
              <div
                key={index}
                className={`keen-slider__slide testimonialCard ${
                  active === index && "activeStyle"
                } `}
              >
                <div className="d-flex gap-2 align-items-center">
                  <div className="clientImage">
                    <Image
                      width={150}
                      height={150}
                      src={data?.image}
                      alt="client image"
                    />
                  </div>
                  <div>
                    <h5>{data?.name}</h5>
                    <span>{data?.position}</span>
                  </div>
                </div>
                <p>{data?.message}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Testimonial slider end */}
      </Container>
    </div>
  );
};

export default Testimonial;
