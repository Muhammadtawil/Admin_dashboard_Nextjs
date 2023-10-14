"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import { updateTaskAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomSelect,
  CustomTextField,
  FormFooter,
  ValuesSelect,
} from "../shared/formsComponents";

const clientStatusValues = ["COMPLETED", "PENDING", "IN_PROGRESS"];

export default function EditTaskForm({
  onUpdate,
  handleClose,
  selectedClient,
  servicesList,
}: {
  onUpdate: any;
  handleClose: any;
  selectedClient: any;
  servicesList: any;
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
            handleClose();
            await onUpdate(formData, selectedClient.clientId);
            updateTaskAlert();
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
              <CustomTextField
                name="clientName"
                label="Name"
                value={formData.clientName}
                onChange={handleInputChange}
              />
              <CustomTextField
                name="clientPhone"
                label="Client Phone"
                value={formData.clientPhone}
                onChange={handleInputChange}
              />
              <CustomTextField
                name="clientEmail"
                label="Email"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />

              <CustomSelect
                name="clientStatus"
                label="Status"
                values={clientStatusValues}
                selectedValue={formData.clientStatus}
                onChange={handleInputChange}
              />

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Services"} />
                <ValuesSelect name={"clientService"} values={servicesList} />
              </Grid>
              <FormFooter handleClose={handleClose} title={"Add Service"} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
