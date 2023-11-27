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
import EditNewsComponent from "./editNews";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import cellStyle from "../shared/cellStyle";
import ActionsComponent from "../shared/PaginationList";
import { useLocale, useTranslations } from "next-intl";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { usePathname } from "next/navigation";
import Image from 'next/image'

export default function NewsTable({
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
  const t=useTranslations('newsPage')
  const [selectedStatus, setSelectedStatus] = useState("");
  const path = usePathname();
  const arabic = path.includes('ar')
  const locale=useLocale()
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
  const [selectedNews, setSelectedNews] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (news: any) => {
    setSelectedNews(news);
    handleClickOpen();
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status

    const filteredNews = dataRows.filter((news) => {
      if (selectedStatus === "") {
        return true; // No filtering applied
      }
    
      return news.isFlag === (selectedStatus === "true");
    });
    
    if (filteredNews.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredNews
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((news: any, index: number) => {
        const limitedContent = news.newsContent.slice(0, 50); // Get the first 100 characters
        const limitedTitle = news.newsTitle.slice(0, 20);
        return (
          <TableRow key={news.newsId}>
            <TableCell
              style={{
                borderBottom: "1px solid #F7FAFF",
                paddingTop: "13px",
                paddingBottom: "13px",
                // display: "flex",
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
                  src={news.newsImageUrl}
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
                    {limitedTitle}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={cellStyle}>
         
         <IconButton onClick={()=>handleEditClick(news)}>
<VisibilityIcon/>
         </IconButton>
       </TableCell>
            <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
              {new Date(news.createdAt).toLocaleDateString(locale=='ar'?"ar-LB":"en-US", {
                day: "numeric",
                month: "2-digit",
                year: "2-digit",
                hour: "numeric",
              })}
            </TableCell>
            <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
              {news.newsLang=="arabic"?t('arabic'):t('english')}
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
                    news.isFlag === true
                      ? "green"
                      : news.isFlag === false
                      ? "red"
                      : "inherit",
                }}
              >
                  {news.isFlag == true ? t('yes'): t('no')}
              </Paper>
            </TableCell>

            <TableCell align="right" sx={cellStyle}>
              <Box sx={{ display: "inline-block" }}>
                <Tooltip title={t('delete')}  placement="top">
                  <IconButton
                    aria-label={t('delete')} 
                    size="small"
                    color="error"
                    className="error"
                    onClick={() => deleteAlert(deleteTask(news.newsId))}
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
                    onClick={() => handleEditClick(news)}
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
              <TableCell sx={cellStyle}>{t('newsTitle')}</TableCell>
              <TableCell sx={cellStyle}>{t('newsContent')}</TableCell>
              <TableCell sx={cellStyle}>{t('newsDate')}</TableCell>
              <TableCell sx={cellStyle}>{t('lang')}</TableCell>

              <TableCell align="center" sx={cellStyle}>
              {t('status')}
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  style={{ marginLeft: "8px" }}
                >
                  <option value="">{t('All')}</option>
                  <option value="true">{t('ready')}</option>
                  <option value="false">{t('notReady')}</option>
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
                rowsPerPageOptions={[5, 10, 25, { label: t("All"), value: -1 }]}
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
        <EditNewsComponent
          handleClose={handleClose}
          selectedNews={selectedNews}
          onUpdate={updateTask}
          UpdateImage={UpdateImage}
        />
      </StyledDialogTitle>
    </Card>
  );
}
