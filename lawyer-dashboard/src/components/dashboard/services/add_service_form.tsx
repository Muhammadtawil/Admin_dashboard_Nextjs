"use client";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { successAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomTextField,
  FormFooter,
  FormHead,
  HeadBox,
  ValuesSelect,
} from "../shared/formsComponents";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import { revalidatePath } from "next/cache";
import PageTitle from "../shared/PageTitle/pageTitle";
import { useTranslations } from "next-intl";

const serviceStatus = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatus = ["Yes", "No"];

export default function AddTaskForm({ onCreate }: { onCreate: any }) {
const t=useTranslations('servicesPage')
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
               <PageTitle title={t('pageTitle')} />
      <FormHead handleClickOpen={handleClickOpen} title={t('addService')} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addService')} />
          <Box
            component="form"
            noValidate={false}
            action={(formData) => {
              onCreate(formData)
                .then(() => {

                  handleClose();
                  successAlert(t('success'));
                  revalidatePath('services', 'page')
                })
                .catch((error: any) => {
                  console.error(error);
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
                <CustomTextField name="serviceName" label={t('serviceTitle')} isrequired={true} type=""/>
                
                <CustomTextField
                  name="serviceDescription"
                  label={t('serviceDescription')}
                  // multiline={true}
                  // minRows={6}
                  isrequired={true}
                  type=""
                />

                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('status')} />
                  <ValuesSelect name={"serviceStatus"} values={serviceStatus} isrequired={true} dicName='servicesPage' optionValue='status' />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('onWeb')}/>
                  <ValuesSelect name={"isFlag"} values={flagStatus} isrequired={true} dicName='servicesPage' optionValue='onWeb' />
                </Grid>

                <FormFooter handleClose={handleClose} title={t('addService')} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
