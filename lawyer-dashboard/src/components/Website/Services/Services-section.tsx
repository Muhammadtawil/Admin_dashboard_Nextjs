"use client"

import { Stack } from '@mui/material';
import Style from './services.module.scss';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import s1 from '../../../../public/services/s1.png';
import s2 from '../../../../public/services/s2.png';
import s3 from '../../../../public/services/s3.png';
import s4 from '../../../../public/services/s4.png';
import s5 from '../../../../public/services/s5.png';
import s6 from '../../../../public/services/s6.png';
import s7 from '../../../../public/services/s7.png';
import s8 from '../../../../public/services/s8.png';
import s9 from '../../../../public/services/s9.png';
import s10 from '../../../../public/services/s10.png';
import s11 from '../../../../public/services/s11.png';

import Image from 'next/image';

const ServicesSection = ({services,translatedServices}:{services:any,translatedServices:any[]}) => {
  const path = usePathname();
  const arabic = path.includes('ar');
  const t = useTranslations('webServices')
  const servicesData = arabic ? services : translatedServices;
const imagesList=[s3,s8,s2,s11,s5,s9,s10,s1,s6,s7,s4]
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
                const imageIndex = index % imagesList.length; // Use modulo to cycle through the images
                const serviceImage = imagesList[imageIndex];
  return (
    <div
      className="col-lg-4 col-sm-5"
      key={service.serviceId}
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <div className="single-offer custom-card services-item">
        <Stack direction="row" spacing={2}>
        <div className={Style.imageWrapper}>
                      <Image src={serviceImage} height={40} width={50} alt={`Service ${index + 1}`} />
                    </div>
          {/* <div className="flaticon-tick"> </div> */}
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

