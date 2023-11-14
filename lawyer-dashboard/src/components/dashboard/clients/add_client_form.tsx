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
    const t=useTranslations('clientPage')
  
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
      <FormHead handleClickOpen={handleClickOpen} title={t('addClient')} />
      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addClient')} />

          <Box
            component="form"
            noValidate={false}
            action={ (formData) => {
               onCreate(formData)
                .then(() => {

            handleClose();


                  successAlert('Client Added Successfully');
                  revalidatePath('clients','page')
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
              className="dark-BG-101010"
            >
              <Grid container alignItems="center" spacing={2}>
                <CustomTextField name="clientName" label={t('clientName')} />
                <CustomTextField name="clientEmail" label={t('clientEmail')} />
                <CustomTextField name="clientPhone" label={t('clientPhone')} />
{/* 
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('status')} />

                  <ValuesSelect name={"clientStatus"} values={clientValues} isrequired={true} />
                </Grid> */}
                           <Grid item xs={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t("status")}</InputLabel>
                <Select
                  name="clientStatus"
                  labelId="demo-simple-select-label"
                  id="clientStatus"
               
                  label={t('status')}
            
                >
                  <MenuItem value={"COMPLETED"}>{t('completed')}</MenuItem>
                    <MenuItem value={"PENDING"}>{t('pending')}</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}>{t('inProgress')}</MenuItem>
                    
                </Select>
                  </FormControl>
                  </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('service')} />

                  <select
                    className="form-select bg-light border-0"
                    name="clientService"
                    style={{
                      height: "55px",
                      color: "black",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                  >
                    <option value="">{t('service')}</option>
                    {servicesList.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      servicesList.map((service: any, index: any) => (
                        <option
                          key={index}
                          value={servicesList[index].serviceTitle}
                        >
                          {servicesList[index].serviceTitle}
                        </option>
                      ))
                    )}
                  </select>
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
