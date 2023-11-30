"use client";
import { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import Image from 'next/image'
import { updateAlert } from "../alerts/alerts";
import CustomTypography, {
  FormFooter,
  ValuesSelect,
} from "../shared/formsComponents";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('teamPage')
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
    userBio:selectedUser?.userBio ||"",
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
    userBio:selectedUser?.userBio ||"",

    });
  }, [selectedUser]);
  const isNewImageSelected = selectedImage !== undefined;

  const imagePreviewSource = isNewImageSelected
    ? URL.createObjectURL(selectedImage)
    : formData.userImgUrl;
  
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
         
           
      
            await onUpdate(formData, selectedUser.userId,).then(() => {
            handleClose();
            updateAlert(t('update'));
            UpdateImage(formData, selectedUser.userId);

              
            });
          }}
        >
          <Box
            sx={{
              background: "#fff",
              padding: "20px 20px",
              borderRadius: "8px",
            }}
            className="client-input client-box"
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('userName')} />

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
                  label={t('userName')} 
                  autoFocus
                  value={formData.userName}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('phone')} />

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
                  label={t('userName')} 
                  autoFocus
                  value={formData.userPhone}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('email')}  />

                <TextField
                  name="userEmail"
                  required={true}
                  fullWidth
                  id="userEmail"
                  type="text"
                  label={t('email')} 
                  autoFocus
                  value={formData.userEmail}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('Bio')} />

                <TextField
                  name="userBio"
                  required={true}
                  fullWidth
                  multiline
                  id="userBio"
                  type="text"
                  label={t('Bio')} 
                  autoFocus
                  value={formData.userBio}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('position')} />

                <TextField
                  name="userPosition"
                  required={true}
                  fullWidth
                  id="userPosition"
                  type="text"
                  label={t('position')} 
                  autoFocus
                  value={formData.userPosition}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
       
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('facebookUrl')}/>

                <TextField
                  name="facebook"
                  required={true}
                  fullWidth
                  id="facebook"
                  type="text"
                  label={t('facebookUrl')}
                  autoFocus
                  value={formData.userFacebookUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('twitterUrl')} />
                <TextField
                  name="Twitter"
                  required={true}
                  fullWidth
                  id="Twitter"
                  type="text"
                  label={t('twitterUrl')}
                  autoFocus
                  value={formData.userTwitterUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('linkedInUrl')} />
                <TextField
                  name="LinkedIn"
                  required={true}
                  fullWidth
                  id="LinkedIn"
                  type="text"
                  label={t('linkedInUrl')}
                  autoFocus
                  value={formData.userLinkedInUrl}
                  InputProps={{
                    style: { borderRadius: 8 },
                    className:"client-input client-box"
                  }}
                  className="for-dark-input"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('role')} />
                <ValuesSelect name={"userRole"} values={serviceStatusValues} isrequired={true} optionValue="role" dicName="teamPage"/>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('active')} />
                <ValuesSelect name={"isTeam"} values={flagStatusValues} isrequired={true} optionValue="active" dicName="teamPage"/>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <CustomTypography text={t('image')} />
                <input
                   className="client-input client-box"
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

              {selectedImage && process.browser && (
  <div>
    <h3>{t('Preview')}:</h3>
    <Image
      src={imagePreviewSource}
      alt="Selected"
      width="200"
      height={180}
    />
  </div>
)}


              <FormFooter handleClose={handleClose} title={"Edit Team"} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
