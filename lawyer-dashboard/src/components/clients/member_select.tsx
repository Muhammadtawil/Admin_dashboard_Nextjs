import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, Grid, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { AssignTaskAlert, updateTaskAlert } from "../alerts/alerts";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250, // Adjust this width as needed
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MemberSelect({
  usersName,
  selectedTask,
  onSelectMember,
  handleClose,
}: {
  usersName: any[];
  selectedTask: any;
  handleClose: any;
  onSelectMember: any;
}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    // Split the value by comma to get individual names
    const namesArray = typeof value === "string" ? value.split(",") : value;

    setPersonName(namesArray);
  };

  return (
    <Box>
      <Box
        component="form"
        noValidate
        action={async (formData) => {
          handleClose();
          await onSelectMember(formData, selectedTask.taskId);
          AssignTaskAlert();
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
          <Grid item xs={12} md={12} lg={6}>
            {/* <InputLabel id="demo-multiple-chip-label">Select</InputLabel> */}
            <Typography
              component="h5"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "12px",
              }}
            >
              'Select Member'
            </Typography>
            <Select
              fullWidth
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              name="usersId"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {usersName.map((name: any) => (
                <MenuItem
                  key={name.userName}
                  value={name.userName}
                  style={getStyles(name.userName, personName, theme)}
                >
                  {name.userName}
                </MenuItem>
              ))}
            </Select>
          </Grid>

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
            Select Member
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
