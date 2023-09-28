// function createData(
//   name: string,
//   url: string,
//   startDate: string,
//   endDate: string,
//   status: string,
//   badgeClass: string,
//   completion: string,
//   priority: string
// ) {
//   return {
//     name,
//     url,
//     startDate,
//     endDate,
//     status,
//     badgeClass,
//     completion,
//     priority,
//   };
// }

// const dataRows = [
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Pending",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
//   createData(
//     "Public Beta Release",
//     "",
//     "1 Jan 2022",
//     "1 Apr 2022",
//     "Completed",
//     "successBadge",
//     "10/10",
//     "High"
//   ),
// ].sort((a, b) => (a.name < b.name ? -1 : 1));

// export default dataRows;

// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Box from "@mui/material/Box";
// import { getTasks } from "@/server/tasks/tasks";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// // Define a reusable cell style object
// const cellStyle = {
//   borderBottom: "1px solid #F7FAFF",
//   fontSize: "13.5px",
// };

// const RenderTableRows = async (page: number, rowsPerPage: number) => {
//   const tasks = await getTasks();
//   return tasks
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((task: any) => (
//       <TableRow key={task.name}>
//         <TableCell sx={{ ...cellStyle, fontWeight: "500", color: "#260944" }}>
//           <Checkbox {...label} size="small" />
//           {task.taskTitle}
//         </TableCell>
//         <TableCell sx={cellStyle}>
//           <Avatar alt="User" src={task.url} sx={{ width: 35, height: 35 }} />
//         </TableCell>
//         <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
//           {new Date(task.createdAt).toLocaleDateString("en-US", {
//             day: "numeric",
//             month: "2-digit",
//             year: "2-digit",
//             hour: "numeric",
//             minute: "numeric",
//           })}
//         </TableCell>
//         <TableCell sx={{ ...cellStyle, fontSize: "13px" }}>
//           {new Date(task.taskDeadline).toLocaleDateString("en-US", {
//             day: "numeric",
//             month: "2-digit",
//             year: "2-digit",
//             hour: "numeric",
//             minute: "numeric",
//           })}
//         </TableCell>
//         <TableCell align="center" sx={{ ...cellStyle, fontSize: "13px" }}>
//           <span className={task.badgeClass}>{task.taskStatus}</span>
//         </TableCell>
//         {/* <TableCell sx={{ ...cellStyle, fontSize: "13px" }} align="center">
//           {task.completion}
//         </TableCell> */}
//         <TableCell sx={{ ...cellStyle, fontSize: "13px" }} align="center">
//           {task.taskPriority}
//         </TableCell>
//         <TableCell align="right" sx={cellStyle}>
//           <Box sx={{ display: "inline-block" }}>
//             <Tooltip title="Remove" placement="top">
//               <IconButton
//                 aria-label="remove"
//                 size="small"
//                 color="error"
//                 className="error"
//               >
//                 <DeleteIcon fontSize="inherit" />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="Rename" placement="top">
//               <IconButton
//                 aria-label="rename"
//                 size="small"
//                 color="primary"
//                 className="primary"
//               >
//                 <DriveFileRenameOutlineIcon fontSize="inherit" />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </TableCell>
//       </TableRow>
//     ));
// };

// export default RenderTableRows;
