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
import { deleteAlert } from "../alerts/alerts";
import EditTaskForm from "./edit_client_Form";
import cellStyle from "../shared/cellStyle";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import ActionsComponent from "../shared/PaginationList";

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
  const [selectedService, setSelectedService] = useState("");
  const handleServiceFilterChange = (event: any) => {
    setSelectedService(event.target.value);
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

  // In your TaskTable component, add a state to store the selected task data.
  const [selectedClient, setSelectedClient] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (task: any) => {
    setSelectedClient(task);
    handleClickOpen();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredClients = dataRows.filter(
      (client) =>
        (!selectedService || client.chosenServiceName === selectedService) &&
        (!selectedStatus || client.clientStatus === selectedStatus)
    );

    if (filteredClients.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredClients
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((client: any, index: number) => (
        <TableRow key={client.clientId}>
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
            {client.clientName}
          </TableCell>

          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {client.clientPhone}
          </TableCell>
          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {client.chosenServiceName}
          </TableCell>

          <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "100px",
                backgroundColor:
                  client.clientStatus === "COMPLETED"
                    ? "green"
                    : client.clientStatus === "PENDING"
                    ? "red"
                    : client.clientStatus === "IN_PROGRESS"
                    ? "yellow"
                    : "inherit", // Fallback color
              }}
            >
              {client.clientStatus}
            </Paper>
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
            {client.clientEmail ? client.clientEmail : "No Email"}
          </TableCell>

          <TableCell align="right" sx={cellStyle}>
            <Box sx={{ display: "inline-block" }}>
              <Tooltip title="Remove" placement="top">
                <IconButton
                  aria-label="remove"
                  size="small"
                  color="error"
                  className="error"
                  onClick={() => deleteAlert(deleteTask(client.clientId))}
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
                  onClick={() => handleEditClick(client)}
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
              <TableCell sx={cellStyle}>Client Name</TableCell>
              <TableCell sx={cellStyle}>Client Phone</TableCell>
              <TableCell align="center" sx={cellStyle}>
                Status
                <select
                  value={selectedService}
                  onChange={handleServiceFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  {servicesList.map((service, index) => (
                    <option key={index} value={service.serviceTitle}>
                      {service.serviceTitle}
                    </option>
                  ))}
                </select>
              </TableCell>

              <TableCell align="center" sx={cellStyle}>
                Status
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">All</option>
                  <option value="PENDING">Pending</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </TableCell>
              <TableCell sx={cellStyle}>Client Email</TableCell>
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
        <EditTaskForm
          handleClose={handleClose}
          selectedClient={selectedClient}
          onUpdate={updateTask}
          servicesList={servicesList}
        />
      </StyledDialogTitle>
    </Card>
  );
}
