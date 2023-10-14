"use client";
import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";
import { CustomSelect, CustomTextField } from "../shared/formsComponents";

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
            handleClose();
            await onUpdate(
              formData,
              isAssigned ? selectedTask.assignedTaskId : selectedTask.taskId
            );
            updateTaskAlert();
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
              <CustomTextField
                name="taskTitle"
                label="Task"
                value={formData.taskTitle}
                onChange={handleInputChange}
              />
              <CustomSelect
                name="taskStatus"
                label="Status"
                values={statusValues}
                selectedValue={formData.taskStatus}
                onChange={handleInputChange}
              />
              <CustomSelect
                name="taskPriority"
                label="Priority"
                values={priorityValues}
                selectedValue={formData.taskPriority}
                onChange={handleInputChange}
              />

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
                  Edit Task
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
