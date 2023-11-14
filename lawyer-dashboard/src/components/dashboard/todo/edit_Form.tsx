"use client";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { updateAlert } from "../alerts/alerts";
import CustomTypography, {
  CustomSelect,
  FormFooter,
} from "../shared/formsComponents";
import { useTranslations } from "next-intl";

const statusValues = ["COMPLETED", "NOT_COMPLETED", "IN_PROGRESS"];
const priorityValues = ["HIGH", "MEDIUM", "LOW"];

export default function EditTaskForm({
  onUpdate,
  handleClose,
  selectedTask,
  isAssigned,
}: {
  onUpdate: any;
  handleClose: any;
  selectedTask: any;
  isAssigned: boolean;
  }) {
  const t=useTranslations('taskPage')
  const formattedTaskDeadline = selectedTask?.taskDeadline
    ? new Date(selectedTask.taskDeadline).toISOString().split("T")[0]
    : "";
  const [formData, setFormData] = useState({
    taskTitle: selectedTask?.taskTitle,
    startDate: selectedTask?.startDate || "",
    taskDeadline: formattedTaskDeadline || "",
    taskStatus: selectedTask?.taskStatus || "",
    taskPriority: selectedTask?.taskPriority || "",
  });

  useEffect(() => {
    setFormData({
      taskTitle: selectedTask?.taskTitle || "",
      startDate: selectedTask?.startDate || "",
      taskDeadline: selectedTask?.taskDeadline || "",
      taskStatus: selectedTask?.taskStatus || "",
      taskPriority: selectedTask?.taskPriority || "",
    });
  }, [selectedTask]);

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <>
      <Box>
        <Box
          component="form"
          noValidate
          action={async (formData) => {
            await onUpdate(
              formData,
              isAssigned ? selectedTask.assignedTaskId : selectedTask.taskId
            ).then(() => {
            handleClose();
            updateAlert('Task Updated');
              
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
       
                       <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Client Name"} />

              <TextField
                autoComplete="taskTitle"
                name="taskTitle"
                required
                fullWidth
                value={formData.taskTitle}
                id="taskTitle"
                label="task Title "
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('priority')}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t('priority')}</InputLabel>
                <Select
                  name="taskPriority"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.taskPriority}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"HIGH"}>{t('high')}</MenuItem>
                    <MenuItem value={"MEDIUM"}>{t('medium')}</MenuItem>
                  <MenuItem value={"LOW"}>{t('low')}</MenuItem>
                    
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t('status')}</InputLabel>
                <Select
                  name="taskStatus"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.taskStatus}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"COMPLETED"}>{t('completed')}</MenuItem>
                    <MenuItem value={"NOT_COMPLETED"}>{t('notCompleted')}</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}>{t('inProgress')}</MenuItem>
                    
                </Select>
              </FormControl>
            </Grid>
              <FormFooter handleClose={handleClose} title={"Edit Task"} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
