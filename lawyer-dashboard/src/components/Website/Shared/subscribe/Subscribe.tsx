"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import style from "./Footer.module.scss";
import { successAlert } from "@/components/dashboard/alerts/alerts";
import { useTranslations } from "next-intl";
import createFooterData from "../../Footer/footerData";

const SubscribeSide = ({Subscribe}:{Subscribe:any}) => {

const t=useTranslations('webSubscriber')
  // Sweetalert package configure in react
  const MySwal = withReactContent(Swal);
const footerData=createFooterData()
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
      title: "Thanks",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 2000,
    });
    reset();
  };

  return (
    <>
    <div className={style.subscribeStyle}>
      <div className="sectionStyle">
        <Container>
          <motion.div
            initial={{ rotate: 0, scale: 0.5 }}
            animate={{
              rotate: [0, 100, 180, 90, 200, 80, 230, 90, 200, -360],
              scale: 0.5,
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="circle1"
          >
          
          </motion.div>
          {/* <Row className="gy-4 gy-md-0 justify-content-between"> */}
            <Col md={3} lg={10} className="newsLetter">
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{
                  rotate: [0, 150, 250, 130, 280, 180, 290, 190, 300, -360],
                  scale: 0.8,
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="circle2"
              >
         
              </motion.div>
              <Image src={footerData?.logo} alt="logo" />
              <form
  action={ (formData) => {
    try {
       Subscribe(formData);
      // If the subscription is successful, reset the form
      reset();
      successAlert(t('alert'));
      document.querySelector('form')?.reset();
    } catch (error) {
      console.error(error);
    }
                }}
                
              >
                <label>

                {t('title')}

                </label>
                <br />
                <input
                  className={errors.email && "inputErrorStyle"}
                  {...register("email", { required: true })}
                  type="email"
                  placeholder={t('email')}
                  name="subscriberEmail"
                />
                <button type="submit">{t('subscribe') }</button>
              </form>
            </Col>
 
      
          {/* </Row> */}
          {/* <p className="mt-3 mb-0">{footerData?.copyRightMsg}</p> */}
        </Container>
      </div>
      </div>
    </>
      
  );
};

export default SubscribeSide;
