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
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import {  useState } from "react";
import EditTaskForm from "./edit_Form";
import MemberSelect from "./member_select";
import cellStyle from "../shared/cellStyle";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import ActionsComponent from "../shared/PaginationList";
import { useLocale, useTranslations } from "next-intl";
import { getStatusTranslationKey } from "../shared/tables";
import { Typography } from "@mui/material";
import { IoPersonAddSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

const label = { input: { "aria-label": "Checkbox demo" } };

export default function TaskTable({
  dataRows,
  deleteTask,
  updateTask,
  getusers,
  onSelectMember,
  isAssigned,
  userRole,
  isToMe,
  tableTitle,
}: {
  dataRows: any[];
  deleteTask: any;
  updateTask: any;
  getusers: any[];
  onSelectMember: any;
  isAssigned: boolean;
  userRole: any;
    isToMe: boolean;
    tableTitle: string;
  }) {
    const [selectedPriority, setSelectedPriority] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
  const [openMember, setOpenMember] = useState(false);
  
    const t = useTranslations('taskPage');
  const path = usePathname();
  const arabic=path.includes('ar')
  const locale=useLocale()
    const handlePriorityFilterChange = (event: any) => {
      setSelectedPriority(event.target.value);
    };
  
    const handleStatusFilterChange = (event: any) => {
      setSelectedStatus(event.target.value);
    };
  
    const handleChangePage = (event: any, newPage: any) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: any) => {
      const selectedRowsPerPage = parseInt(event.target.value, 10);
      if ([5, 10, 25, -1].includes(selectedRowsPerPage)) {
        setRowsPerPage(selectedRowsPerPage);
        setPage(0);
      }
    };
    
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleEditClick = (task: any) => {
      setSelectedTask(task);
      handleClickOpen();
    };
  
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
              // display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
     
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
                <IoPersonAddSharp/>
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
            {new Date(task.createdAt).toLocaleDateString(locale=="ar"?"ar-LB":"en-US", {
              day: "numeric",
              month: "2-digit",
              year: "2-digit",
              hour: "numeric",
              minute: "numeric",
            })}
          </TableCell>
          <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
            {new Date(task.taskDeadline).toLocaleDateString(locale=="ar"?"ar-LB":"en-US", {
              day: "numeric",
              month: "2-digit",
              year: "2-digit",
              hour: "numeric",
              minute: "numeric",
            })}
          </TableCell>
          {isAssigned ? (
            <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
              {new Date(task.assignedAt).toLocaleDateString(locale=="ar"?"ar-LB":"en-US", {
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
                color: "white",
                fontSize:"12px",
                backgroundColor:
                  task.taskStatus === "COMPLETED"
                    ? "green"
                    : task.taskStatus === "NOT_COMPLETED"
                    ? "red"
                    : task.taskStatus === "IN_PROGRESS"
                    ? "#317B67"
                    : "inherit", // Fallback color
              }}
            >
                {t(getStatusTranslationKey(task.taskStatus))}
            </Paper>
          </TableCell>

          <TableCell sx={{ ...cellStyle, fontSize: "13px" }} align="center">
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "80px",
                color: "white",
                fontSize:"12px",
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
                    {t(getStatusTranslationKey(task.taskPriority))}
            </Paper>
          </TableCell>
          <TableCell align="right" sx={cellStyle}>
            <Box sx={{ display: "inline-block" }}>
              <Tooltip title={t('delete')} placement="top">
                <IconButton
                  aria-label={t('delete')}
                  size="small"
                  color="error"
                  className="error"
                //   onClick={() =>
                //     deleteAlert(
                // deleteTask(isAssigned ? task.assignedTaskId : task.taskId)
                //     )
                //   }
                  onClick={async() => {
                    await Swal.fire({
                      title: t('deleteTitle'),
                      text: t('deleteTitle2'),
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: t('yes'),
                      focusConfirm: true,
                      allowEscapeKey: true,
                      cancelButtonText:t('cancel')
                      
                    }).then((result) => {
                      if (result.isConfirmed && result.value === true) {
                        console.log(result)
                   deleteTask(isAssigned ? task.assignedTaskId : task.taskId);
                        Swal.fire(t('deleteSuccess'));
                      }
                    });
                  }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('edit')} placement="top">
                <IconButton
                  aria-label={t('edit')}
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
        <Typography
        component="h2"
       
        sx={{
          fontSize: 20,
          fontWeight: 500,
          padding: 2,
          textAlign:locale=="ar"?"right":"left"
        }}
      >
     {t(tableTitle)}
      </Typography>

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
              <TableCell sx={cellStyle}>{t('taskTitle')}</TableCell>
              {userRole === "ADMIN" && !isToMe ? (
                <TableCell sx={cellStyle}>{t('assignedTo')}</TableCell>
              ) : isToMe ? (
                <TableCell sx={cellStyle}>{t('assignedBy')}</TableCell>
              ) : null}

              <TableCell sx={cellStyle}>{t('startDate')}</TableCell>
              <TableCell sx={cellStyle}>{t('endDate')}</TableCell>
              {isAssigned ? (
                <TableCell sx={cellStyle}>{t('assignedDate')} </TableCell>
              ) : null}
              <TableCell align="center" sx={cellStyle}>
              {t('status')}
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">{t('All')}</option>
                  <option value="COMPLETED">{t('completed')}</option>
                  <option value="NOT_COMPLETED">{t('notCompleted')}</option>
                  <option value="IN_PROGRESS">{t('inProgress')}</option>
                </select>
              </TableCell>

              <TableCell align="center" sx={cellStyle}>
              {t('priority')}
                <select
                  value={selectedPriority}
                  onChange={handlePriorityFilterChange}
                  style={{ marginLeft: "8px" ,}}
                >
                  <option value="">{t('All')}</option>
                  <option value="HIGH">{t('high')}</option>
                  <option value="MEDIUM">{t('medium')}</option>
                  <option value="LOW">{t('low')}</option>
                </select>
              </TableCell>
              <TableCell align="right" sx={cellStyle}>
              {t('actions')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{RenderTableRows(dataRows, page, rowsPerPage)}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label:t('All'), value: -1 }]}
                colSpan={9}
                count={dataRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label":t('rowPerPage'),
                  },
                  native: false,

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
