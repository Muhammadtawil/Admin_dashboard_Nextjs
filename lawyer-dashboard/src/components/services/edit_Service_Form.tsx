"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";

const serviceStatusValues = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatusValues = ["Yes", "No"];
export default function EditTaskForm({
  onUpdate,
  handleClose,
  selectedService,
}: {
  onUpdate: any;
  handleClose: any;
  selectedService: any;
}) {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    serviceName: selectedService?.serviceTitle,
    serviceDescription: selectedService?.serviceDescription || "",
    serviceStatus: selectedService?.serviceStatus || "",
    isFlag: selectedService?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      serviceName: selectedService?.serviceTitle,
      serviceDescription: selectedService?.serviceDescription || "",
      serviceStatus: selectedService?.serviceStatus || "",
      isFlag: selectedService?.isFlag || "",
    });
  }, [selectedService]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
            await onUpdate(formData, selectedService.serviceId);
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
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Name"} />

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  name="serviceName"
                  required={true}
                  fullWidth
                  id="serviceName"
                  type="text"
                  label="Name"
                  autoFocus
                  value={formData.serviceName}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Service"} />

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  multiline
                  name="serviceDescription"
                  required={true}
                  fullWidth
                  id="serviceDescription"
                  type="text"
                  label="Description"
                  autoFocus
                  value={formData.serviceDescription}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Status"} />

                <select
                  className="form-select bg-light border-0"
                  name="serviceStatus"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Select A Status</option>
                  {serviceStatusValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    serviceStatusValues.map((service: any, index: any) => (
                      <option key={index} value={serviceStatusValues[index]}>
                        {serviceStatusValues[index]}
                      </option>
                    ))
                  )}
                </select>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Draft"} />

                <select
                  className="form-select bg-light border-0"
                  name="isFlag"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Select A Status</option>
                  {flagStatusValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    flagStatusValues.map((service: any, index: any) => (
                      <option key={index} value={flagStatusValues[index]}>
                        {flagStatusValues[index]}
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
