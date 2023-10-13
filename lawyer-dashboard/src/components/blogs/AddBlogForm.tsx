"use client";
import React, { useState } from "react";
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
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

export default function BlogAddComponent({
  onCreate,
  UpdateImage,
}: {
  onCreate: any;
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

    await UpdateImage(formData);
  };

  // Select Priority
  const [status, setstatus] = React.useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  return (
    <>
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
          noValidate
          action={async (formData) => {
            await onCreate(formData).then(() => {
              handleUpdate();
            });
            updateTaskAlert();

            // // Introduce a delay before uploading the image
            // await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 1 second (adjust the delay as needed)

            // // After the delay, upload the image
            // await handleUpdate();
          }}
        >
          <Grid item xs={12} textAlign="end">
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
                  top: "-2px",
                }}
                className="mr-5px"
              />
              Create blog
            </Button>
          </Grid>
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
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
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
                id="blogContent"
                label="Blog Content"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
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
                id="authorName"
                label="Author"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}
