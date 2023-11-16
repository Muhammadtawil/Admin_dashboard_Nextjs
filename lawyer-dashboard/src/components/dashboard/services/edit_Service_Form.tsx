"use client";
import { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { updateAlert } from "../alerts/alerts";
import CustomTypography, {
  FormFooter,
  ValuesSelect,
} from "../shared/formsComponents";
import { useTranslations } from "next-intl";

const serviceStatusValues = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatusValues = ["Yes", "No"];
export default function EditTaskForm({
  onUpdate,
  handleClose,
  selectedService,
}: {
  onUpdate: any;
  handleClose: any;
  selectedService: any;
}) {
  const [formData, setFormData] = useState({
    serviceName: selectedService?.serviceTitle,
    serviceDescription: selectedService?.serviceDescription || "",
    serviceStatus: selectedService?.serviceStatus || "",
    isFlag: selectedService?.isFlag || "",
  });

  useEffect(() => {
    setFormData({
      serviceName: selectedService?.serviceTitle,
      serviceDescription: selectedService?.serviceDescription || "",
      serviceStatus: selectedService?.serviceStatus || "",
      isFlag: selectedService?.isFlag || "",
    });
  }, [selectedService]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
const t=useTranslations('servicesPage')
  return (
    <>
      <Box>
        <Box
          component="form"
          noValidate
          action={async (formData) => {
            await onUpdate(formData, selectedService.serviceId).then(() => {
            handleClose();
            updateAlert(t('update'));
              

            });
          }}
        >
          <Box
            sx={{
              background: "#fff",
              padding: "20px 20px",
              borderRadius: "8px",
            }}
            className="client-box"
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('serviceTitle')} />

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  name="serviceName"
                  required={true}
                  fullWidth
                  id="serviceName"
                  type="text"
                  label={t('serviceTitle')}
                  autoFocus
                  value={formData.serviceName}
                  InputProps={{
                    style: { borderRadius: 8 },
                  className:"client-input"

                  }}
                  className="client-box"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('serviceDescription')} />

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  multiline
                  name="serviceDescription"
                  required={true}
                  fullWidth
                  id="serviceDescription"
                  type="text"
                  label={t('serviceDescription')}
                  autoFocus
                  value={formData.serviceDescription}
                  InputProps={{
                    style: { borderRadius: 8 },
                  className:"client-input"
                    
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('status')} />
                <ValuesSelect
                  name={"serviceStatus"}
                  values={serviceStatusValues} isrequired={true} dicName="servicesPage" optionValue={"status"}                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('onWeb')} />
                <ValuesSelect name={"isFlag"} values={flagStatusValues} isrequired={true} dicName="servicesPage" optionValue='onWeb' />
              </Grid>
              <FormFooter handleClose={handleClose} title={t('editService')} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
