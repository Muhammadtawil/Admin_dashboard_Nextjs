"use client";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";
import CustomTypography, { CustomSelect, CustomTextField } from "../shared/formsComponents";

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
    // Initialize the form data with the selected task's values
    clientName: selectedClient?.clientName,
    clientPhone: selectedClient?.clientPhone || "",
    clientEmail: selectedClient?.clientEmail || "",
    clientStatus: selectedClient?.clientStatus || "",
    clientService: selectedClient?.choosenServiceName || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      clientName: selectedClient?.clientName || "",
      clientPhone: selectedClient?.clientPhone || "",
      clientEmail: selectedClient?.clientEmail || "",
      clientStatus: selectedClient?.clientStatus || "", // Add other form fields here...
      clientService: selectedClient?.choosenServiceName || "", // Add other form fields here...
    });
  }, [selectedClient]);

  // Handle form input changes
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
                  <option value="">Service</option>
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
              <Grid item xs={12} textAlign="end">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 1,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 20px",
                    color: "#fff !important",
                  }}
                  onClick={handleClose}
                  className="mr-15px"
                >
                  <ClearIcon
                    sx={{
                      position: "relative",
                      top: "-1px",
                    }}
                    className="mr-5px"
                  />
                  Cancel
                </Button>

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
                      top: "-1px",
                    }}
                    className="mr-5px"
                  />
                  Edit Task
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
