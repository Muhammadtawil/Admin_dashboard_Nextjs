// "use server";
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import ClearIcon from "@mui/icons-material/Clear";
// import AddIcon from "@mui/icons-material/Add";
// import CreateTask from "@/server/tasks/tasks";

import CreateTask, { DeleteTask, getTasks } from "@/server/tasks/tasks";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_task_form";
import TaskTable from "./task_table";

// export default async function TdoDoForm() {
//   async function onCreate(formData: FormData) {
//     "use server";
//     const res = await CreateTask(formData);
//   }

//   const CustomTextField = ({ name, label, type = "text" }: any) => (
//     <Grid item xs={12} md={12} lg={6}>
//       <Typography
//         component="h5"
//         sx={{
//           fontWeight: "500",
//           fontSize: "14px",
//           mb: "12px",
//         }}
//       >
//         {label}
//       </Typography>
//       <TextField
//         autoComplete={name}
//         name={name}
//         required
//         fullWidth
//         id={name}
//         type={type}
//         label={label}
//         autoFocus
//         InputProps={{
//           style: { borderRadius: 8 },
//         }}
//         className="for-dark-input"
//       />
//     </Grid>
//   );

//   const CustomSelect = ({
//     name,
//     label,
//     values,
//     selectedValue,
//     onChange,
//   }: any) => (
//     <Grid item xs={12} md={12} lg={6}>
//       <Typography
//         component="h5"
//         sx={{
//           fontWeight: "500",
//           fontSize: "14px",
//           mb: "12px",
//         }}
//       >
//         {label}
//       </Typography>
//       <Select
//         fullWidth
//         value={selectedValue}
//         onChange={onChange}
//         displayEmpty
//         inputProps={{
//           name,
//           id: name,
//           style: { borderRadius: 8 },
//         }}
//       >
//         <MenuItem value="" disabled>
//           {`Select ${label}`}
//         </MenuItem>
//         {values.map((value: any, index: any) => (
//           <MenuItem key={index} value={value}>
//             {value}
//           </MenuItem>
//         ))}
//       </Select>
//     </Grid>
//   );
//   return (
//     <Box component="form" noValidate action={onCreate}>
//       <Box
//         sx={{
//           background: "#fff",
//           padding: "20px 20px",
//           borderRadius: "8px",
//         }}
//         className="dark-BG-101010"
//       >
//         <Grid container alignItems="center" spacing={2}>
//           <CustomTextField name="taskTitle" label="Task" />
//           <CustomTextField name="startDate" label="Start Date" type="date" />
//           <CustomTextField name="endDate" label="End Date" type="date" />
//           {/* <CustomSelect
//             name="status"
//             label="Status"
//             // values={statusValues}
//             // selectedValue={selectedStatus}
//             // onChange={(e: any) => setSelectedStatus(e.target.value)}
//           />
//           <CustomSelect
//             name="priority"
//             label="Priority"
//             // values={priorityValues}
//             // selectedValue={selectedPriority}
//             // onChange={(e: any) => setSelectedPriority(e.target.value)}
//           /> */}
//           <Grid item xs={12} textAlign="end">
//             <Button
//               variant="contained"
//               color="secondary"
//               sx={{
//                 mt: 1,
//                 textTransform: "capitalize",
//                 borderRadius: "8px",
//                 fontWeight: "500",
//                 fontSize: "13px",
//                 padding: "12px 20px",
//                 color: "#fff !important",
//               }}
//               //   onClick={handleClose}
//               className="mr-15px"
//             >
//               <ClearIcon
//                 sx={{
//                   position: "relative",
//                   top: "-1px",
//                 }}
//                 className="mr-5px"
//               />{" "}
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 mt: 1,
//                 textTransform: "capitalize",
//                 borderRadius: "8px",
//                 fontWeight: "500",
//                 fontSize: "13px",
//                 padding: "12px 20px",
//                 color: "#fff !important",
//               }}
//             >
//               <AddIcon
//                 sx={{
//                   position: "relative",
//                   top: "-1px",
//                 }}
//                 className="mr-5px"
//               />{" "}
//               Add Task
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default async function TaskForm({
//   editingTask,
//   handleEditTask,
// }: {
//   editingTask: any;
//   handleEditTask: any;
// }) {
//   const tasks = await getTasks();
//   return (
//     <>

//     </>
//   );
// }
