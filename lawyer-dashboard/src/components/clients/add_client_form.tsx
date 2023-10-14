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
      <FormHead handleClickOpen={handleClickOpen} title={"Add Client"} />
      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={"Add Client"} />

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
                  <ValuesSelect name={"clientStatus"} values={clientValues} />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Service"} />
                  <ValuesSelect name={"clientService"} values={servicesList} />
                </Grid>
                <FormFooter handleClose={handleClose} title={"Add Client"} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
