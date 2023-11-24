"use client"
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, Grid, InputLabel, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { AssignTaskAlert } from "../alerts/alerts";
import { useState } from "react";
import CustomTypography from "../shared/formsComponents";
import { useSession } from "next-auth/react";
import { Session } from "inspector";
import { useTranslations } from "next-intl";

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
  const [personName, setPersonName] = useState([]);
  const { data: session } = useSession();
  const t=useTranslations('taskPage')
  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    const namesArray = typeof value === "string" ? value.split(",") : value;

    setPersonName(namesArray);
  };

  // Filter out the active user from the list
  const filteredUsers = usersName.filter(user => user.userId !== session?.userId); // Replace `activeUserId` with the actual ID of the active user

  return (
    <Box>
      <Box
        component="form"
        noValidate={false}
        action={(formData) => {
          onSelectMember(formData, selectedTask.taskId).then(() => {
            handleClose();
            AssignTaskAlert();
          });
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
            <CustomTypography text={t('selectMember')} />
            <InputLabel htmlFor="select-multiple-chip">  {t('selectMember')}</InputLabel>
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
                    <Chip
                      key={value}
                      label={filteredUsers.find((user) => user.userId === value)?.userName}
                    />
                  ))}
                </Box>
              )}
            >
              {filteredUsers.map((name: any) => (
                // Disable selection for the active user
                <MenuItem
                  key={name.userName}
                  value={name.userId} // Use user.userId as the value
                  style={getStyles(name.userName, personName, theme)}
                  disabled={name.userId === session?.userId} // Disable selection for the active user
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
            }}
          >
            <AddIcon
              sx={{
                position: "relative",
                top: "-1px",
              }}
              className="mr-5px"
            />
         {t('selectMember')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
