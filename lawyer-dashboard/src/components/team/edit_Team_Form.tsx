"use client";
import { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { updateTaskAlert } from "../alerts/alerts";
import CustomTypography from "../shared/formsComponents";

const serviceStatusValues = ["USER", "ADMIN"];
const flagStatusValues = ["Yes", "No"];
export default function EditTeamForm({
  onUpdate,
  handleClose,
  selectedUser,
  UpdateImage,
}: {
  onUpdate: any;
  handleClose: any;
  selectedUser: any;
  UpdateImage: any;
}) {
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    // Append the selected image to the formData
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    await UpdateImage(formData, selectedUser.userId);

    // setSelectedImage(null);
    handleClose();
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
            console.log(`selected user: ${selectedUser.userId}`);

            handleUpdate();
            handleClose();
            await onUpdate(formData, selectedUser.userId, selectedImage);
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
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={"Name"} />

                <Box
                  width="100%"
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
                <CustomTypography text={"Phone"} />

                <Box
                  width="100%"
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
                <CustomTypography text={"Email"} />

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
                <CustomTypography text={"Position"} />

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
                <CustomTypography text={"Facebook Url"} />

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
                <CustomTypography text={"Twitter Url"} />
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
                <CustomTypography text={"LinkedIn Url"} />
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
                <CustomTypography text={"Role"} />
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
                <CustomTypography text={"Active"} />
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
                <CustomTypography text={"Image"} />
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
