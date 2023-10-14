import React from "react";
import { Grid, MenuItem, Select, TextField, Typography } from "@mui/material";

const CustomTypography = ({ text }: { text: any }) => {
  return (
    <Typography
      component="h5"
      sx={{
        fontWeight: "500",
        fontSize: "14px",
        mb: "12px",
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;

export const CustomTextField = ({ name, label, type = "text" }: any) => (
  <Grid item xs={12} md={12} lg={6}>
    <CustomTypography text={label} />

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

export const CustomSelect = ({
  name,
  label,
  values,
  selectedValue,
  onChange,
}: any) => (
  <Grid item xs={12} md={12} lg={6}>
    <CustomTypography text={label} />
    <Select
      fullWidth
      value={selectedValue}
      name={name}
      onChange={onChange}
      displayEmpty
      inputProps={{
        //   name,
        //   id: name,
        style: { borderRadius: 8 },
      }}
    >
      <MenuItem value="" disabled>
        {`Select ${label}`}
      </MenuItem>
      {values.map((value: any, index: any) => (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  </Grid>
);
