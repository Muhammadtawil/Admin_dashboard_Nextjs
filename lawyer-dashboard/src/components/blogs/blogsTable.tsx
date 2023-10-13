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
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useState } from "react";
import { deleteAlert, successAlert } from "../alerts/alerts";
import { Dialog, Grid, TextField, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

const label = { input: { "aria-label": "Checkbox demo" } };
const StyledDialogTitle = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
// Define a reusable cell style object
const cellStyle = {
  borderBottom: "1px solid #F7FAFF",
  fontSize: "13.5px",
};

export default function ClientTable({
  dataRows,
  deleteTask,
}: //   servicesList,
//   updateTask,
{
  dataRows: any[];
  deleteTask: any;
  //   updateTask: any;
  //   servicesList: any[];
}) {
  const [selectedService, setSelectedService] = useState("");
  const handleServiceFilterChange = (event: any) => {
    setSelectedService(event.target.value);
  };
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusFilterChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  function ToDoList(props: any) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handlePageButtonClick = (event: any, newPage: any) => {
      onPageChange(event, newPage);
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={(event) => handlePageButtonClick(event, 0)}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={(event) => handlePageButtonClick(event, page - 1)}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={(event) => handlePageButtonClick(event, page + 1)}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={(event) =>
            handlePageButtonClick(
              event,
              Math.max(0, Math.ceil(count / rowsPerPage) - 1)
            )
          }
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  ToDoList.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  //   const emptyRows =
  //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows.length) : 0;

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

  // In your TaskTable component, add a state to store the selected task data.
  const [selectedClient, setSelectedClient] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (task: any) => {
    setSelectedClient(task);
    handleClickOpen();
  };

  // Member Select
  const [openMember, setOpenMember] = useState(false);
  const handleCloseMember = () => {
    setOpenMember(false);
  };

  const handleClickOpenMember = () => {
    setOpenMember(true);
  };

  const handleSelectClick = (task: any) => {
    setSelectedClient(task);
    handleClickOpenMember();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredClients = dataRows.filter(
      (blog) => !selectedStatus || blog.isFlag === selectedStatus
    );

    if (filteredClients.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredClients
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((blog: any, index: number) => {
        const limitedContent = blog.blogContent.slice(0, 50); // Get the first 100 characters

        return (
          <TableRow key={blog.blogId}>
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
                  src={blog.blogImageUrl}
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
                    {blog.blogTitle}
                  </Typography>
                </Box>
              </Box>
            </TableCell>

            <TableCell
              sx={{
                ...cellStyle,
              }}
            >
              {blog.author.authorName}
            </TableCell>
            <TableCell
              sx={{
                ...cellStyle,
              }}
            >
              {limitedContent}
            </TableCell>
            <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
              <Paper
                elevation={0}
                sx={{
                  padding: "4px 8px",
                  width: "100px",
                  backgroundColor:
                    blog.isFlag === true
                      ? "green"
                      : blog.isFlag === false
                      ? "red"
                      : "inherit",
                }}
              >
                {blog.isFlag == true ? "yes" : "No"}
              </Paper>
            </TableCell>

            <TableCell align="right" sx={cellStyle}>
              <Box sx={{ display: "inline-block" }}>
                <Tooltip title="Remove" placement="top">
                  <IconButton
                    aria-label="remove"
                    size="small"
                    color="error"
                    className="error"
                    onClick={() => deleteAlert(deleteTask(blog.clientId))}
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
                    onClick={() => handleEditClick(blog)}
                  >
                    <DriveFileRenameOutlineIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </Box>
            </TableCell>
          </TableRow>
        );
      });
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
              <TableCell sx={cellStyle}>Title</TableCell>
              <TableCell sx={cellStyle}>author</TableCell>
              <TableCell sx={cellStyle}>Content</TableCell>

              <TableCell align="center" sx={cellStyle}>
                Status
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  <option value="ready">ready</option>
                  <option value="Not ready">not ready</option>
                </select>
              </TableCell>
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
                ActionsComponent={ToDoList}
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
        {/* <EditTaskForm
          handleClose={handleClose}
          selectedClient={selectedClient}
          onUpdate={updateTask}
          servicesList={servicesList}
        /> */}
      </StyledDialogTitle>
    </Card>
  );
}
