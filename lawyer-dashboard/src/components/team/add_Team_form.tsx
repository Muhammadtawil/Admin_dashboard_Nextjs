"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  TextField,
  TextareaAutosize,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { successAlert } from "../alerts/alerts";
import StyledDialogTitle from "../shared/StyledDialogTitle";

const flagStatus = ["Yes", "No"];

export default function AddTeamForm({ onCreate }: { onCreate: any }) {
  const CustomTextField = ({
    name,
    label,
    multiline = false,
    minRows = 1,
  }: any) => (
    <Grid item xs={12} md={12} lg={6}>
      <InputLabel htmlFor={name}>
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
      </InputLabel>
      {multiline ? (
        <Box
          width="100%" // Set the desired width here
          sx={{
            borderRadius: 8,
          }}
        >
          <TextareaAutosize
            autoComplete={name}
            name={name}
            required={true}
            minRows={minRows}
            id={name}
            autoFocus
            style={{ width: "100%", borderRadius: 8, padding: "8px" }}
            className="for-dark-input"
          />
        </Box>
      ) : (
        <TextField
          autoComplete={name}
          name={name}
          required={true}
          fullWidth
          id={name}
          type="text"
          label={label}
          autoFocus
          InputProps={{
            style: { borderRadius: 8 },
          }}
          className="for-dark-input"
        />
      )}
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
        ></Typography>

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
          Add Team Member
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
              Add Team Member
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
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                  >
                    Active
                  </Typography>
                  <select
                    className="form-select bg-light border-0"
                    name="isFlag"
                    style={{
                      height: "55px",
                      color: "black",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                  >
                    <option value="">Select A Status</option>
                    {flagStatus.length === 0 ? (
                      <option value="" disabled>
                        Loading...
                      </option>
                    ) : (
                      flagStatus.map((service: any, index: any) => (
                        <option key={index} value={flagStatus[index]}>
                          {flagStatus[index]}
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
                    Add Team Member
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
