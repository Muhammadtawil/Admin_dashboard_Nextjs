import React from "react";

import Hero from "./Hero/Hero";
import style from "./Header.module.scss";
import NavBar from "./Navbar/Navbar";


const Header = () => {
  return (
    <div className={style.headerStyle}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
