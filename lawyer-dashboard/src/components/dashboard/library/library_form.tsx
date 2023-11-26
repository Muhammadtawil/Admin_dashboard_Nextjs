"use client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";
import { useTranslations } from "next-intl";
import PageTitle from "../shared/PageTitle/pageTitle";


export default function MediaCreateFolder() {
 const t=useTranslations('webFilesPage')
  return (
    <>
      <PageTitle title={t('pageTitle') } />
      {/* <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          component="form"
          noValidate={false}
          action={ (formData) => {
             onCreate(formData).then(() => {
              successAlert(t('success2'))
               document.querySelector('form')?.reset();
        
            });
           
          }}
        >
          <Grid item xs={12} textAlign="end" className="client-box">
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "13px",
                padding: "12px 20px",
                color: "#fff !important",
              }}
            >
              <AddIcon
                sx={{
                  position: "relative",
                  top: "-2px",
                }}
                className="mr-5px"
              />
              {t('create')}
            </Button>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('folderName')} />
              <TextField
                autoComplete="folderName"
                name="folderName"
                required
                fullWidth
                id="folderName"
                label={t('folderName')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Card> */}
    </>
  );
}
