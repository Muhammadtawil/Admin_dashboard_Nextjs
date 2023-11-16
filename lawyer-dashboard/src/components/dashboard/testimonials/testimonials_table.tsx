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
import { Typography } from "@mui/material";

import StyledDialogTitle from "../shared/StyledDialogTitle";
import cellStyle from "../shared/cellStyle";
import ActionsComponent from "../shared/PaginationList";
import EditTestimonials from "./edit_testimonial";
import { useTranslations } from "next-intl";

export default function TestimonialsTable({
  dataRows,
  deleteTestimonials,
  updateTestimonials,
}: {
  dataRows: any[];
  deleteTestimonials: any;
  updateTestimonials: any;
  }) {
  const t=useTranslations('testimonialsPage')
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusFilterChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // In your TaskTable component, add a state to store the selected task data.
  const [selectedTestimonials, setSelectedTestimonials] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (testimonials: any) => {
    setSelectedTestimonials(testimonials);
    handleClickOpen();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    // const filteredTestimonial = dataRows.filter(
    //   (testimonials) =>
    //     !selectedStatus || testimonials.isFlag === selectedStatus
    // );
    const filteredTestimonial = dataRows.filter((testimonial) => {
      if (selectedStatus === "") {
        return true; // No filtering applied
      }
    
      return testimonial.isFlag === (selectedStatus === "true");
    })
    if (filteredTestimonial.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredTestimonial
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((testimonial: any, index: number) => {
        return (
          <TableRow key={testimonial.testimonialId}>
            <TableCell
              sx={{
                ...cellStyle,
              }}
            >
              {testimonial.senderName}
            </TableCell>
            <TableCell
              sx={{
                ...cellStyle,
              }}
            >
              {testimonial.testimonialContent}
            </TableCell>

            <TableCell align="center" sx={{ ...cellStyle, fontSize: "10px" }}>
              <Paper
                elevation={0}
                sx={{
                  padding: "4px 8px",
                  width: "100px",
                  color: "white",
                  fontSize:"12PX",
                  backgroundColor:
                    testimonial.isFlag === true
                      ? "green"
                      : testimonial.isFlag === false
                      ? "red"
                      : "inherit",
                }}
              >
                {testimonial.isFlag == true ? t('yes'): t('no')}
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
                    onClick={() =>
                      deleteAlert(deleteTestimonials(testimonial.testimonialId))
                    }
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
                    onClick={() => handleEditClick(testimonial)}
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
              <TableCell sx={cellStyle}>{t('senderName')}</TableCell>
              <TableCell sx={cellStyle}>{t('TestimonialContent')}</TableCell>

              <TableCell align="center" sx={cellStyle}>
               {t('status')}
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">   {t('All')}</option>
                  <option value="true">   {t('ready')}</option>
                  <option value="false">   {t('notReady')}</option>
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
        <EditTestimonials
          handleClose={handleClose}
          selectedTestimonials={selectedTestimonials}
          onUpdate={updateTestimonials}
        />
      </StyledDialogTitle>
    </Card>
  );
}
