"use client";
import { useState } from "react";
import { Box, Typography, Button, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { successAlert } from "../alerts/alerts";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import CustomTypography, { CustomTextField } from "../shared/formsComponents";
const clientValues = ["COMPLETED", "PENDING", "IN_PROGRESS"];

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
        <CustomTypography text={"Clients"} />

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
          Add Client
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
              Add CLient
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
                <CustomTextField name="clientName" label="Client Name" />
                <CustomTextField name="clientEmail" label="Client Email" />
                <CustomTextField name="clientPhone" label="Client Phone" />

                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Status"} />

                  <select
                    className="form-select bg-light border-0"
                    name="clientStatus"
                    style={{
                      height: "55px",
                      color: "black",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                  >
                    <option value="">Select A Status</option>
                    {clientValues.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      clientValues.map((service: any, index: any) => (
                        <option key={index} value={clientValues[index]}>
                          {clientValues[index]}
                        </option>
                      ))
                    )}
                  </select>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Service"} />

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
                    Add Client
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
