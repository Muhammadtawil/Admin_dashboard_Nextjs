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
import Image from 'next/image'
import EditBlogAddComponent from "./EditBlogForm";
import StyledDialogTitle from "../shared/StyledDialogTitle";
import cellStyle from "../shared/cellStyle";
import ActionsComponent from "../shared/PaginationList";
import { useTranslations } from "next-intl";
import DOMPurify from "dompurify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";



export default function BlogsTable({
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
  const t=useTranslations('BlogPage')
  const [selectedStatus, setSelectedStatus] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);


  const handleStatusFilterChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleClickOpen = () => {
    setOpen(true);
  };

  const [page, setPage] = useState(0);
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
  
  // In your TaskTable component, add a state to store the selected task data.
  const [selectedBlog, setSelectedClient] = useState(null);

  // Modify the Edit button click handler to set the selected task data.
  const handleEditClick = (blog: any) => {
    setSelectedClient(blog);
    handleClickOpen();
  };
  function createMarkup(html:any) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    // Filter tasks based on selected priority and status
    const filteredBlogs = dataRows.filter((blog) => {
      if (selectedStatus === "") {
        return true; // No filtering applied
      }
    
      return blog.isFlag === (selectedStatus === "true");
    });
    
    if (filteredBlogs.length === 0) {
      return <TableRow>{/* ... */}</TableRow>;
    }

    return filteredBlogs
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
                <Image
                  src={blog.blogImageUrl}
                  alt="User"
                  width={40}
                  height={40}
                  className="borRadius100"
                  // placeholder="blur"
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
              {blog.blogLang=='arabic'?t('arabic'):t('english')}
            </TableCell>
            <TableCell sx={cellStyle}>
         
              <IconButton onClick={()=>handleEditClick(blog)}>
  <VisibilityIcon/>
              </IconButton>
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
                    blog.isFlag === true
                      ? "green"
                      : blog.isFlag === false
                      ? "red"
                      : "inherit",
                }}
              >
                {blog.isFlag == true ? t('yes'): t('no')}
              </Paper>
            </TableCell>

            <TableCell align="right" sx={cellStyle}>
              <Box sx={{ display: "inline-block" }}>
                <Tooltip title={t('delete')}placement="top">
                  <IconButton
                    aria-label={t('delete')}
                    size="small"
                    color="error"
                    className="error"
                    // onClick={() => deleteAlert(deleteTask(blog.blogId))}

                    // }}
                
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
                          deleteTask(blog.blogId);
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
              <TableCell sx={cellStyle}>{t('blogTitle')}</TableCell>
              <TableCell sx={cellStyle}>{t('author')}</TableCell>
              <TableCell sx={cellStyle}>{t('lang')}</TableCell>
              <TableCell sx={cellStyle}>{t('blogContent')}</TableCell>

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
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={8}
                count={dataRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": t('rowPerPage') ,
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
        <EditBlogAddComponent
          handleClose={handleClose}
          selectedBlog={selectedBlog}
          onUpdate={updateTask}
          UpdateImage={UpdateImage}
        />
      </StyledDialogTitle>
    </Card>
  );
}
