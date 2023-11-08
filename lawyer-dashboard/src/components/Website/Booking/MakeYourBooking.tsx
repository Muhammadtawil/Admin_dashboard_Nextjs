"use client"
import { successAlert } from "@/components/alerts/alerts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";




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

const t=useTranslations('webBooking')
const path = usePathname()
  const arabic = path.includes('ar')
  const servicesData=arabic?translatedServices:services
  return (
    <div id="booking" className="main-contact-area pb-120">
      <div className="container">
        <div className="section-title">
        <span style={{ fontSize: '24px' }}>{t('title') as string}</span>
          <h2>{t('mainTitle')}</h2>
          <p>
        {t('description')}
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form form-border custom-card image-with-border">
              <div className="col-12 text-center"> {/* Centered container */}
              <span style={{ fontSize: '24px' }}>{t('title') as string}</span>
                    </div>
                <form           action={async (formData) => {
            await onCreate(formData)
              .then(() => {
                successAlert(t('success'));
                document.querySelector('form')?.reset();
              })
              .catch((error: any) => {

                console.error(error);
              });
          }}>
                  <div className="row">
             
                    <div className="col-lg-6 col-sm-6 ">
                      <div className="form-group image-with-border">
                        <input
                          type="text"
                          name="clientName"
                          placeholder={t('name')}
                          className="form-control"
                          id="clientName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 ">
                      <div className="form-group image-with-border">
                        <input
                          type="text"
                          name="clientEmail"
                          placeholder={t('email')}
                          className="form-control"
                          id="clientEmail"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group image-with-border">
                        <input
                          type="text"
                          name="clientPhone"
                          placeholder={t('Phone')}
                          className="form-control"
                          id="clientPhone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="col-lg-6 col-sm-6">
                        <div className="col-12 image-with-border">
                       
                          <select
                            className="form-select bg-light border-0 select-dropdown"
                            name="clientService"
                            style={{ height: "55px", color: "black", width: "200px" }}
                            required
                          >
                            <option value=""       style={{ height: "55px", color: "black", width: "200px" }}>{t('service')}</option>
                            {servicesData.length === 0 ? (
                              <option value="" disabled>
                                Loading...
                              </option>
                            ) : (
                              servicesData.map(
                                (service: any, index: any) => (
                                  (chosenServiceName = service.serviceTitle),
                                  (chosenServiceId = service.serviceId),
                                  console.log(chosenServiceId),
                                  (
                                    <option
                                      key={service.serviceId}
                                      value={service.serviceTitle}
                                      style={{ height: "55px", color: "black", width: "200px" }}
                                    >
                                      {arabic?service.serviceTitle.text:service.serviceTitle}
                                    </option>
                                  )
                                )
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="default-btn btn-two">
                      {t('book')}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <Image src="/contact6.png" alt="Image" height={550} width={550} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeYourBooking;
