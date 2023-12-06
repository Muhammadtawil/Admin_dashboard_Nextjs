import React from 'react'
import style from "../../../components/Website/offices/Offices.module.scss";
import NavBar from '@/components/Website/Header/Navbar/Navbar';
import Hero from "@/components/Website/offices/Hero/Hero";
import GetInTouch from '@/components/Website/Contact/GetInTouch/GetInTouch';


export default function Offices() {
  return (
      <>
          <div className={style.headerStyle}>

<NavBar />
              <Hero />
          </div>
          <GetInTouch />
          
      </>
  )
}
