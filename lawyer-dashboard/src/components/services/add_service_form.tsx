"use client";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { successAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomTextField,
  FormFooter,
  FormHead,
  HeadBox,
  ValuesSelect,
} from "../shared/formsComponents";
import StyledDialogTitle from "../shared/StyledDialogTitle";

const serviceStatus = ["AVAILABLE", "NOT_AVAILABLE"];
const flagStatus = ["Yes", "No"];

export default function AddTaskForm({ onCreate }: { onCreate: any }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormHead handleClickOpen={handleClickOpen} title={"Add Service"} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={"Add Service"} />
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
                  <ValuesSelect name={"serviceStatus"} values={serviceStatus} />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Draft"} />
                  <ValuesSelect name={"isFlag"} values={flagStatus} />
                </Grid>

                <FormFooter handleClose={handleClose} title={"Add Service"} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
