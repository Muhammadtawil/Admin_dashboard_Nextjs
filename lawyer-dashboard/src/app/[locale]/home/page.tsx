import About from "@/components/Website/About/About";
import Booking from "@/components/Website/Booking/booking";
import LatestNews from "@/components/Website/News/News";
import Team from "@/components/Website/Team/Team";
import WhyChooseUs from "@/components/Website/Why Choose Us/WhyChooseUs";
import BlogsComponentHome from "@/components/Website/blogs/blogsComponent";
import Hero from "@/components/Website/Hero/Hero";
import NavBarTest from "@/components/Website/Header/Navbar/Navbar";
import style from "../../../components/Website/Header/Header.module.scss";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import Services from "@/components/Website/Services/services";






export default function HomePage() {
    return (
        <>
            <div className={style.headerStyle}>

                <NavBarTest />
                <Hero />
            </div>

            <About />
            <WhyChooseUs />
            < Services/>
            <Booking />
            <BlogsComponentHome />
            <LatestNews />
            <Team />

            <Testimonial />
            {/* <ContactInfo /> */}
        </>

    )
}
