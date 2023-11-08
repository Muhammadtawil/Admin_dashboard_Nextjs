"use client"
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Style from './services.module.scss';
import { Translator } from 'google-translate-api-x';
import { usePathname } from 'next/navigation';
import { getServices } from '@/server/web/services/services/services';

const ServicesSection = () => {
  const path = usePathname();
  const arabic = path.includes('ar');
  const [translatedServices, setTranslatedServices] = useState<any>([]);


  useEffect(() => {
    async function fetchData() {
      try {


        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            revalidate: 60,
          },
        };

        const response = await fetch("https://lawfirm.cyclic.app/services/f/all", requestOptions);

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status} - ${response.statusText}`);
        }

        const services = await response.json();

        const translator = new Translator({
          from: arabic ? 'en' : 'ar',
          to: arabic ? 'ar' : 'en',
          forceBatch: false,
        });

        const translated = await Promise.all(
          services.map(async (service: any) => {
            return {
              ...service,
              serviceTitle: await translator.translate(service.serviceTitle),
              serviceDescription: await translator.translate(service.serviceDescription),
            };
          })
        );

        setTranslatedServices(translated);
      } catch (error) {
        console.error("Error fetching or translating data:", error);
      }
    }

    fetchData();
  }, [arabic]);

  useEffect(() => {
    console.log('Translated services updated:', translatedServices);
  }, [translatedServices]);


  return (
    <section id="services" className={`${Style.servicesStyle}about-area pt-100 pb-70`}>
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2 className="servicesHead">Our Professional Services For You</h2>
          <p className="servicesHead">
            We are dedicated to providing top-notch legal services to our clients. With our team of experienced lawyers, we offer a wide range of specialized services to meet your legal needs.
          </p>
        </div>
        <div className={`${Style.servicesStyle} row justify-content-center`}>
          {translatedServices.map((service: any, index: any) => (
            <div
              className="col-lg-4 col-sm-5"
              key={service.serviceId}
              data-aos="fade-in"
              data-aos-duration="1200"
              // data-aos-delay={service.aosDelay}
            >
              <div className="single-offer custom-card services-item">
                <Stack direction="row" spacing={2}>
                  <div className="flaticon-tick"> </div>
                  <h3>{service.serviceTitle.text}</h3> {/* Use serviceTitle.text */}
                </Stack>
                <p className="text-center">{service.serviceDescription.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

