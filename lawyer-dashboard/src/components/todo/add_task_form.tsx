"use client";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { successAlert } from "../alerts/alerts";

const statusValues = ["COMPLETED", "NOT_COMPLETED", "IN_PROGRESS"];
const priorityValues = ["HIGH", "MEDIUM", "LOW"];

const StyledDialogTitle = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddTaskForm({ onCreate }: any) {
  // const ref = useRef<HTMLFormElement>(null);
  // const router = useRouter();
  const CustomTextField = ({ name, label, type = "text" }: any) => (
    <Grid item xs={12} md={12} lg={6}>
      <Typography
        component="h5"
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          mb: "12px",
        }}
      >
        {label}
      </Typography>
      <TextField
        autoComplete={name}
        name={name}
        required={true}
        fullWidth
        id={name}
        type={type}
        label={label}
        autoFocus
        InputProps={{
          style: { borderRadius: 8 },
        }}
        className="for-dark-input"
      />
    </Grid>
  );

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
        <Typography
          component="h5"
          sx={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          My Tasks
        </Typography>

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
          Add Task
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
              Add Task
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
            noValidate
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
                {/* <CustomTextField
                  name="startDate"
                  label="Start Date"
                  type="date"
                /> */}
                <CustomTextField
                  name="taskDeadline"
                  label="End Date"
                  type="date"
                />

                {/* <CustomSelect
                  name="taskStatus"
                  label="Status"
                  values={statusValues}
                  selectedValue={selectedStatus}
                  onChange={(e: any) => setSelectedStatus(e.target.value)}
                /> */}
                {/* <CustomSelect
                  name="taskPriority"
                  label="Priority"
                  values={priorityValues}
                  selectedValue={selectedPriority}
                  onChange={(e: any) => setSelectedPriority(e.target.value)}
                />   */}
                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Status
                  </Typography>
                  <select
                    className="form-select bg-light border-0"
                    name="taskStatus"
                    style={{
                      height: "55px",
                      color: "black",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                  >
                    <option value="">Select A Status</option>
                    {statusValues.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      statusValues.map((service: any, index: any) => (
                        <option key={index} value={statusValues[index]}>
                          {statusValues[index]}
                        </option>
                      ))
                    )}
                  </select>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Priority
                  </Typography>
                  <select
                    className="form-select bg-light border-0"
                    name="taskPriority"
                    style={{
                      height: "55px",
                      color: "black",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                  >
                    <option value="">Task Priority</option>
                    {priorityValues.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      priorityValues.map((service: any, index: any) => (
                        <option key={index} value={priorityValues[index]}>
                          {priorityValues[index]}
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
                    Add Task
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
