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
import Link from "next/link";
import dynamic from "next/dynamic";
import Author from "@/components/author/author_component";
import { updateTaskAlert } from "../alerts/alerts";
import { ClearIcon } from "@mui/x-date-pickers";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

export default function EditBlogAddComponent({
  onUpdate,
  UpdateImage,
  selectedBlog,
  handleClose,
}: {
  onUpdate: any;
  UpdateImage: any;
  selectedBlog: any;
  handleClose: any;
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

    await UpdateImage(formData);
  };

  // Select Priority
  const [status, setstatus] = React.useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    blogTitle: selectedBlog?.blogTitle,
    blogContent: selectedBlog?.blogContent || "",
    authorName: selectedBlog?.author.authorName || "",
    isFlag: selectedBlog?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      blogTitle: selectedBlog?.blogTitle,
      blogContent: selectedBlog?.blogContent || "",
      authorName: selectedBlog?.author.authorName || "",
      isFlag: selectedBlog?.isFlag == true ? "ready" : "not ready" || "",
    });
  }, [selectedBlog]);

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

            await onUpdate(formData, selectedBlog.blogId, selectedImage,selectedBlog.author.authorId);
            updateTaskAlert();
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Blog title
              </Typography>
              <TextField
                autoComplete="blogTitle"
                name="blogTitle"
                required
                fullWidth
                id="Blog title"
                label="Blog title"
                value={formData.blogTitle}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
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
                Image
              </Typography>

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
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Bloge Description
              </Typography>
              <TextField
                multiline
                minRows={10}
                autoComplete="blogContent"
                name="blogContent"
                required
                fullWidth
                value={formData.blogContent}
                id="blogContent"
                label="Blog Content"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
              {/* 
              <RichTextEditor
                id="blogContent"
                
                controls={[
                  ["bold", "italic", "underline", "link", "image"],
                  ["unorderedList", "h1", "h2", "h3", "h4"],
                  ["sup", "sub"],
                  ["alignLeft", "alignCenter", "alignRight"],
                ]}
              /> */}
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
                Blog Status
              </Typography>

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
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Author
              </Typography>

              <Author />
            </Grid> */}
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Author
              </Typography>
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
                Edit Task
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
