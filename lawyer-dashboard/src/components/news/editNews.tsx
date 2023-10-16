"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dynamic from "next/dynamic";
import { updateTaskAlert } from "../alerts/alerts";
import { ClearIcon } from "@mui/x-date-pickers";
import CustomTypography, { FormFooter } from "../shared/formsComponents";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

export default function EditNewsComponent({
  onUpdate,
  UpdateImage,
  selectedNews,
  handleClose,
}: {
  onUpdate: any;
  UpdateImage: any;
  selectedNews: any;
  handleClose: any;
}) {
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log(selectedNews.newsId);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    // Append the selected image to the formData
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
    // formData.append("newsId", selectedNews.newsId);
    await UpdateImage(formData, selectedNews.newsId);
  };

  // Select Priority
  const [status, setstatus] = React.useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    newsTitle: selectedNews?.newsTitle,
    newsContent: selectedNews?.newsContent || "",
    isFlag: selectedNews?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      newsTitle: selectedNews?.newsTitle,
      newsContent: selectedNews?.newsContent || "",
      isFlag: selectedNews?.isFlag == true ? "ready" : "not ready" || "",
    });
  }, [selectedNews]);

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
    <div style={{ maxHeight: "100%", overflowY: "auto" }}>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          component="form"
          noValidate={false}
          action={async (formData) => {
            handleClose();
            handleUpdate();

            await onUpdate(formData, selectedNews.newsId, selectedImage);
            updateTaskAlert();
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"News Title"} />

              <TextField
                autoComplete="NewsTitle"
                name="newsTitle"
                required
                fullWidth
                id="newsTitle"
                label="News title"
                value={formData.newsTitle}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"Image"} />

              <input
                autoComplete="image"
                name="image"
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

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"News Content"} />

              <TextField
                multiline
                minRows={10}
                autoComplete="newsContent"
                name="newsContent"
                required
                fullWidth
                value={formData.newsContent}
                id="newsContent"
                label="News Content"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"News Status"} />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                  name="isFlag"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value={"ready"}>ready</MenuItem>
                  <MenuItem value={"not ready"}>Not ready</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"Author"} />

              <TextField
                autoComplete="Author"
                name="authorName"
                required
                fullWidth
                value={formData.authorName}
                id="authorName"
                label="Author"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid> */}
            <FormFooter handleClose={handleClose} title={"Edit News"} />
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
