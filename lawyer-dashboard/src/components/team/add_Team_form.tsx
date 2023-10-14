"use client";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { successAlert } from "../alerts/alerts";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import CustomTypography, {
  CustomTextField,
  FormFooter,
  FormHead,
  HeadBox,
  ValuesSelect,
} from "../shared/formsComponents";

const flagStatus = ["Yes", "No"];

export default function AddTeamForm({ onCreate }: { onCreate: any }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormHead handleClickOpen={handleClickOpen} title={"Add Team Member"} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={"Add Team"} />

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
                <CustomTextField name="userName" label="user Name" />
                <CustomTextField name="password" label="Password" />

                <CustomTextField name="userPosition" label="Position" />
                <CustomTextField
                  name="userPhone"
                  label="Phone Number"
                  type="number"
                />
                <CustomTextField name="userEmail" label="Email" />
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Active"} />
                  <ValuesSelect name={"isFlag"} values={flagStatus} />
                </Grid>
                <FormFooter
                  handleClose={handleClose}
                  title={"Add Team Member"}
                />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
