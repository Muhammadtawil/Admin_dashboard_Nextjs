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
import EditTaskForm from "./edit_Service_Form";
import cellStyle from "../shared/cellStyle";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import ActionsComponent from "../shared/PaginationList";
import { useTranslations } from "next-intl";
import { getStatusTranslationKey } from "../shared/tables";

export default function ServicesTable({
  dataRows,
  deleteTask,
  updateTask,
}: {
  dataRows: any[];
  deleteTask: any;
  updateTask: any;
  }) {
  
  const t=useTranslations('servicesPage')
  const [selectedFlag, setSelectedFlag] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleStatusFilterChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };
  const handleFlagFilterChange = (event: any) => {
    setSelectedFlag(event.target.value);
  };


  // Edit
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [selectedService, setSelectedService] = useState(null);

  const handleEditClick = (service: any) => {
    setSelectedService(service);
    handleClickOpen();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredServices = dataRows.filter((service) => {
      if (selectedFlag === "" && selectedStatus === "") {
        return true; // No filtering applied
      }
    
      let flagFilterPassed = true;
      let statusFilterPassed = true;
    
      // Apply the isFlag filter if selectedFlag is not empty
      if (selectedFlag !== "") {
        flagFilterPassed = service.isFlag === (selectedFlag === "true");
      }
    
      // Apply the serviceStatus filter if selectedStatus is not empty
      if (selectedStatus !== "") {
        statusFilterPassed = service.serviceStatus === selectedStatus;
      }
    
      // Return true only if both filters pass
      return flagFilterPassed && statusFilterPassed;
    });

    return filteredServices
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((service: any, index: number) => (
        <TableRow key={service.serviceId}>
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
            {service.serviceTitle}
          </TableCell>

          <TableCell
            sx={{
              ...cellStyle,
            }}
          >
            {service.serviceDescription}
          </TableCell>

          <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "100px",
                color: "White",
                fontSize:"12px",
                backgroundColor:
                  service.serviceStatus === "AVAILABLE"
                    ? "green"
                    : service.serviceStatus === "NOT_AVAILABLE"
                    ? "red"
                    : "inherit",
              }}
            >
              {t(getStatusTranslationKey(service.serviceStatus))}
              {/* {service.serviceStatus} */}
            </Paper>
          </TableCell>
          <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
            <Paper
              elevation={0}
              sx={{
                padding: "4px 8px",
                width: "100px",
                color: "White",
                fontSize:"12px",
                backgroundColor:
                  service.isFlag === true
                    ? "green"
                    : service.isFlag === false
                    ? "red"
                    : "inherit",
              }}
            >
              {service.isFlag == true ? t('yes') : t('no')}
            </Paper>
          </TableCell>

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
            {service.clientsCount ? service.clientsCount : "0"}
          </TableCell>

          <TableCell align="right" sx={cellStyle}>
            <Box sx={{ display: "inline-block" }}>
              <Tooltip title={t('delete')} placement="top">
                <IconButton
                  aria-label={t('delete')}
                  size="small"
                  color="error"
                  className="error"
                  onClick={() => deleteAlert(deleteTask(service.serviceId))}
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
                  onClick={() => handleEditClick(service)}
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
              <TableCell sx={cellStyle}>{t('serviceTitle')}</TableCell>
              <TableCell sx={cellStyle}>{t('serviceDescription')}</TableCell>

              <TableCell align="center" sx={cellStyle}>
              {t('status')}
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">{t('All') }</option>
                  <option value="AVAILABLE">{t('available') }</option>
                  <option value="NOT_AVAILABLE">{t('notAvailable') }</option>
                </select>
              </TableCell>
              <TableCell align="center" sx={cellStyle}>
              {t('onWeb')}
                <select
                  value={selectedFlag}
                  onChange={handleFlagFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">{t('All') }</option>
                  <option value="true">{t('yes')}</option>
                  <option value="false">{t('no') }</option>
                </select>
              </TableCell>
              <TableCell sx={cellStyle}>{t('clientPerService')}</TableCell>
              <TableCell align="right" sx={cellStyle}>
              {t('actions')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{RenderTableRows(dataRows, page, rowsPerPage)}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: t('All'), value: -1 }]}
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
          selectedService={selectedService}
          onUpdate={updateTask}
        />
      </StyledDialogTitle>
    </Card>
  );
}
