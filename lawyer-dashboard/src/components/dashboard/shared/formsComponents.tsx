"use client"
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ClearIcon } from "@mui/x-date-pickers/icons";
import SearchForm from "../TopNavbar/search/SearchForm";
import { useTranslations } from "next-intl";
import { getStatusTranslationKey } from "./tables";
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

export const CustomTextField = ({ name, label, type = "text" ,isrequired}: {name:any,label:any,type:string,isrequired:boolean}) => (
  <Grid item xs={12} md={12} lg={6}>
    <CustomTypography text={label} />

    <TextField
      autoComplete={name}
      name={name}
      required={isrequired}
      fullWidth
      id={name}
      type={type}
      label={label}
      autoFocus
multiline
      InputProps={{
        style: { borderRadius: 8, },
        className:"client-input"
      }}
    // className="for-dark-input"
    />
  </Grid>
);

export const CustomSelect = ({
  name,
  label,
  values,
  selectedValue,
  onChange,

}: any) => {
  const t = useTranslations('taskPage')
  return (
    <Grid item xs={12} md={12} lg={6}>
      <CustomTypography text={label} />
      <Select
        fullWidth
        value={t(getStatusTranslationKey(selectedValue))}
        name={name}
        onChange={onChange}
        displayEmpty
        inputProps={{
          style: { borderRadius: 8 },
        }}
      >
        <MenuItem value="" disabled>
          {`Select ${label}`}
        </MenuItem>
        {values.map((key: any, index: any) => (
          <MenuItem key={index} value={key}>
            {t(key)} {/* Translate the value using the t function */}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  )
};

export const FormHead = ({
  handleClickOpen,
  title,
}: {
  handleClickOpen: any;
  title: any;
}) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #EEF0F7",
        paddingBottom: "10px",
        mb: "20px",
    
      }}
      className="formHead client-box"
    >
      <SearchForm />
      <Button
        onClick={handleClickOpen}
        variant="contained"
        className="headButton"
        sx={{
          textTransform: "capitalize",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "13px",
          padding: "12px 20px 10px 10px",
          color: "#fff !important",
          background: "#040831",
        }}
      >
        <AddIcon
          sx={{ position: "relative", top: "-1px" }}
          className="mr-5px"
        />
        {title}
      </Button>
    </Box>
  );
};

export const FormFooter = ({
  handleClose,
  title,
}: {
  handleClose: any;
  title: any;
}) => {

  const t = useTranslations('taskPage')
  return (
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
        {t('cancel')}
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
          background: "#040831",

        }}
      >
        <AddIcon
          sx={{
            position: "relative",
            top: "-1px",
          }}
          className="mr-5px"
        />
        {title}
      </Button>
    </Grid>
  );
};

export const HeadBox = ({
  handleClose,
  title,
}: {
  handleClose: any;
  title: any;
}) => {
  return (
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
        {title}
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
  );
};

export const ValuesSelect = ({ name, values, isrequired, dicName, optionValue }: { name: any; values?: any; isrequired: boolean, dicName: string, optionValue: string }) => {
  const t = useTranslations(dicName)
  const options = Array.isArray(values)
    ? values.map((value: any, index: any) => (
      <option key={index} value={values[index]}>
        {t(values[index])}
      </option>
    ))
    : null;

  return (
    <select
    className="client-box client-input"
      name={name}
      style={{
        height: "55px",
        width: "100%",
        borderRadius: "3%",
      }}
      required={isrequired}
    >
      <option value="" className="client-box client-input">{t(optionValue)}</option>
      {options || <option value="" disabled>Loading...</option>}
    </select>
  );
};



// export const handleInputChange = (

//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   const { name, value } = e.target;
//   setFormData((prevFormData) => ({
//     ...prevFormData,
//     [name]: value,
//   }));
// };
