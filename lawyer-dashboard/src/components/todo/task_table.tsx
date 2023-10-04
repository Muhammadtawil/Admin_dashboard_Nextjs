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
import EditTaskForm from "./edit_Form";
import PersonIcon from "@mui/icons-material/Person";
import MemberSelect from "./member_select";
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

export default function TaskTable({
  dataRows,
  deleteTask,
  updateTask,
  getusers,
  onSelectMember,
  isAssigned,
  userRole,
  isToMe,
}: {
  dataRows: any[];
  deleteTask: any;
  updateTask: any;
  getusers: any[];
  onSelectMember: any;
  isAssigned: boolean;
  userRole: any;
  isToMe: boolean;
}) {
  const [selectedPriority, setSelectedPriority] = useState("");
  const handlePriorityFilterChange = (event: any) => {
    setSelectedPriority(event.target.value);
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
  const [selectedTask, setSelectedTask] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (task: any) => {
    setSelectedTask(task);
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
    setSelectedTask(task);
    handleClickOpenMember();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredTasks = dataRows.filter(
      (task) =>
        (!selectedPriority || task.taskPriority === selectedPriority) &&
        (!selectedStatus || task.taskStatus === selectedStatus)
    );

    if (filteredTasks.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredTasks
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((task: any, index: number) => (
        <TableRow key={isAssigned ? task.assignedTaskId : task.taskId}>
          <TableCell
            sx={{
              ...cellStyle,
              fontWeight: "500",
              color: "#260944",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Checkbox {...label} size="small" />
            {task.taskTitle}
          </TableCell>
          {isAssigned && userRole === "ADMIN" && !isToMe ? (
            // Render a row of Avatars using the assignedTo array
            <TableCell sx={cellStyle}>
              {task.assignedTo.map((user: any) => (
                <Avatar
                  key={user.userId}
                  alt={user.userName}
                  src={user.userImgUrl}
                  sx={{ marginRight: "8px" }} // Adjust the spacing between avatars as needed
                />
              ))}
            </TableCell>
          ) : userRole === "ADMIN" && !isToMe ? (
            // Render the TableCell for ADMIN
            <TableCell sx={cellStyle}>
              <IconButton
                aria-label="User Icon"
                onClick={() => handleSelectClick(task)}
              >
                <PersonIcon sx={{ fontSize: 35, color: "green" }} />
              </IconButton>
            </TableCell>
          ) : isToMe ? (
            // Check if it's assigned to the user
            <TableCell sx={cellStyle}>
              {getusers
                .filter((user: any) => user.userId === task.assignBy)
                .map((filteredUser: any) => (
                  <Avatar
                    key={filteredUser.userId}
                    alt={filteredUser.userName}
                    src={filteredUser.userImgUrl}
                    sx={{ marginRight: "8px" }} // Adjust the spacing between avatars as needed
                  />
                ))}
            </TableCell>
          ) : null}

          <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
            {new Date(task.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "2-digit",
              year: "2-digit",
              hour: "numeric",
              minute: "numeric",
            })}
          </TableCell>
          <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
            {new Date(task.taskDeadline).toLocaleDateString("en-US", {
              day: "numeric",
              month: "2-digit",
              year: "2-digit",
            })}
          </TableCell>
          {isAssigned ? (
            <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
              {new Date(task.assignedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
                minute: "numeric",
              })}
            </TableCell>
          ) : null}
          <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "100px",
                backgroundColor:
                  task.taskStatus === "COMPLETED"
                    ? "green"
                    : task.taskStatus === "NOT_COMPLETED"
                    ? "red"
                    : task.taskStatus === "IN_PROGRESS"
                    ? "yellow"
                    : "inherit", // Fallback color
              }}
            >
              {task.taskStatus}
            </Paper>
          </TableCell>

          <TableCell sx={{ ...cellStyle, fontSize: "13px" }} align="center">
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "80px",
                backgroundColor:
                  task.taskPriority === "HIGH"
                    ? "red"
                    : task.taskPriority === "MEDIUM"
                    ? "blue"
                    : task.taskPriority === "LOW"
                    ? "green"
                    : "inherit", // Fallback color
              }}
            >
              {task.taskPriority}
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
                  onClick={() =>
                    deleteAlert(
                      deleteTask(isAssigned ? task.assignedTaskId : task.taskId)
                    )
                  }
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
                  onClick={() => handleEditClick(task)}
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
              <TableCell sx={cellStyle}>Name</TableCell>
              {userRole === "ADMIN" && !isToMe ? (
                <TableCell sx={cellStyle}>Assigned To</TableCell>
              ) : isToMe ? (
                <TableCell sx={cellStyle}>Assigned By</TableCell>
              ) : null}

              <TableCell sx={cellStyle}>Start Date</TableCell>
              <TableCell sx={cellStyle}>End Date</TableCell>
              {isAssigned ? (
                <TableCell sx={cellStyle}>Assigned Date</TableCell>
              ) : null}
              <TableCell align="center" sx={cellStyle}>
                Status
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="NOT_COMPLETED">Not Completed</option>
                  <option value="IN_PROGRESS">In Progress</option>
                </select>
              </TableCell>

              <TableCell align="center" sx={cellStyle}>
                Priority
                <select
                  value={selectedPriority}
                  onChange={handlePriorityFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
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
        <EditTaskForm
          handleClose={handleClose}
          selectedTask={selectedTask}
          onUpdate={updateTask}
          isAssigned={isAssigned ? true : false}
        />
      </StyledDialogTitle>
      <StyledDialogTitle
        onClose={handleCloseMember}
        aria-labelledby="customized-dialog-title"
        open={openMember}
      >
        <MemberSelect
          usersName={getusers}
          selectedTask={selectedTask}
          handleClose={handleCloseMember}
          onSelectMember={onSelectMember}
        />
      </StyledDialogTitle>
    </Card>
  );
}
