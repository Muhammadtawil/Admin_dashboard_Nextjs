"use client";
import { useEffect, useRef, useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomSelect,
  CustomTextField,
  FormFooter,
  ValuesSelect,
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
    clientService: selectedClient?.choosenServiceName || "",
  });

  useEffect(() => {
    setFormData({
      clientName: selectedClient?.clientName || "",
      clientPhone: selectedClient?.clientPhone || "",
      clientEmail: selectedClient?.clientEmail || "",
      clientStatus: selectedClient?.clientStatus || "",
      clientService: selectedClient?.choosenServiceName || "",
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
              background: "#fff",
              padding: "20px 20px",
              borderRadius: "8px",
            }}
            className="dark-BG-101010"
          >
            <Grid container alignItems="center" spacing={2}>
       
                <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t("clientName")} />

              <TextField
                autoComplete="clientName"
                name="clientName"
                required
                fullWidth
                value={formData.clientName}
                id="clientName"
                label={t("clientName")} 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
                     <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t("clientPhone")}  />

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
                  style: { borderRadius: 8 },
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
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
           
              {/* <CustomSelect
                name="clientStatus"
                label={t("status")}
                values= {clientStatusValues}
                selectedValue={formData.clientStatus}
                onChange={handleInputChange}
                required={true}
              /> */}
                     <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t("status")}</InputLabel>
                <Select
                  name="clientStatus"
                  labelId="demo-simple-select-label"
                  id="clientStatus"
                  value={formData.clientStatus}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"COMPLETED"}>{t('completed')}</MenuItem>
                    <MenuItem value={"PENDING"}>{t('pending')}</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}>{t('inProgress')}</MenuItem>
                    
                </Select>
              </FormControl>
            </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t("service")}/>
                {/* <ValuesSelect name={"clientService"} values={servicesList} /> */}
                <select
      className="form-select bg-light border-0"
      name='clientService'
      style={{
        height: "55px",
        color: "black",
        width: "100%",
        borderRadius: "3%",
      }}
      required={true}
    >
      <option value="">Select A Status</option>
      {servicesList.length === 0 ? (
        <option value="" disabled>
          Loading...
        </option>
      ) : (
        servicesList.map((service: any, index: any) => (
          <option key={index} value={servicesList[index].serviceTitle}>
            {servicesList[index].serviceTitle}
          </option>
        ))
      )}
    </select>
              </Grid>
              <FormFooter handleClose={handleClose} title={t("editClient")}/>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
