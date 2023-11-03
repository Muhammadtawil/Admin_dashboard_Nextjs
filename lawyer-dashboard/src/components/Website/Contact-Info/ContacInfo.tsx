
import { getLAwFirmAbout } from "@/server/web/services/abouts/lawfirm/lawfirm";
import Link from "next/link";
import React from "react";

const ContactInfo = async () => {
  const contact = await getLAwFirmAbout();
  const contactInfo = contact.map((contact: any) => {
    return {
      lawFirm_email: contact.lawfirmEmail,
      lawfirm_Phone: contact.lawFirmPhoneNumber,
    };
  });
  return (
    <>
      <div id="contact" className="contact-info-area pt-100 pb-70 ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>
                  <Link href="/">
                    {/* {contactInfo[0].lawFirm_email} */}
                    Muhammad.Tawil@hotmail.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>
                  {/* Tel. +{contactInfo[0].lawfirm_Phone} */}
                  {/* <Link href="/">{contact.lawfirm_Phone}</Link> */}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>lebanon</h3>
                <p>lebanon zahle</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>WhatsApp Chat</h3>
                <p>live chat all the time with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
