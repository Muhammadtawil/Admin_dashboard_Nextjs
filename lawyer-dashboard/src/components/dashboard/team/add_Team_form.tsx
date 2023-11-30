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
import { useTranslations } from "next-intl";
import PageTitle from "../shared/PageTitle/pageTitle";
import { getStatusTranslationKey } from "../shared/tables";

const flagStatus = ["Yes", "No"];

export default function AddTeamForm({ onCreate }: { onCreate: any }) {
  const t=useTranslations('teamPage')
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
      <FormHead handleClickOpen={handleClickOpen} title={t('addTeam')} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addTeam')} />

          <Box
            component="form"
            noValidate={false}
            action={async (formData) => {
              handleClose();
              await onCreate(formData);
              successAlert(t('success'));
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
                <CustomTextField name="userName" label={t('userName')} isrequired={true} type=""/>
                <CustomTextField name="password" label={t('password')} isrequired={true} type=""/>

                <CustomTextField name="userPosition" label={t('position')} isrequired={true} type=""/>
                <CustomTextField
                  name="userPhone"
                  label={t('phone')}
                  type="number"
                  isrequired={true}
            
                />
                <CustomTextField name="userEmail" label={t('email')}isrequired={true} type="" />
   
          
                <FormFooter
                  handleClose={handleClose}
                  title={t('addTeam')}
                />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
