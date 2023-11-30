"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image';
import { Stack, Typography } from "@mui/material";
import Style from "./AboutUs.module.scss";
import { usePathname } from "next/navigation";
import { GrUserExpert } from "react-icons/gr"
import {BsSpeedometer} from "react-icons/bs"
const About = () => {
  const t = useTranslations('webAboutUs');
  const aboutList = [t('expert'), t('group'), t('fair'),t('speed')];
const path = usePathname();
  const arabic=path.includes("ar")
  return (
    <>
      <section id="about" className={`${Style.AboutUsStyle} about-area pt-100 pb-70`}>
        <div className="container">
          <div className="row align-items-center">
          <span className="titlemain">{t('title') as string}</span>
                <h2 className="title main">{t('mainTitle')}</h2>
            <div className="col-lg-5">
              <div
                className="about-img "
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <Image
                  src="/statue.png"
                  width={400}
                  height={400}
                  alt="About Us"
                  className="about-img image-with-border"
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
              
                <p className="title description">{t('description')}</p>
                <div className="row">
                  {aboutList.map((item, index) => (
                    <div key={index} className="center">
                      {/* {arabic ? (
                          <Stack key={index}direction="row" spacing={5} className="about-list">
                          {item}
                          <i className="flaticon-checked title"></i>
                        </Stack>
                      ) : ( */}
                        <Stack key={index} direction="row" spacing={3} className="about-list">
            
                        <i className="flaticon-checked title"></i>
                        {item}
                      </Stack>
                    {/* )} */}
                    </div>
                  ))}
                </div>
                <div className="contactBtn"> 
                <Link href={arabic?"/ar/home#contact":"/en/home#contact"} className="default-btn">
                  {t('contact')}
                </Link>

                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
