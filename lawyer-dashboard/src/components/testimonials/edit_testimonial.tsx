"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dynamic from "next/dynamic";
import { updateAlert } from "../alerts/alerts";
import CustomTypography, { FormFooter } from "../shared/formsComponents";

export default function EditTestimonials({
  onUpdate,

  selectedTestimonials,
  handleClose,
}: {
  onUpdate: any;
  selectedTestimonials: any;
  handleClose: any;
}) {
  // Select Priority
  const [status, setstatus] = useState("");
  const handleChange = (event: any) => {
    setstatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    // Initialize the form data with the selected task's values
    senderName: selectedTestimonials?.senderName,
    testimonialContent: selectedTestimonials?.testimonialContent || "",
    isFlag: selectedTestimonials?.isFlag || "",
  });

  useEffect(() => {
    // Update the form data when the selectedTask prop changes
    setFormData({
      senderName: selectedTestimonials?.senderName,
      testimonialContent: selectedTestimonials?.testimonialContent || "",
      isFlag:
        selectedTestimonials?.isFlag == true ? "ready" : "not ready" || "",
    });
  }, [selectedTestimonials]);

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
          action={ (formData) => {

             onUpdate(formData, selectedTestimonials.testimonialId).then(() => {
            handleClose();
            updateAlert('Testimonials Updated');
              
            });
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Sender Name"} />

              <TextField
                autoComplete="senderName"
                name="senderName"
                required
                fullWidth
                id="senderName"
                label="Sender Name"
                value={formData.senderName}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={"Testimonials Content"} />

              <TextField
                multiline
                minRows={10}
                autoComplete="testimonialContent"
                name="testimonialContent"
                required
                fullWidth
                value={formData.testimonialContent}
                id="testimonialContent"
                label="Testimonial Content"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={"testimonial Status"} />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                  name="isFlag"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="status"
                  onChange={handleChange}
                  required={true}
                >
                  <MenuItem value={"ready"}>ready</MenuItem>
                  <MenuItem value={"not ready"}>Not ready</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <FormFooter handleClose={handleClose} title={"Edit Testimonial"} />
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
