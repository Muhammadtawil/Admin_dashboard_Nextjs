"use client";
import { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
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
import PageTitle from "../shared/PageTitle/pageTitle";
import style from "./tasks.module.scss"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const statusValues = ["COMPLETED", "NOT_COMPLETED", "IN_PROGRESS"];
const priorityValues = ["HIGH", "MEDIUM", "LOW"];

export default function AddTaskForm({ onCreate }: any) {
  const t = useTranslations('taskPage')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-11-17'));

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div className={`${style.taskStyle}`}>
      <PageTitle title={t('pageTitle')} />

      <FormHead handleClickOpen={handleClickOpen} title={t('addTask')} />

      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <HeadBox handleClose={handleClose} title={t('addTask')} />

          <Box
            className="client-box"
            component="form"
            noValidate={false}
            action={(formData) => {
              formData.append('taskDeadline', value ? value.format() : '');
              onCreate(formData).then(() => {
                handleClose();
                successAlert(t('success'));


              });
            }}
          >
            <Box
              sx={{
                // background: "greem",
                padding: "20px 20px",
                borderRadius: "8px",
                // color: "white",
              }}
              className="client-box"
            >
              <Grid container alignItems="center" spacing={2}>
                <CustomTextField name="taskTitle" label={t('taskTitle')} isrequired={true} type=""/>

                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={'label'} />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
               
                      <DemoContainer components={['DateTimePicker']} >
                        <DateTimePicker label={t('endDate')} value={value}
                          onChange={(newValue) => setValue(newValue)} />
                      </DemoContainer>
                  </LocalizationProvider>
                </Grid>


                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('status')} />
                  <ValuesSelect name={"taskStatus"} values={statusValues} isrequired={true} dicName="taskPage" optionValue="status" />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <CustomTypography text={t('priority')} />
                  <ValuesSelect name={"taskPriority"} values={priorityValues} isrequired={true} dicName="taskPage" optionValue="priority" />
                </Grid>
                <FormFooter handleClose={handleClose} title={t('addTask')} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledDialogTitle>
    </div>
  );
}
