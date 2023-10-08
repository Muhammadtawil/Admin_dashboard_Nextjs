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
  // const ref = useRef<HTMLFormElement>(null);
  // const router = useRouter();
  const formattedTaskDeadline = selectedClient?.taskDeadline
    ? new Date(selectedClient.taskDeadline).toISOString().split("T")[0]
    : "";
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

  const CustomTextField = ({ name, label, type = "text", value }: any) => (
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
      <TextField
        autoComplete={name}
        name={name}
        required={true}
        fullWidth
        id={name}
        type={type}
        label={label}
        autoFocus
        InputProps={{
          style: { borderRadius: 8 },
        }}
        className="for-dark-input"
        value={value} // Bind the value to formData using the field name
        onChange={handleInputChange} // Bind the onChange event to handleInputChange
      />
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
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Service
                </Typography>

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
