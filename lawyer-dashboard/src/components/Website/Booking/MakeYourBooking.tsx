"use client"
import { successAlert } from "@/components/dashboard/alerts/alerts";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import style from "../Contact/ContactForm/ContactForm.module.scss";
import createFooterData from "../Footer/footerData";
import Link from "next/link";






// Form initial state
const INITIAL_STATE = {
  clientName: "",
  clientEmail: "",
  clientPhone: "",
  clientService: "",
};

const MakeYourBooking =  ({onCreate,services,translatedServices}:{onCreate:any,services:any[],translatedServices:any[]}) => {
  let chosenServiceName = "";
  let chosenServiceId = "";
  const footerData = createFooterData();
const t=useTranslations('webBooking')
const path = usePathname()
  const arabic = path.includes('ar')
  const servicesData = arabic ? services : translatedServices
    // Sweetalert package configure in react
    const MySwal = withReactContent(Swal);
    // react hook form
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    // Form submit function
    const onSubmit = (data:any) => {
      console.log(data);
      MySwal.fire({
        icon: "success",
        title: "Successful",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 2000,
      });
      reset();
    };
  
  return (
    <div id="contact" className={`${style.contactFormSection} sectionStyle`}>
    <Container>
        <Row className="row-cols-1 row-cols-md-2 gy-5 gy-md-0 gx-5">
          
        <Col className="contactDetails">
          <motion.h2
            initial={{ y: 1, opacity: 1 }}
            whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            // viewport={{ once: true }}
            className={arabic?"sectionTitle firstTitle":"sectionTitle firstTitleEng"}
          >
            {t('mainTitle')}
          </motion.h2>
          <motion.h2
            initial={{ y: 1, opacity: 1}}
            whileHover={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            // viewport={{ once: true }}
            className={arabic?"sectionTitle firstTitle":"sectionTitle firstTitleEng"}
          >
           {t('mainTitle1')}
          </motion.h2>

   
           {/* <Image src="/contact6.png" alt="Image" height={550} width={550} /> */}
  
       <p className="description">  {t('message')}</p>
            <br />
            <br />

            
            <Row >
            <Col md={4} lg={5} className="information">
  {/* Contact start */}
  {footerData?.contacts?.map((data, index) => (
  <li key={index} className="d-flex align-items-center" style={{ width: "100%", padding: "10px" }}>
  {arabic ? (
    <div className="arabic-list">
      <span className="arabic-list" style={{ padding: "10px", fontSize: "12px" }}>{data?.message}</span>
 {data?.icon}
    </div>
  ) : (
    <>
      {data?.icon}
      <span style={{ padding: "10px", fontSize: "12px" }}>{data?.message}</span>
    </>
  )}
</li>
  ))}
  {/* Contact end */}
  {/* Social link start */}
  <div className="d-flex gap-2 socialLink arabic-list" style={{ padding: "10px" ,fontSize:"34px"}}>
    {footerData?.socialLinks.map((data, index) => (
      <div key={index}>
        <Link href={data?.link} style={{ color: data.color }}>{data?.icon}</Link>
      </div>
    ))}
  </div>
  {/* Social link end */}
</Col>


        <Col>
              <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: arabic?"80%":"90%" }}
        >
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3315.152246381675!2d35.85813907570601!3d33.80838397324984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ4JzMwLjIiTiAzNcKwNTEnMzguNiJF!5e0!3m2!1sen!2slb!4v1700319585173!5m2!1sen!2slb"
            width="100%"
            height="230"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`hideOnMobile`}
          ></iframe>
        </div>
            </Col>
              </Row>

     
      
        </Col>
        <Col>
            <form
              className="contactForm"
              action={async (formData) => {
              
            await onCreate(formData)
              .then(() => {
                successAlert(t('success'));
                document.querySelector('form')?.reset();
              })
              .catch((error: any) => {

                console.error(error);
              });
          }}>
            <div className="d-lg-flex gap-3">
              <motion.div
                initial={{ y: 1, opacity: 1 }}
                whileHover={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                // viewport={{ once: true }}
                className="inputStyle"
              >
                <label>{t('name')}</label>
                <input
                  className={errors.fullName && "inputErrorStyle"}
                  {...register("fullName", { required: true })}
                  type="text"
                    placeholder={t('name')}
                    name="clientName"
                    id="clientName"
                    required
                />
              </motion.div>
              <motion.div
                initial={{ y: 1, opacity: 1}}
                whileHover={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.05 },
                }}
                // viewport={{ once: true }}
                className="inputStyle"
              >
                <label>{t('email')}</label>
                <input
                  className={errors.email && "inputErrorStyle"}
                  {...register("email", { required: true })}
                  type="email"
                    placeholder={t('email')}
                    name="clientEmail"
                    id="clientEmail"
                />
              </motion.div>
            </div>
            <div className="d-lg-flex gap-3">
              <motion.div
                initial={{ y: 1, opacity: 1 }}
                whileHover={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.1 },
                }}
                // viewport={{ once: true }}
                className="inputStyle"
              >
                <label>{t('Phone')}</label>
                <input
                    className={errors.phone && "inputErrorStyle"}
                    {...register("phone", { required: true, minLength: 10 })}
                    type="number"
                    placeholder={t('Phone')}
                    name="clientPhone"
                    id="clientPhone"
                    required
                />
              </motion.div>
              <motion.div
                initial={{ y: 1, opacity: 1 }}
                whileHover={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.15 },
                }}
                // viewport={{ once: true }}
                className="inputStyle"
                >
                     <label>{t('service')}</label>
                          <select
                            className="form-select select-dropdown inputStyle"
                            name="clientService"
                            style={{ height: "55px", color: "black", width: "200px" }}
                            required
                          >
                            <option className="inputStyle"  value=""       style={{ height: "55px", color: "black", width: "200px" }}>{t('service')}</option>
                            {servicesData.length === 0 ? (
                              <option value="" disabled>
                                Loading...
                              </option>
                            ) : (
                              servicesData.map(
                                (service: any, index: any) => (
                                  (chosenServiceName = service.serviceTitle),
                                  (chosenServiceId = service.serviceId),
         
                                  (
                                    <option
                                      className="inputStyle"
                                      key={service.serviceId}
                                      value={service.serviceId}
                                      style={{ height: "55px", color: "black", width: "200px" }}
                                    >
                                      {arabic?service.serviceTitle:service.serviceTitle}
                                    </option>
                                  )
                                )
                              )
                            )}
                  </select>
                  </motion.div>
            </div>
            <motion.div
              initial={{ y: 1, opacity: 1 }}
              whileHover={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.2 },
              }}
              // viewport={{ once: true }}
              className="inputStyle"
            >
              <label>{t('messageTitle')}</label>
              <textarea
                rows={3}
                className={errors.message && "inputErrorStyle"}
                {...register(t('messageTitle'), { required: true })}
                  placeholder={t('message')}
                  name="clientMessage"
                  id="clientMessage"
              />
            </motion.div>
            <motion.button
              initial={{ y: 1, opacity: 1 }}
              whileTap={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.2 },
              }}
              // viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="submitBtn"
              type="submit"
            >
             {t('book')}
            </motion.button>
          </form>
        </Col>
      </Row>
    </Container>
  </div>

  );
};

