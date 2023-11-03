import React from "react";
import Link from "next/link";
import { getServices } from "@/server/web/services/services/services";
import { Stack } from "@mui/material";
import { Open_Sans } from 'next/font/google'
import {GiClawHammer} from "react-icons/gi"
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


const Services = async () => {
  const services = await getServices();

  
  return (
    <section id="services" className="about-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2 className="servicesHead"> Our Professional Services For You</h2>
          <p className="servicesHead">
            We are dedicated to providing top-notch legal services to our
            clients. With our team of experienced lawyers, we offer a wide range
            of specialized services to meet your legal needs.
          </p>
        </div>

        <div className="row justify-content-center">
          {services &&
            services.map((service:any, index:any) => (
              <div
                className="col-lg-4 col-sm-6"
                key={service.serviceId}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={service.aosDelay}
              >
                <div className="single-offer custom-card">
                  <Stack direction="row" spacing={2}>
                  <div className="flaticon-tick">
   {/* Replace the div with the GiClawHammer icon */}
    </div>
                    <h3>{service.serviceTitle}</h3>
                  </Stack>
                  <p>{service.serviceDescription}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="offer-shape">
        <img src="/images/shape/services-shape/1.png" alt="Image" />
        <img src="/images/shape/services-shape/2.png" alt="Image" />
        <img src="/images/shape/services-shape/3.png" alt="Image" />
        <img src="/images/shape/services-shape/4.png" alt="Image" />
        <img src="/images/shape/services-shape/5.png" alt="Image" />
        <img src="/images/shape/services-shape/6.png" alt="Image" />
      </div>
    </section>
  );
};

export default Services;
