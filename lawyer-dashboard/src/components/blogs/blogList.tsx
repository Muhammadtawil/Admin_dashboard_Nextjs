// import page from "@/app/page";
// import {
//   Card,
//   Box,
//   Typography,
//   TableContainer,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Checkbox,
//   Tooltip,
//   IconButton,
//   TableFooter,
//   TablePagination,
// } from "@mui/material";

// export default function blogList() {
//   return (
//     <Card
//       sx={{
//         boxShadow: "none",
//         borderRadius: "10px",
//         p: "25px 20px 15px",
//         mb: "15px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderBottom: "1px solid #EEF0F7",
//           paddingBottom: "10px",
//           mb: "20px",
//         }}
//         className="for-dark-bottom-border"
//       >
//         <Typography
//           component="h3"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//           }}
//         >
//           Blogs List
//         </Typography>
//       </Box>

//       <TableContainer
//         component={Paper}
//         sx={{
//           boxShadow: "none",
//         }}
//       >
//         <Table
//           sx={{ minWidth: 900 }}
//           aria-label="custom pagination table"
//           className="dark-table"
//         >
//           <TableHead sx={{ background: "#F7FAFF" }}>
//             <TableRow>
//               <TableCell
//                 sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//               >
//                 Blog title
//               </TableCell>

//               <TableCell
//                 align="center"
//                 sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//               >
//                 Desc
//               </TableCell>

//               <TableCell
//                 align="center"
//                 sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//               >
//                 Author
//               </TableCell>

//               <TableCell
//                 align="center"
//                 sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//               >
//                 Status
//               </TableCell>

//               <TableCell
//                 align="right"
//                 sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
//               >
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {(rowsPerPage > 0
//               ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               : rows
//             ).map((row) => (
//               <TableRow key={row.title}>
//                 <TableCell
//                   style={{
//                     borderBottom: "1px solid #F7FAFF",
//                     paddingTop: "13px",
//                     paddingBottom: "13px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Checkbox {...label} size="small" />
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                     className="ml-10px"
//                   >
//                     <img
//                       src={row.image}
//                       alt="User"
//                       width={40}
//                       height={40}
//                       className="borRadius100"
//                     />
//                     <Box>
//                       <Typography
//                         component="h4"
//                         sx={{
//                           fontWeight: "500",
//                           fontSize: "13.5px",
//                         }}
//                         className="ml-10px"
//                       >
//                         {row.title}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "12px",
//                           color: "#A9A9C8",
//                         }}
//                         className="ml-10px"
//                       ></Typography>
//                     </Box>
//                   </Box>
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   style={{
//                     borderBottom: "1px solid #F7FAFF",
//                     fontSize: "13px",
//                     paddingTop: "13px",
//                     paddingBottom: "13px",
//                   }}
//                 >
//                   {row.Desc}
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   style={{
//                     borderBottom: "1px solid #F7FAFF",
//                     fontSize: "13px",
//                     paddingTop: "13px",
//                     paddingBottom: "13px",
//                   }}
//                 >
//                   {row.Auther}
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontWeight: 500,
//                     borderBottom: "1px solid #F7FAFF",
//                     fontSize: "12px",
//                     padding: "8px 10px",
//                   }}
//                 >
//                   <span className={row.badgeClass}>{row.status}</span>
//                 </TableCell>

//                 <TableCell
//                   align="right"
//                   sx={{ borderBottom: "1px solid #F7FAFF" }}
//                 >
//                   <Box
//                     sx={{
//                       display: "inline-block",
//                     }}
//                   >
//                     <Tooltip title="Remove" placement="top">
//                       <IconButton
//                         aria-label="remove"
//                         size="small"
//                         color="error"
//                         className="danger"
//                       >
//                         <DeleteIcon fontSize="inherit" />
//                       </IconButton>
//                     </Tooltip>

//                     <Tooltip title="Rename" placement="top">
//                       <IconButton
//                         aria-label="rename"
//                         size="small"
//                         color="primary"
//                         className="primary"
//                       >
//                         <DriveFileRenameOutlineIcon fontSize="inherit" />
//                       </IconButton>
//                     </Tooltip>
//                   </Box>
//                 </TableCell>
//               </TableRow>
//             ))}

//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell
//                   colSpan={5}
//                   style={{ borderBottom: "1px solid #F7FAFF" }}
//                 />
//               </TableRow>
//             )}
//           </TableBody>

//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//                 colSpan={8}
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: {
//                     "aria-label": "rows per page",
//                   },
//                   native: true,
//                 }}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//                 ActionsComponent={UsersList}
//                 style={{ borderBottom: "none" }}
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//     </Card>
//   );
// }
