

import { Stack } from "@mui/material";
import { Open_Sans } from 'next/font/google'
import Style from "./services.module.scss"

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


const ServicesSection = async ({services}:{services:any}) => {


  
  return (
    <section id="services" className={`${Style.servicesStyle}about-area pt-100 pb-70`}>
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

        <div className={`${Style.servicesStyle} row justify-content-center`}>
          {services &&
            services.map((service: any, index: any) => (
              
              <div
                className="col-lg-4 col-sm-5 "
                key={service.serviceId}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={service.aosDelay}
              >
                <div className="single-offer custom-card services-item">
                  <Stack direction="row" spacing={2}>
                  <div className="flaticon-tick"> </div>
                    <h3>{service.serviceTitle}</h3>
                  </Stack>
                  <p className="text-center">{service.serviceDescription}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
