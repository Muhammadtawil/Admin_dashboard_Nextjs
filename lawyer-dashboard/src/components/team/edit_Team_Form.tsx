"use client";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";

const serviceStatusValues = ["USER", "ADMIN"];
const flagStatusValues = ["Yes", "No"];
export default function EditTeamForm({
  onUpdate,
  handleClose,
  selectedUser,
}: {
  onUpdate: any;
  handleClose: any;
  selectedUser: any;
}) {
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUpdate = async () => {
    // Create a new FormData object to hold the form data
    // const formData = new FormData();
    // // Append the selected image to the formData
    // if (selectedImage) {
    //   formData.append("image", selectedImage);
    // }
    // Call the onUpdate function with the formData and selectedUser.userId
    // await onUpdate(formData, selectedUser.userId);
    // setSelectedImage(null);
    // handleClose();
  };
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    userName: selectedUser?.userName,
    userPhone: selectedUser?.userPhone || "",
    userEmail: selectedUser?.userEmail || "",
    userPosition: selectedUser?.userPosition || "",
    userFacebookUrl: selectedUser?.userFacebookUrl || "",
    userLinkedInUrl: selectedUser?.userLinkedInUrl || "",
    userTwitterUrl: selectedUser?.userTwitterUrl || "",
    userImgUrl: selectedUser.userImgUrl || "",
    isFlag: selectedUser?.isTeam || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      userName: selectedUser?.userName,
      userPhone: selectedUser?.userPhone || "",
      userEmail: selectedUser?.userEmail || "",
      userPosition: selectedUser?.userPosition || "",
      userFacebookUrl: selectedUser?.userFacebookUrl || "",
      userLinkedInUrl: selectedUser?.userLinkedInUrl || "",
      userTwitterUrl: selectedUser?.userTwitterUrl || "",
      userImgUrl: selectedUser.userImgUrl || "",
      isFlag: selectedUser?.isTeam || "",
    });
  }, [selectedUser]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
            console.log(`selected Image: ${selectedImage}`);
            // if (selectedImage) {
            //   formData.append("image", selectedImage);
            // }

            handleClose();
            // handleUpdate();
            await onUpdate(formData, selectedUser.userId,selectedImage);
            updateTaskAlert();
            // setSelectedImage('');
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
              {/* <CustomTextField
                name="serviceName"
                label="Name"
                value={formData.serviceName}
                onChange={handleInputChange}
                inputRef={(input: any) => input && input.focus()}
              /> */}

              {/* <CustomTextField
                name="serviceDescription"
                label="Description"
                multiline
                minRows={6}
                value={formData.serviceDescription}
                onChange={handleInputChange}
              /> */}
              <Grid item xs={12} md={12} lg={6}>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "12px",
                  }}
                >
                  Name
                </Typography>

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  name="userName"
                  required={true}
                  fullWidth
                  id="userName"
                  type="text"
                  label="user Name"
                  autoFocus
                  value={formData.userName}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Phone
                </Typography>

                <Box
                  width="100%" // Set the desired width here
                  sx={{
                    borderRadius: 8,
                  }}
                ></Box>

                <TextField
                  name="userPhone"
                  required={true}
                  fullWidth
                  id="userPhone"
                  type="number"
                  label="Phone number"
                  autoFocus
                  value={formData.userPhone}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Email
                </Typography>

                <TextField
                  name="userEmail"
                  required={true}
                  fullWidth
                  id="userEmail"
                  type="text"
                  label="Email"
                  autoFocus
                  value={formData.userEmail}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Email
                </Typography>

                <TextField
                  name="userPosition"
                  required={true}
                  fullWidth
                  id="userPosition"
                  type="text"
                  label="Position"
                  autoFocus
                  value={formData.userPosition}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Facebook Url
                </Typography>

                <TextField
                  name="facebook"
                  required={true}
                  fullWidth
                  id="facebook"
                  type="text"
                  label="Facebook URL"
                  autoFocus
                  value={formData.userFacebookUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Twitter Url
                </Typography>

                <TextField
                  name="Twitter"
                  required={true}
                  fullWidth
                  id="Twitter"
                  type="text"
                  label="Twitter url"
                  autoFocus
                  value={formData.userTwitterUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  LinkedIn Url
                </Typography>

                <TextField
                  name="LinkedIn"
                  required={true}
                  fullWidth
                  id="LinkedIn"
                  type="text"
                  label="LinkedIn Url"
                  autoFocus
                  value={formData.userLinkedInUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
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
                  Role
                </Typography>
                <select
                  className="form-select bg-light border-0"
                  name="userRole"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Select A Status</option>
                  {serviceStatusValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    serviceStatusValues.map((service: any, index: any) => (
                      <option key={index} value={serviceStatusValues[index]}>
                        {serviceStatusValues[index]}
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
                  Active
                </Typography>
                <select
                  className="form-select bg-light border-0"
                  name="isTeam"
                  style={{
                    height: "55px",
                    color: "black",
                    width: "100%",
                    borderRadius: "3%",
                  }}
                >
                  <option value="">Select A Status</option>
                  {flagStatusValues.length === 0 ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    flagStatusValues.map((service: any, index: any) => (
                      <option key={index} value={flagStatusValues[index]}>
                        {flagStatusValues[index]}
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
                  Image
                </Typography>

                <input
                  autoComplete="image"
                  name="image"
                  required
                  accept="image/png"
                  id="image"
                  type="file"
                  autoFocus
                  onChange={(files) => handleImageChange(files)}
                />
              </Grid>

              {selectedImage && (
                <div>
                  <h3>Preview:</h3>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    width="200"
                  />
                </div>
              )}

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

// const CustomTextField = ({
//   name,
//   label,
//   multiline = false,
//   minRows = 1,
//   value,
//   onChange,
// }: any) => (
//   <Grid item xs={12} md={12} lg={6}>
//     <InputLabel htmlFor={name}>
//       <Typography
//         component="h5"
//         sx={{
//           fontWeight: "500",
//           fontSize: "14px",
//           mb: "12px",
//         }}
//       >
//         {label}
//       </Typography>
//     </InputLabel>
//     {multiline ? (
//       <Box
//         width="100%" // Set the desired width here
//         sx={{
//           borderRadius: 8,
//         }}
//       >
//         <TextareaAutosize
//           autoComplete={name}
//           name={name}
//           required={true}
//           minRows={minRows}
//           id={name}
//           value={value}
//           autoFocus
//           style={{ width: "100%", borderRadius: 8, padding: "8px" }}
//           className="for-dark-input"
//           onChange={onChange}
//         />
//       </Box>
//     ) : (
//       <TextField
//         autoComplete={name}
//         name={name}
//         required={true}
//         fullWidth
//         id={name}
//         type="text"
//         label={label}
//         autoFocus
//         value={value}
//         InputProps={{
//           style: { borderRadius: 8 },
//         }}
//         className="for-dark-input"
//         onChange={onChange}
//       />
//     )}
//   </Grid>
// );

// const CustomSelect = ({
//   name,
//   label,
//   values,
//   selectedValue,
//   onChange,
// }: {
//   name: any;
//   label: any;
//   values: string[];
//   selectedValue: any;
//   onChange: any;
// }) => (
//   <Grid item xs={12} md={12} lg={6}>
//     <Typography
//       component="h5"
//       sx={{
//         fontWeight: "500",
//         fontSize: "14px",
//         mb: "12px",
//       }}
//     >
//       {label}
//     </Typography>
//     <Select
//       fullWidth
//       value={selectedValue}
//       name={name}
//       onChange={onChange}
//       displayEmpty
//       inputProps={{
//         //   name,
//         //   id: name,
//         style: { borderRadius: 8 },
//       }}
//     >
//       <MenuItem value="" disabled>
//         {`Select ${label}`}
//       </MenuItem>
//       {values.map((value: any, index: any) => (
//         <MenuItem key={index} value={value}>
//           {value}
//         </MenuItem>
//       ))}
//     </Select>
//   </Grid>
// );

{
  /* 
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
                    statusValues.map((status: any, index: any) => (
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
              </Grid> */
}
