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

export default function EmailSelect({
    usersName,

    handleClose,
    toEmails,
    setToEmails,
}: {
    usersName: any[];
    handleClose: any;
   
    toEmails: any;
    setToEmails: any;
}) {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const t = useTranslations('taskPage')
    const [selectAll, setSelectAll] = useState(false);


    const allEmails = usersName.map((subscriber) => subscriber.subscriberEmail);
    // const handleChange = (event: any) => {
    //     const {
    //         target: { value },
    //     } = event;

    //     const namesArray = typeof value === "string" ? value.split(",") : value;

    //     setPersonName(namesArray);
    // };



    return (
        <Box>
            <Box
                component="form"
                noValidate={false}
                action={() => {
                    console.log(toEmails)
                    setToEmails(selectAll?allEmails:toEmails);
                    handleClose();

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
                        <CustomTypography text="Select Email" />

                        <Select
                            fullWidth
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            name="usersId"
                            multiple
                            value={selectAll?allEmails:toEmails}
                            onChange={(event) => {
                                // handleChange(event);
      
                if (selectAll) {
                    setToEmails(allEmails.values);
                } else {
                    setToEmails(event.target.value);
                }
                            }}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {selected.map((value: any) => (
                                        <Chip
                                            key={value}
                                            label={usersName.find((user) => user.subscriberEmail === value)?.subscriberEmail}
                                        />
                                    ))}
                                </Box>
                            )}
                        >
                            <InputLabel htmlFor="select-all-checkbox">Select All</InputLabel>
                            <input
                                type="checkbox"
                                id="select-all-checkbox"
                                checked={selectAll}
                                onChange={() => {
                                    if (!selectAll) {
                                        setToEmails([])
                                    }
                                    setSelectAll(!selectAll)

                                }}
                            />

                            {usersName.map((name: any) => (

                                <MenuItem
                                    key={name.subscriberEmail}
                                    value={name.subscriberEmail}
                                    style={getStyles(name.subscriberEmail, personName, theme)}
                                >
                                    {name.subscriberEmail}
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
                        select emails
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
