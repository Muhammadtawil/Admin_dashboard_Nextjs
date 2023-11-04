import React from "react";

import Hero from "../Hero/Hero";
import style from "./Header.module.scss";
import NavBarTest from "./Navbar/Navbar";


const Header = () => {
  return (
    <div className={style.headerStyle}>
      <NavBarTest />
      <Hero />
    </div>
  );
};

export default Header;
