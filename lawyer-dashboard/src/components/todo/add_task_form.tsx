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

const statusValues = ["COMPLETED", "NOT_COMPLETED", "IN_PROGRESS"];
const priorityValues = ["HIGH", "MEDIUM", "LOW"];

export default function AddTaskForm({ onCreate }: any) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormHead handleClickOpen={handleClickOpen} title={"Add Task"} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={"Add Task"} />

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
                <CustomTextField name="taskTitle" label="Task" />
                <CustomTextField
                  name="taskDeadline"
                  label="End Date"
                  type="date"
                />
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Status"} />
                  <ValuesSelect name={"taskStatus"} values={statusValues} />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={"Priority"} />
                  <ValuesSelect name={"taskPriority"} values={priorityValues} />
                </Grid>
                <FormFooter handleClose={handleClose} title={"Add Task"} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
