"use client";
import { useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { successAlert } from "../alerts/alerts";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import CustomTypography, {
  CustomTextField,
  FormFooter,
  FormHead,
  HeadBox,
  ValuesSelect,
} from "../shared/formsComponents";
import { revalidatePath } from "next/cache";
import { useTranslations } from "next-intl";
import PageTitle from "../shared/PageTitle/pageTitle";

const clientValues = ["COMPLETED", "PENDING", "IN_PROGRESS"];

export default function AddTaskForm({
  onCreate,
  servicesList,
}: {
  onCreate: any;
  servicesList: any[];
}) {
  const t = useTranslations('clientPage')

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Initialize your form data state
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientStatus: '',
    clientService: '',
  });

  const handleServiceChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    // Update the clientService in the form data state when the user selects a service
    setFormData((prevData) => ({
      ...prevData,
      clientService: e.target.value as string,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <PageTitle title={t('pageTitle')} />
      <FormHead handleClickOpen={handleClickOpen} title={t('addClient')} />
      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addClient')} />

          <Box
            className="client-box"
            component="form"
            noValidate={false}
            action={(formData) => {
              onCreate(formData)
                .then(() => {

                  handleClose();


                  successAlert(t('success'));
                  revalidatePath('clients', 'page')
                })
                .catch((error: any) => {

                  console.error(error);
                });
            }}
          >
            <Box
              sx={{
                // background: "#fff",
                padding: "20px 20px",
                borderRadius: "8px",
              }}
              className="client-box"
            >
              <Grid container alignItems="center" spacing={2}>
                <CustomTextField name="clientName" label={t('clientName')} isrequired={true} type=""/>
                <CustomTextField name="clientEmail" label={t('clientEmail')} isrequired={false} type=""/>
                <CustomTextField name="clientPhone" label={t('clientPhone')} isrequired={true} type=""/>
                {/* 
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('status')} />

                  <ValuesSelect name={"clientStatus"} values={clientValues} isrequired={true} />
                </Grid> */}
                <Grid item xs={12} md={12} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" className="client-input client-box">{t("status")}</InputLabel>
                    <Select
                      name="clientStatus"
                      labelId="demo-simple-select-label"
                      id="clientStatus"
                      className="client-input"
                      label={t('status')}

                    >
                      <MenuItem value={"COMPLETED"} className="client-input client-box">{t('completed')}</MenuItem>
                      <MenuItem value={"PENDING"} className="client-input client-box">{t('pending')}</MenuItem>
                      <MenuItem value={"IN_PROGRESS"}className="client-input client-box">{t('inProgress')}</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('service')} />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" className="client-input client-box">{t('service')} </InputLabel>
                    <Select
                      name="clientService"
                      labelId="demo-simple-select-label"
                      id="clientService"
                      label={t('service')}
                      className="client-input"
                      value={formData.clientService || ''}
                      onChange={(e: any) => handleServiceChange(e)}
                    >
                      <MenuItem value="">{t('service')}</MenuItem>
                      {servicesList.length === 0 ? (
                        <MenuItem value="" disabled>
                          Loading...
                        </MenuItem>
                      ) : (
                        servicesList.map((service, index) => (
                          <MenuItem key={index} value={service.serviceTitle} className="client-input client-box">
                            {service.serviceTitle}
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <FormFooter handleClose={handleClose} title={"Add Client"} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
