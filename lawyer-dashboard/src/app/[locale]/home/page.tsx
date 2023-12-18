import About from "@/components/Website/About/About";
import Booking from "@/components/Website/Booking/booking";
import LatestNews from "@/components/Website/News/News";
import Team from "@/components/Website/Team/Team";
import WhyChooseUs from "@/components/Website/Why Choose Us/WhyChooseUs";
import BlogsComponentHome from "@/components/Website/blogs/blogsComponent";
import Hero from "@/components/Website/Header/Hero/Hero";
import NavBar from "@/components/Website/Header/Navbar/Navbar";
import style from "../../../components/Website/Header/Header.module.scss";
import Testimonial from "@/components/Website/Testimonial/Testimonial";
import Services from "@/components/Website/Services/services";
import ScrollToTop from "@/components/dashboard/shared/ScrollToTop";
import FooterMain from "@/components/Website/Footer/Footer-main";
import { Suspense } from "react";
import LoadingSpinnerWeb from "@/components/Website/loading/loading-component";







export default function HomePage() {
    return (

        <section>


    
            <div className={style.headerStyle}>

                <NavBar />
                <Hero />
            </div>

            <About />
            <WhyChooseUs />
            < Services/>
            <BlogsComponentHome />
            <LatestNews />
            <Team />
            <Testimonial />
            <Booking />
            <FooterMain />

            {/* <ContactInfo /> */}

        </section>
        // </Suspense>

    )
}