export default MakeYourBooking;



    // <div id="booking" className="main-contact-area pb-120">
    //   <div className="container">
    //     <div className="section-title">
    //     <span style={{ fontSize: '24px' }}>{t('title') as string}</span>
    //       <h2>{t('mainTitle')}</h2>
    //       <p>
    //     {t('description')}
    //       </p>
    //     </div>

    //     <div className="row align-items-center">
    //       <div className="col-lg-6 col-md-12">
    //         <div className="contact-wrap contact-pages mb-0">
    //           <div className="contact-form form-border custom-card image-with-border">
    //           <div className="col-12 text-center"> {/* Centered container */}
    //           <span style={{ fontSize: '24px' }}>{t('title') as string}</span>
    //                 </div>
    //             <form           action={async (formData) => {
    //         await onCreate(formData)
    //           .then(() => {
    //             successAlert(t('success'));
    //             document.querySelector('form')?.reset();
    //           })
    //           .catch((error: any) => {

    //             console.error(error);
    //           });
    //       }}>
    //               <div className="row">
             
    //                 <div className="col-lg-6 col-sm-6 ">
    //                   <div className="form-group image-with-border">
    //                     {/* <input
    //                       type="text"
    //                       name="clientName"
    //                       placeholder={t('name')}
    //                       className="form-control"
    //                       id="clientName"
    //                       required
    //                     /> */}
                        
    //                   </div>
    //                 </div>
    //                 <div className="col-lg-6 col-sm-6 ">
    //                   <div className="form-group image-with-border">
    //                     {/* <input
    //                       type="text"
    //                       name="clientEmail"
    //                       placeholder={t('email')}
    //                       className="form-control"
    //                       id="clientEmail"
    //                     /> */}
             
    //                   </div>
    //                 </div>
    //                 <div className="col-lg-6 col-sm-6">
    //                   <div className="form-group image-with-border">
    //                     <input
    //                       type="text"
    //                       name="clientPhone"
    //                       placeholder={t('Phone')}
    //                       className="form-control"
    //                       id="clientPhone"
    //                       required
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="col-lg-6 col-sm-6">
    //                   <div className="col-lg-6 col-sm-6">
    //                     <div className="col-12 image-with-border">
                       
    //                       <select
    //                         className="form-select bg-light border-0 select-dropdown"
    //                         name="clientService"
    //                         style={{ height: "55px", color: "black", width: "200px" }}
    //                         required
    //                       >
    //                         <option value=""       style={{ height: "55px", color: "black", width: "200px" }}>{t('service')}</option>
    //                         {servicesData.length === 0 ? (
    //                           <option value="" disabled>
    //                             Loading...
    //                           </option>
    //                         ) : (
    //                           servicesData.map(
    //                             (service: any, index: any) => (
    //                               (chosenServiceName = service.serviceTitle),
    //                               (chosenServiceId = service.serviceId),
    //                               console.log(chosenServiceId),
    //                               (
    //                                 <option
    //                                   key={service.serviceId}
    //                                   value={service.serviceTitle}
    //                                   style={{ height: "55px", color: "black", width: "200px" }}
    //                                 >
    //                                   {arabic?service.serviceTitle.text:service.serviceTitle}
    //                                 </option>
    //                               )
    //                             )
    //                           )
    //                         )}
    //                       </select>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="form-group">
    //                   <button type="submit" className="default-btn btn-two">
    //                   {t('book')}
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-6 col-md-12">
    //         <div className="contact-img">
    //           <Image src="/contact6.png" alt="Image" height={550} width={550} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>