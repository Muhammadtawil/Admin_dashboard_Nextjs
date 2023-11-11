"use client"
import Head from "next/head";

import HeaderWrapper from "../blogs/blogsPage/HeaderWrapper/HeaderWrapper";
import Hero2 from "../blogs/blogsPage/Hero2/Hero2";
import ContactForm from "./ContactForm/ContactForm";
import GetInTouch from "./GetInTouch/GetInTouch";
import NavBar from "../Header/Navbar/Navbar";
import Map from "./Map/Map"
import Hero from "./Hero/Hero";
import BlogsComponentHome from "../blogs/blogsComponent";
import Booking from "../Booking/booking";


const ContactPage = ({children}:{children:any}) => {
  return (
    <div>
      <Head>
        <title>Cedex - Contact</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <HeaderWrapper>
          <NavBar />
          <Hero2>
            <Hero />
          </Hero2>
        </HeaderWrapper>
       
        {children}
        <GetInTouch />
        {/* <Map /> */}

      </main>
    </div>
  );
};

export default ContactPage;
