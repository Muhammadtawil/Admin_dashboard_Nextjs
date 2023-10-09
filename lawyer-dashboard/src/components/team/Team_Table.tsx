// "use client";
// import * as React from "react";
// import { Box, Typography } from "@mui/material";
// import Card from "@mui/material/Card";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import AddIcon from "@mui/icons-material/Add";
// import ClearIcon from "@mui/icons-material/Clear";
// import Link from "next/link";
// import styles from "@/styles/PageTitle.module.css";
// import Checkbox from "@mui/material/Checkbox";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import CloseIcon from "@mui/icons-material/Close";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// // Create new user Modal
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// function BootstrapDialogTitle(props: any) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };
// // End Create new user Modal

// function UsersList(props: any) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event: any) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event: any) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event: any) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event: any) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// UsersList.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(
//   name: any,
//   userName: any,
//   image: any,
//   email: any,
//   rolls: any,
//   status: any,
//   badgeClass: any
// ) {
//   return {
//     name,
//     userName,
//     image,
//     email,
//     rolls,
//     status,
//     badgeClass,
//   };
// }

// const rows = [
//   createData(
//     "Evangelina Mcclain",
//     "@jstevenson5c",
//     "/images/user1.png",
//     "jordansteve@gmail.com",
//     "Agent",
//     "Active",
//     "successBadge"
//   ),
// ].sort((a, b) => (a.name < b.name ? -1 : 1));

// export default function User() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event: any, newPage: any) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: any) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Create new user modal
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <>
//       <div className={styles.pageTitle}>
//         <h1>Users</h1>
//         <ul>
//           <li>
//             <Link href="/">Dashboard</Link>
//           </li>
//           <li>Users</li>
//         </ul>
//       </div>

//       <Card
//         sx={{
//           boxShadow: "none",
//           borderRadius: "10px",
//           p: "25px 20px 15px",
//           mb: "15px",
//         }}
//       >

//         <TableContainer
//           component={Paper}
//           sx={{
//             boxShadow: "none",
//           }}
//         >
//           <Table
//             sx={{ minWidth: 900 }}
//             aria-label="custom pagination table"
//             className="dark-table"
//           >
//             <TableHead sx={{ background: "#F7FAFF" }}>
//               <TableRow>
//                 <TableCell
//                   sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//                 >
//                   Name
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//                 >
//                   Email
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//                 >
//                   Rolls
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//                 >
//                   Status
//                 </TableCell>

//                 <TableCell
//                   align="right"
//                   sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//                 >
//                   Action
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {(rowsPerPage > 0
//                 ? rows.slice(
//                     page * rowsPerPage,
//                     page * rowsPerPage + rowsPerPage
//                   )
//                 : rows
//               ).map((row) => (
//                 <TableRow key={row.name}>
//                   <TableCell
//                     style={{
//                       borderBottom: "1px solid #F7FAFF",
//                       paddingTop: "13px",
//                       paddingBottom: "13px",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Checkbox {...label} size="small" />
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                       className="ml-10px"
//                     >
//                       <img
//                         src={row.image}
//                         alt="User"
//                         width={40}
//                         height={40}
//                         className="borRadius100"
//                       />
//                       <Box>
//                         <Typography
//                           component="h4"
//                           sx={{
//                             fontWeight: "500",
//                             fontSize: "13.5px",
//                           }}
//                           className="ml-10px"
//                         >
//                           {row.name}
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             color: "#A9A9C8",
//                           }}
//                           className="ml-10px"
//                         >
//                           {row.userName}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </TableCell>

//                   <TableCell
//                     align="center"
//                     style={{
//                       borderBottom: "1px solid #F7FAFF",
//                       fontSize: "13px",
//                       paddingTop: "13px",
//                       paddingBottom: "13px",
//                     }}
//                   >
//                     {row.email}
//                   </TableCell>

//                   <TableCell
//                     align="center"
//                     style={{
//                       borderBottom: "1px solid #F7FAFF",
//                       fontSize: "13px",
//                       paddingTop: "13px",
//                       paddingBottom: "13px",
//                     }}
//                   >
//                     {row.rolls}
//                   </TableCell>

//                   <TableCell
//                     align="center"
//                     sx={{
//                       fontWeight: 500,
//                       borderBottom: "1px solid #F7FAFF",
//                       fontSize: "12px",
//                       padding: "8px 10px",
//                     }}
//                   >
//                     <span className={row.badgeClass}>{row.status}</span>
//                   </TableCell>

//                   <TableCell
//                     align="right"
//                     sx={{ borderBottom: "1px solid #F7FAFF" }}
//                   >
//                     <Box
//                       sx={{
//                         display: "inline-block",
//                       }}
//                     >
//                       <Tooltip title="Remove" placement="top">
//                         <IconButton
//                           aria-label="remove"
//                           size="small"
//                           color="error"
//                           className="danger"
//                         >
//                           <DeleteIcon fontSize="inherit" />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title="Rename" placement="top">
//                         <IconButton
//                           aria-label="rename"
//                           size="small"
//                           color="primary"
//                           className="primary"
//                         >
//                           <DriveFileRenameOutlineIcon fontSize="inherit" />
//                         </IconButton>
//                       </Tooltip>
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ))}

//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell
//                     colSpan={5}
//                     style={{ borderBottom: "1px solid #F7FAFF" }}
//                   />
//                 </TableRow>
//               )}
//             </TableBody>

//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//                   colSpan={8}
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   SelectProps={{
//                     inputProps: {
//                       "aria-label": "rows per page",
//                     },
//                     native: true,
//                   }}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={UsersList}
//                   style={{ borderBottom: "none" }}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </Card>
//     </>
//   );
// }

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
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useState } from "react";
import { deleteAlert, successAlert } from "../alerts/alerts";
import { Checkbox, Dialog, Grid, TextField, Typography } from "@mui/material";
import EditTaskForm from "../todo/edit_Form";
import { Truculenta } from "next/font/google";

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
  servicesList,
  updateTask,
}: {
  dataRows: any[];
  deleteTask: any;
  updateTask: any;
  servicesList: any[];
}) {
  const [selectedFlag, setSelectedFlag] = useState<string | boolean>("");
  const handleServiceFlagFilterChange = (event: any) => {
    setSelectedFlag(event.target.value);
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
  const [selectedService, setSelectedService] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (service: any) => {
    setSelectedService(service);
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
    setSelectedService(task);
    handleClickOpenMember();
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
                  user.isFlag === true
                    ? "green"
                    : user.isFlag === false
                    ? "red"
                    : "inherit",
              }}
            >
              {user.isFlag == true ? "yes" : "No"}
            </Paper>
          </TableCell>
          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {user.userRole}
          </TableCell>
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
            {user.clientsCount ? user.clientsCount : "0"}
          </TableCell>

          <TableCell align="right" sx={cellStyle}>
            <Box sx={{ display: "inline-block" }}>
              <Tooltip title="Remove" placement="top">
                <IconButton
                  aria-label="remove"
                  size="small"
                  color="error"
                  className="error"
                  onClick={() => deleteAlert(deleteTask(user.serviceId))}
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
          selectedTask={selectedService}
          onUpdate={updateTask}
          servicesList={servicesList}
        /> */}
      </StyledDialogTitle>
    </Card>
  );
}
