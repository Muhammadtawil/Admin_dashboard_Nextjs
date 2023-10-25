"use client";
import {useState } from "react";
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
import { useTranslations } from "next-intl";


const statusValues = ["COMPLETED", "NOT_COMPLETED", "IN_PROGRESS"];
const priorityValues = ["HIGH", "MEDIUM", "LOW"];

export default function AddTaskForm({ onCreate }: any) {
  const t=useTranslations('taskPage')
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <>
      <FormHead handleClickOpen={handleClickOpen} title={t('addTask')} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addTask')}  />

          <Box
            component="form"
            noValidate={false}
            action={ (formData) => {
               onCreate(formData).then(() => {
              handleClose();
                 successAlert('Task Added Successfully');
                
                
              });
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
                <CustomTextField name="taskTitle" label={t('taskTitle')}  />
                <CustomTextField
                  name="taskDeadline"
                  label={t('endDate')} 
                  type="date"
                  inputProps={{ min: new Date().toISOString().split('T')[0] }}
                />
             
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('status')} />
                  <ValuesSelect name={"taskStatus"} values={statusValues} isrequired={true} />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('priority')}/>
                  <ValuesSelect name={"taskPriority"} values={priorityValues} isrequired={true} />
                </Grid>
                <FormFooter handleClose={handleClose} title={t('addTask')}  />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </>
  );
}
