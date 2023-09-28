"use client";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import dataRows from "./todo/data";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";


// export default function TaskTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(8);

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRows.length) : 0;

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<{ value: unknown }>
//   ) => {
//     const value = event.target.value as number;
//     setRowsPerPage(value);
//     setPage(0);
//   };

//   return (
//     <div>
//       <table style={{ width: "100%", padding: "16px", margin: "16px 0" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Assigned</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Status</th>
//             <th>Completion</th>
//             <th>Priority</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//             <tr key={index}>
//               <td>{row.name}</td>
//               <td>
//                 <img src='/images/user1.png' alt="User" style={{ width: "35px", height: "35px" }} />
//               </td>
//               <td>{row.startDate}</td>
//               <td>{row.endDate}</td>
//               <td className={row.badgeClass}>{row.status}</td>
//               <td>{row.completion}</td>
//               <td>{row.priority}</td>
//               <td>
//                 <button aria-label="remove" className="error">
//                   <DeleteIcon />
//                 </button>
//                 <button aria-label="rename" className="primary">
//                   <EditIcon />
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {emptyRows > 0 && (
//             <tr style={{ height: 53 * emptyRows }}>
//               <td colSpan={8} />
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div>
//         {/* Pagination controls */}
//         <button
//           onClick={() => handleChangePage(null, 0)}
//           disabled={page === 0}
//           aria-label="first page"
//         >
//           <FirstPageIcon />
//         </button>
//         <button
//           onClick={() => handleChangePage(null, page - 1)}
//           disabled={page === 0}
//           aria-label="previous page"
//         >
//           <KeyboardArrowLeftIcon />
//         </button>
//         <button
//           onClick={() => handleChangePage(null, page + 1)}
//           disabled={page >= Math.ceil(dataRows.length / rowsPerPage) - 1}
//           aria-label="next page"
//         >
//           <KeyboardArrowRightIcon />
//         </button>
//         <button
//           onClick={() =>
//             handleChangePage(
//               null,
//               Math.max(0, Math.ceil(dataRows.length / rowsPerPage) - 1)
//             )
//           }
//           disabled={page >= Math.ceil(dataRows.length / rowsPerPage) - 1}
//           aria-label="last page"
//         >
//           <LastPageIcon />
//         </button>
//         <span>Page {page + 1}</span>
//         <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
//           {[5, 10, 25, -1].map((option) => (
//             <option key={option} value={option}>
//               {option === -1 ? "All" : option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }
