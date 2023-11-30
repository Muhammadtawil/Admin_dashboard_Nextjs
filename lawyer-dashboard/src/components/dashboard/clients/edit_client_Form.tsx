"use client";
import { useEffect, useRef, useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography, {

  FormFooter,

} from "../shared/formsComponents";
import { useTranslations } from "next-intl";
import { getStatusTranslationKey } from "../shared/tables";

const clientStatusValues = ["COMPLETED", "PENDING", "IN_PROGRESS"];

export default function EditClientForm({
  onUpdate,
  handleClose,
  selectedClient,
  servicesList,
}: {
  onUpdate: any;
  handleClose: any;
  selectedClient: any;
  servicesList: any[];
  }) {
    const t=useTranslations('clientPage')
  const [formData, setFormData] = useState({
    clientName: selectedClient?.clientName,
    clientPhone: selectedClient?.clientPhone || "",
    clientEmail: selectedClient?.clientEmail || "",
    clientStatus: selectedClient?.clientStatus || "",
    clientService: selectedClient?.chosenServiceName || "",
  });

  useEffect(() => {
    setFormData({
      clientName: selectedClient?.clientName || "",
      clientPhone: selectedClient?.clientPhone || "",
      clientEmail: selectedClient?.clientEmail || "",
      clientStatus: selectedClient?.clientStatus || "",
      clientService: selectedClient?.chosenServiceName || "",
    });
  }, [selectedClient]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Box>
        <Box
          component="form"
          noValidate
          action={async (formData) => {
    
            await onUpdate(formData, selectedClient.clientId).then(() => {
              handleClose();
            updateAlert(t('update'));
              
            })   .catch((error: any) => {

              successAlert(error);
            });;
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
       
                <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t("clientName")} />

                <TextField
                className="client-input"
                autoComplete="clientName"
                name="clientName"
                required
                fullWidth
                value={formData.clientName}
                id="clientName"
                label={t("clientName")} 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8, fontWeight: 300 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid  >
                     <Grid item xs={12} md={12} lg={12} className="client-input">
              <CustomTypography   text={t("clientPhone")}  />

                <TextField
                
                autoComplete="clientPhone"
                name="clientPhone"
                required
                fullWidth
                value={formData.clientPhone}
                id="clientPhone"
                label={t("clientPhone")} 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8, fontWeight: 300 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid>
       
                           <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t("clientEmail")} />

              <TextField
                autoComplete="clientEmail"
                name="clientEmail"
                required
                fullWidth
                value={formData.clientEmail}
                id="clientEmail"
                label={t("clientEmail")}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8, fontWeight: 300 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid>
           
                     <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t("status")}</InputLabel>
                  <Select
                        className="client-input"
                  name="clientStatus"
                  labelId="demo-simple-select-label"
                  id="clientStatus"
                  value={formData.clientStatus}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"COMPLETED"}  className="client-input client-box" >{t('completed')}</MenuItem>
                    <MenuItem value={"PENDING"} className="client-input client-box" >{t('pending')}</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}  className="client-input client-box">{t('inProgress')}</MenuItem>
                    
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
            <CustomTypography text={t("service")}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t("service")}</InputLabel>
                  <Select
                        className="client-input"
                    
                  name="clientService"
                  labelId="demo-simple-select-label"
                  id="clientService"
                  value={formData.clientService}
                  label={t('service')}
                  onChange={handleInputChange}
                  >
                      {servicesList.length === 0 ? (
     <MenuItem value="">...Loading</MenuItem>
      ) : (
        servicesList.map((service: any, index: any) => (
          <MenuItem  key={index} value={servicesList[index].serviceTitle}> {servicesList[index].serviceTitle}</MenuItem>
        ))
      )}
    
                    
                </Select>
              </FormControl>
            </Grid>
     
              <FormFooter handleClose={handleClose} title={t("editClient")}/>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
