import React from "react";

import Hero from "../Hero/Hero";
import style from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className={style.headerStyle}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
