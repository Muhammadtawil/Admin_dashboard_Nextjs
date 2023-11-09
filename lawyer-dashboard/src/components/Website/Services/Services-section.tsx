"use client"
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import Style from './services.module.scss';
import { Translator } from 'google-translate-api-x';
import { usePathname } from 'next/navigation';
import { getServices } from '@/server/web/services/services/services';
import { useTranslations } from 'next-intl';

const ServicesSection = ({services,translatedServices}:{services:any,translatedServices:any}) => {
  const path = usePathname();
  const arabic = path.includes('ar');
  const t = useTranslations('webServices')
  const servicesData = arabic ? translatedServices : services;

  return (
    <section id="services" className={`${Style.servicesStyle}about-area pt-100 pb-70`}>
      <div className="container">
        <div className="section-title">
          <span className="mains">{t('firstTitle')}</span>
          <h2 className="servicesHead mains">{t('title')}</h2>
          <p className="servicesHead">
          {t('description')}
          </p>
        </div>
        <div className={`${Style.servicesStyle} row justify-content-center`}>
          {servicesData.map((service: any, index: any) => (
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
                  <h3>{arabic?service.serviceTitle.text:service.serviceTitle}</h3> {/* Use serviceTitle.text */}
                </Stack>
                <p className="text-center">{arabic?service.serviceDescription.text:service.serviceDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

