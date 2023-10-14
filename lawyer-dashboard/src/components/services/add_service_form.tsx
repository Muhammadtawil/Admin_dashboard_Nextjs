"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  TextField,
  MenuItem,
  Select,
  TextareaAutosize,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { successAlert } from "../alerts/alerts";
import CustomTypography, { CustomTextField } from "../shared/formsComponents";

const serviceStatus = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatus = ["Yes", "No"];
const StyledDialogTitle = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddTaskForm({
  onCreate,
  servicesList,
}: {
  onCreate: any;
  servicesList: any[];
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "10px",
          mb: "20px",
        }}
        className="for-dark-bottom-border"
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "13px",
            padding: "12px 20px",
            color: "#fff !important",
          }}
        >
          <AddIcon
            sx={{ position: "relative", top: "-1px" }}
            className="mr-5px"
          />
          Add Service
        </Button>
      </Box>
      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#EDEFF5",
              borderRadius: "8px",
              padding: "20px 20px",
            }}
            className="bg-black"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              Add Service
            </Typography>

            <IconButton
              aria-label="remove"
              size="small"
              onClick={handleClose}
              className="modal-close"
            >
              <ClearIcon />
            </IconButton>
          </Box>
          <Box
            component="form"
            noValidate={false}
            action={async (formData) => {
              handleClose();
              await onCreate(formData);
              successAlert();
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
                <CustomTextField name="serviceName" label="Service Name" />
                <CustomTextField
                  name="serviceDescription"
                  label="Description"
                  multiline
                  minRows={6}
                />

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
                    {serviceStatus.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      serviceStatus.map((service: any, index: any) => (
                        <option key={index} value={serviceStatus[index]}>
                          {serviceStatus[index]}
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
                    {flagStatus.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      flagStatus.map((service: any, index: any) => (
                        <option key={index} value={flagStatus[index]}>
                          {flagStatus[index]}
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
                    Add Service
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
