"use client"
import { useTranslations } from "next-intl";
import style from "./Hero.module.scss";

const Hero = () => {
  const t=useTranslations('webBooking')
  return (
    <div className={style.contactHero}>
      {/* <h4>About My</h4> */}
      <h2>{t('title') }</h2>
    </div>
  );
};

export default Hero;
