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
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { DeleteTask } from "@/server/tasks/tasks";
import deleteAlert from "../alerts/alerts";

const label = { input: { "aria-label": "Checkbox demo" } };

// Define a reusable cell style object
const cellStyle = {
  borderBottom: "1px solid #F7FAFF",
  fontSize: "13.5px",
};

export default function TaskTable({ dataRows }: { dataRows: any[] }) {
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


  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) =>
    dataRows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((task: any, index: number) => (
        <TableRow key={task.taskId}>
          <TableCell sx={{ ...cellStyle, fontWeight: "500", color: "#260944" }}>
            <Checkbox {...label} size="small" />
            {task.taskTitle}
          </TableCell>
          <TableCell sx={cellStyle}>
            <Avatar alt="User" src={task.url} sx={{ width: 35, height: 35 }} />
          </TableCell>
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
                  onClick={() => deleteAlert(DeleteTask(task.taskId))}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Rename" placement="top">
                <IconButton
                  aria-label="rename"
                  size="small"
                  color="primary"
                  className="primary"
                >
                  <DriveFileRenameOutlineIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Box>
          </TableCell>
        </TableRow>
      ));

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
              <TableCell sx={cellStyle}>Assigned</TableCell>
              <TableCell sx={cellStyle}>Start Date</TableCell>
              <TableCell sx={cellStyle}>End Date</TableCell>
              <TableCell align="center" sx={cellStyle}>
                Status
              </TableCell>

              <TableCell align="center" sx={cellStyle}>
                Priority
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
    </Card>
  );
}
