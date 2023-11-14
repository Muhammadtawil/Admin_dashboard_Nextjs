"use client"

import { Stack } from '@mui/material';
import Style from './services.module.scss';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const ServicesSection = ({services,translatedServices}:{services:any,translatedServices:any[]}) => {
  const path = usePathname();
  const arabic = path.includes('ar');
  const t = useTranslations('webServices')
  const servicesData = arabic ? services : translatedServices;

  return (
    <section id="services" className={`${Style.servicesStyle}`}>
      <div className="container">
        
        <div className={arabic ? "main" : "mainsEn"}>
        <span className={arabic ? "main" : "mainsEn"}>{t('firstTitle')}</span>
        <h2 className={arabic ? "mains" : "mainsEng"}>{t('title')}</h2>
</div>
        <div className="section-title">
      
        
          <p  className={arabic ? "mainD" : "mainDEn"}>
          {t('description')}
          </p>
        </div>
        <div className={`${Style.servicesStyle} row justify-content-center`}>
        {servicesData.map((service: any, index: any) => {
  return (
    <div
      className="col-lg-4 col-sm-5"
      key={service.serviceId}
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <div className="single-offer custom-card services-item">
        <Stack direction="row" spacing={2}>
          <div className="flaticon-tick"> </div>
          <h3>{String(service.serviceTitle)}</h3>
        </Stack>
        <p className="text-center">{arabic ? String(service.serviceDescription) : String(service.serviceDescription)}</p>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

