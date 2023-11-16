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
import { useTranslations } from "next-intl";

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
  const t=useTranslations('testimonialsPage')
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
          className="client-box"
          component="form"
          noValidate={false}
          action={ (formData) => {

             onUpdate(formData, selectedTestimonials.testimonialId).then(() => {
            handleClose();
            updateAlert(t('update'));
              
            });
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('senderName')} />

              <TextField
                autoComplete="senderName"
                name="senderName"
                required
                fullWidth
                id="senderName"
                label={t('senderName')}
                value={formData.senderName}
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"

                }}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <CustomTypography text={t('TestimonialContent')} />

              <TextField
                multiline
                minRows={10}
                autoComplete="testimonialContent"
                name="testimonialContent"
                required
                fullWidth
                value={formData.testimonialContent}
                id="testimonialContent"
                label={t('TestimonialContent')} 
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                  className:"client-input"
                }}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <CustomTypography text={t('status')} />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                  className="client-input"
                  name="isFlag"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label={t('senderName')}
                  onChange={handleChange}
                  required={true}
                >
                  <MenuItem className="client-box client-input" value={"true"}>{t('ready')}</MenuItem>
                  <MenuItem className="client-box client-input" value={"false"}>{t('notReady')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <FormFooter handleClose={handleClose} title={t('editTestimonial')} />
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
