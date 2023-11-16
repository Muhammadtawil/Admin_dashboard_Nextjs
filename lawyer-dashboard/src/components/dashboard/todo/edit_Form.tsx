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
            updateAlert(t('editAlert'));
              
            });
          }}
        >
          <Box
            sx={{
              // background: "#fff",
              padding: "20px 20px",
              borderRadius: "8px",
            }}
            className="client-box"
          >
            <Grid container alignItems="center" spacing={2} className="client-box" >
       
                       <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('taskTitle')} />

                <TextField
                  className="client-box"
                autoComplete="taskTitle"
                name="taskTitle"
                required
                fullWidth
                value={formData.taskTitle}
                id="taskTitle"
                label={t('taskTitle')}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('priority')}/>

              <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label">{t('priority')}</InputLabel>
                  <Select
                    className="client-input"
                  name="taskPriority"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.taskPriority}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"HIGH"} className="client-box client-input">{t('high')} </MenuItem>
                    <MenuItem value={"MEDIUM"} className="client-box client-input">{t('medium')}</MenuItem>
                  <MenuItem value={"LOW"} className="client-box client-input">{t('low')}</MenuItem>
                    
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')}/>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t('status')}</InputLabel>
                  <Select
                    className="client-input"
                  name="taskStatus"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.taskStatus}
                  label={t('status')}
                  onChange={handleInputChange}
                >
                  <MenuItem value={"COMPLETED"} className="client-box client-input">{t('completed')} </MenuItem>
                    <MenuItem value={"NOT_COMPLETED"} className="client-box client-input">{t('notCompleted')}</MenuItem>
                  <MenuItem value={"IN_PROGRESS"} className="client-box client-input">{t('inProgress')}</MenuItem>
                    
                </Select>
              </FormControl>
            </Grid>
              <FormFooter handleClose={handleClose} title={t('edit')} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
