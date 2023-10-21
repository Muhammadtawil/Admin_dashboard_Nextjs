"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { successAlert, updateAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomSelect,
  CustomTextField,
  FormFooter,
  ValuesSelect,
} from "../shared/formsComponents";

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
            updateAlert('Client updated');
              
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
              <CustomTypography text={"Client Name"} />

              <TextField
                autoComplete="clientName"
                name="clientName"
                required
                fullWidth
                value={formData.clientName}
                id="clientName"
                label="Client Name"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
                     <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Client Phone"} />

              <TextField
                autoComplete="clientPhone"
                name="clientPhone"
                required
                fullWidth
                value={formData.clientPhone}
                id="clientPhone"
                label="Client Phone"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
       
                           <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Client Email"} />

              <TextField
                autoComplete="clientEmail"
                name="clientEmail"
                required
                fullWidth
                value={formData.clientEmail}
                id="clientEmail"
                label="Client Email"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>

              <CustomSelect
                name="clientStatus"
                label="Client Status"
                values={clientStatusValues}
                selectedValue={formData.clientStatus}
                onChange={handleInputChange}
                required={true}
              />

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Services"} />
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
              <FormFooter handleClose={handleClose} title={"Edit Client"} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
