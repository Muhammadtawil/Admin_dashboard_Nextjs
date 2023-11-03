"use client"
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations('webChooseUs')
const whyList=[t('expert'),t('group'),t('fast')]
  
  return (
    <>
      <section className="choose-ue-area pb-100">
      <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div 
                className="choose-title"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
<span style={{ fontSize: '24px' }}>{t('title') as string}</span>



                <div className="business-content">
                  <h5>{t('description') }</h5>
              </div>
           </div>
          
           <div className="row image-with-border">
                  {whyList.map((item, index) => (
                    <Stack key={index} direction="row" spacing={3} className="about-list">
                      <i className="flaticon-checked"></i>
                      {item}
                    </Stack>
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


