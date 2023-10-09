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
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";

const serviceStatusValues = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatusValues = ["Yes", "No"];
export default function EditTaskForm({
  onUpdate,
  handleClose,
  selectedService,
  servicesList,
}: {
  onUpdate: any;
  handleClose: any;
  selectedService: any;
  servicesList: any;
}) {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
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

  const CustomTextField = ({
    name,
    label,
    multiline = false,
    minRows = 1,
    value,
    onChange,
  }: any) => (
    <Grid item xs={12} md={12} lg={6}>
      <InputLabel htmlFor={name}>
        <Typography
          component="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            mb: "12px",
          }}
        >
          {label}
        </Typography>
      </InputLabel>
      {multiline ? (
        <Box
          width="100%" // Set the desired width here
          sx={{
            borderRadius: 8,
          }}
        >
          <TextareaAutosize
            autoComplete={name}
            name={name}
            required={true}
            minRows={minRows}
            id={name}
            value={value}
            autoFocus
            style={{ width: "100%", borderRadius: 8, padding: "8px" }}
            className="for-dark-input"
            onChange={onChange}
          />
        </Box>
      ) : (
        <TextField
          autoComplete={name}
          name={name}
          required={true}
          fullWidth
          id={name}
          type="text"
          label={label}
          autoFocus
          value={value}
          InputProps={{
            style: { borderRadius: 8 },
          }}
          className="for-dark-input"
          onChange={onChange}
        />
      )}
    </Grid>
  );

  const CustomSelect = ({
    name,
    label,
    values,
    selectedValue,
    onChange,
  }: {
    name: any;
    label: any;
    values: string[];
    selectedValue: any;
    onChange: any;
  }) => (
    <Grid item xs={12} md={12} lg={6}>
      <Typography
        component="h5"
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          mb: "12px",
        }}
      >
        {label}
      </Typography>
      <Select
        fullWidth
        value={selectedValue}
        name={name}
        onChange={onChange}
        displayEmpty
        inputProps={{
          //   name,
          //   id: name,
          style: { borderRadius: 8 },
        }}
      >
        <MenuItem value="" disabled>
          {`Select ${label}`}
        </MenuItem>
        {values.map((value: any, index: any) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );

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
              {/* <CustomTextField
                name="serviceName"
                label="Name"
                value={formData.serviceName}
                onChange={handleInputChange}
                inputRef={(input: any) => input && input.focus()}
              /> */}

              {/* <CustomTextField
                name="serviceDescription"
                label="Description"
                multiline
                minRows={6}
                value={formData.serviceDescription}
                onChange={handleInputChange}
              /> */}
              <Grid item xs={12} md={12} lg={6}>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Name
                </Typography>

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
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  service
                </Typography>

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
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Status
                </Typography>
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
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Draft
                </Typography>
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

              {/* 
              <Grid item xs={12} md={12} lg={6}>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Status
                </Typography>
                <select
                  className="form-select bg-light border-0"
                  name="taskStatus"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Select A Status</option>
                  {statusValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    statusValues.map((status: any, index: any) => (
                      <option key={index} value={statusValues[index]}>
                        {statusValues[index]}
                      </option>
                    ))
                  )}
                </select>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Priority
                </Typography>
                <select
                  className="form-select bg-light border-0"
                  name="taskPriority"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Task Priority</option>
                  {priorityValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    priorityValues.map((service: any, index: any) => (
                      <option key={index} value={priorityValues[index]}>
                        {priorityValues[index]}
                      </option>
                    ))
                  )}
                </select>
              </Grid> */}
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
