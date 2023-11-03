"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image'
import { Stack, Typography } from "@mui/material";

// import lawfirmAbout from "./lawfirm-about.jpg"

const About =  () => {

 const t=useTranslations('webAboutUs')
const aboutList=[t('expert'),t('group'),t('contact')]
  return (
    <>
      
      <section id="about" className="about-area pt-100 pb-70">

        <Stack direction={"row"} spacing={2}>


        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img "
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
               
                <Image
                  src="/statue.png"
                  width={300}
                  height={300}
                  alt="About Us"
                  // onMouseDown={handleTitleMouseDown}
                    // onMouseUp={handleTitleMouseUp}
                    className="image-with-border"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
     <span style={{ fontSize: '24px' }}>{t('title') as string}</span>
                <h2>{t('mainTitle')}</h2>
                <p>{t('description')}</p>

                <div className="row">
                  {aboutList.map((item, index) => (
                    <Stack key={index} direction="row" spacing={3} className="about-list">
                      <i className="flaticon-checked"></i>
                      {item}
                    </Stack>
                  ))}
                </div>

                <Link href="/contact-2" className="default-btn">
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
          </div>
        </Stack>
          
      </section>
    </>
  );
};

export default About;
