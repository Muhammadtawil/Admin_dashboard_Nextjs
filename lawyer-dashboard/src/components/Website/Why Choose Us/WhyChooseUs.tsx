"use client"
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";
import Style from "./chooseUs.module.scss"
import { usePathname } from "next/navigation";
const WhyChooseUs = () => {
  const t = useTranslations('webChooseUs')
const whyList=[t('expert'),t('group'),t('fast')]
  const path = usePathname();
  const arabic=path.includes('ar')
  return (
    <>
      
      <section className={`${Style.ChooseUsStyle} choose-ue-area pb-100`}>
      
        
        <div className="container">
          <div className="main">
          <span className={arabic?"main":"mainsEn"}>{t('title')}</span>
        <h2 className={arabic?"main-two":"main-twoEn"}>{t('mainTitle')}</h2>
   </div>
          <div className="row align-items-center">
            
            <div className="col-lg-6">
            <div 
                className="choose-title "
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >




                <div className="business-content">
                  <p className=" description">{t('description') }</p>
              </div>
           </div>
          
           <div className="row image-with-border">
                  {whyList.map((item, index) => (
                    <div key={index}>
                    {arabic?(    <Stack key={index} direction="row" spacing={3} className="about-list arabic-list">
                        <span className="arabic-list">{item }</span>
                        <i className="flaticon-checked"></i>
                    
                    </Stack>):    <Stack key={index} direction="row" spacing={3} className="about-list">
                      <i className="flaticon-checked"></i>
                      {item}
                    </Stack>}
                    </div>
                  ))}
                </div>

             
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">4235</span>
                    </h2>
                    <p>{t('clients') }</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">6280</span>
                    </h2>
                    <p>{t('visits') }</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">6535</span>
                    </h2>
                    <p>{t('consulting') }</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default WhyChooseUs;