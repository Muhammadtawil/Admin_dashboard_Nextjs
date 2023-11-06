import React from "react";
import style from "./Hero.module.scss";

const Hero = ({title}:{title:any}) => {
  return (
    <div className={style.postHero}>
      <h2>{title}</h2>
    </div>
  );
};

export default Hero;
