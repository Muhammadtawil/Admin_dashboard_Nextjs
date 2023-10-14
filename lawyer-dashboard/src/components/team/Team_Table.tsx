"use client";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import { useState } from "react";
import { deleteAlert, successAlert } from "../alerts/alerts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditTeamForm from "./edit_Team_Form";
import cellStyle from "../shared/cellStyle";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import ActionsComponent from "../shared/PaginationList";
import { Typography } from "@mui/material";

export default function TeamTable({
  dataRows,
  deleteTask,
  updateTask,
  UpdateImage,
}: {
  dataRows: any[];
  deleteTask: any;
  updateTask: any;
  UpdateImage: any;
}) {
  const [selectedFlag, setSelectedFlag] = useState<string | boolean>("");
  const handleServiceFlagFilterChange = (event: any) => {
    setSelectedFlag(event.target.value);
  };
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusFilterChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Edit
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [selectedUser, setSelectedUser] = useState(null);
  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    handleClickOpen();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredUser = dataRows.filter(
      (user) => !selectedFlag || user.isFlag === selectedFlag
    );

    if (filteredUser.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredUser
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((user: any, index: number) => (
        <TableRow key={user.userId}>
          <TableCell
            style={{
              borderBottom: "1px solid #F7FAFF",
              paddingTop: "13px",
              paddingBottom: "13px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              className="ml-10px"
            >
              <img
                src={user.userImgUrl}
                alt="User"
                width={40}
                height={40}
                className="borRadius100"
              />
              <Box>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: "500",
                    fontSize: "13.5px",
                  }}
                  className="ml-10px"
                >
                  {user.userName}
                </Typography>
              </Box>
            </Box>
          </TableCell>

          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {user.userEmail}
          </TableCell>

          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {user.userPhone}
          </TableCell>
          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {user.userPosition}
          </TableCell>
          <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "100px",
                backgroundColor:
                  user.isTeam === true
                    ? "green"
                    : user.isTeam === false
                    ? "red"
                    : "inherit",
              }}
            >
              {user.isTeam == true ? "yes" : "No"}
            </Paper>
          </TableCell>
          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {user.userRole}
          </TableCell>
          <TableCell sx={cellStyle}>
            <IconButton>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://www.twitter.com">
                <TwitterIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://www.linkedin.com">
                <LinkedInIcon />
              </a>
            </IconButton>
          </TableCell>

          <TableCell align="right" sx={cellStyle}>
            <Box sx={{ display: "inline-block" }}>
              <Tooltip title="Remove" placement="top">
                <IconButton
                  aria-label="remove"
                  size="small"
                  color="error"
                  className="error"
                  onClick={() => deleteAlert(deleteTask(user.userId))}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Tooltip title="edit" placement="top">
                <IconButton
                  aria-label="rename"
                  size="small"
                  color="primary"
                  className="primary"
                  onClick={() => handleEditClick(user)}
                >
                  <DriveFileRenameOutlineIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Box>
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        p: "25px 20px 15px",
        mb: "15px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <Table
          sx={{ minWidth: 930 }}
          aria-label="custom pagination table"
          className="dark-table"
        >
          <TableHead sx={{ background: "#F7FAFF" }}>
            <TableRow>
              <TableCell sx={cellStyle}>UserName</TableCell>
              <TableCell sx={cellStyle}>Email</TableCell>
              <TableCell sx={cellStyle}>Phone</TableCell>

              <TableCell sx={cellStyle}>Position</TableCell>

              <TableCell align="center" sx={cellStyle}>
                Active
                {/* <select
                  value={selectedFlag}
                  onChange={handleServiceFlagFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  <option value="true">Yes</option>
                  <option value="">No</option>
                </select> */}
              </TableCell>
              <TableCell sx={cellStyle}>Role</TableCell>

              <TableCell sx={cellStyle}>Social</TableCell>

              <TableCell align="right" sx={cellStyle}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{RenderTableRows(dataRows, page, rowsPerPage)}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={8}
                count={dataRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={ActionsComponent}
                style={{ borderBottom: "none" }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <StyledDialogTitle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <EditTeamForm
          handleClose={handleClose}
          selectedUser={selectedUser}
          onUpdate={updateTask}
          UpdateImage={UpdateImage}
        />
      </StyledDialogTitle>
    </Card>
  );
}
