"use client"
import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import contactData from "../contactData";
import style from "./ContactForm.module.scss";
import getContactData from "../contactData";

const ContactForm = () => {
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
  const contactData = getContactData();
  return (
    <div className={`${style.contactFormSection} sectionStyle`}>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 gy-5 gy-md-0 gx-5">
          <Col className="contactDetails">
            <motion.h2
              initial={{ y: 1, opacity: 1 }}
              whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
              // viewport={{ once: true }}
              className="sectionTitle firstTitle"
            >
              {contactData?.contactForm?.title1}
            </motion.h2>
            <motion.h2
              initial={{ y: 1, opacity: 1}}
              whileHover={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              // viewport={{ once: true }}
              className="sectionTitle"
            >
              {contactData?.contactForm?.title2}
            </motion.h2>
            <motion.p
              initial={{ y: 0, opacity: 1 }}
              whileHover={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.15 },
              }}
              // viewport={{ once: true }}
            >
              {contactData?.contactForm?.details1}
              <br />
              <br />
              {contactData?.contactForm?.details2}
              <br />
              <br />
              {contactData?.contactForm?.details3}
            </motion.p>
          </Col>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
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
                  <label>Full Name</label>
                  <input
                    className={errors.fullName && "inputErrorStyle"}
                    {...register("fullName", { required: true })}
                    type="text"
                    placeholder="Full name"
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
                  <label>Email</label>
                  <input
                    className={errors.email && "inputErrorStyle"}
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
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
                  <label>Phone</label>
                  <input
                    className={errors.phone && "inputErrorStyle"}
                    {...register("phone", { required: true, minLength: 10 })}
                    type="number"
                    placeholder="Phone"
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
                  <label>Subject</label>
                  <input
                    className={errors.subject && "inputErrorStyle"}
                    {...register("subject", { required: true })}
                    type="text"
                    placeholder="Subject"
                  />
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
                <label>Message</label>
                <textarea
                  rows={3}
                  className={errors.message && "inputErrorStyle"}
                  {...register("message", { required: true })}
                  placeholder="Message"
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
                Submit
              </motion.button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
