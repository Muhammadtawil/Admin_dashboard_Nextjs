import About from "@/components/Website/About/About";
import MakeYourBooking from "@/components/Website/Booking/MakeYourBooking";
import Booking from "@/components/Website/Booking/booking";
import ContactInfo from "@/components/Website/Contact-Info/ContacInfo";
import MainBanner from "@/components/Website/Main-Banner/MainBanner";
import LatestNews from "@/components/Website/News/News";
import Services from "@/components/Website/Services/Services";
import Team from "@/components/Website/Team/Team";
import Testimonials from "@/components/Website/Testimonials/Testimonials";
import WhyChooseUs from "@/components/Website/Why Choose Us/WhyChooseUs";
import Blog from "@/components/Website/blogs/BlogList";


import MainTest from "@/components/Website/test";
import BlogsComponentHome from "@/components/Website/blogs/blogsComponent";
import Hero from "@/components/Website/Hero/Hero";
import NavBarTest from "@/components/Website/Header/Navbar/Navbar";
import style from "../../../components/Website/Header/Header.module.scss";




export default function HomePage() {
  return (
      <>
          {/* <MainBanner /> */}
       
          {/* <MainTest /> */}
          <div className={style.headerStyle}>
          
          <NavBarTest/>
<Hero/>
          </div> 

      <About />
      <WhyChooseUs />
      <Services />
      <Booking />
      <BlogsComponentHome/>
      <LatestNews />
      <Team />
      <Testimonials />
          <ContactInfo />
      </>
          
  )
}
