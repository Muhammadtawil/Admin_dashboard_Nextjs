import CreateTask, { DeleteTask, getTasks } from "@/server/tasks/tasks";

import TaskTable from "./task_table";
import TaskForm from "./form";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// function BootstrapDialogTitle(props: any) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };
async function Delete(taskId: string) {
  "use server";
  try {
    const res = await DeleteTask(taskId);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}
const ToDoLists = async () => {
  const tasks = await getTasks();
  return (
    <>
      <TaskForm />
      <TaskTable dataRows={tasks} deleteTask={Delete} />
    </>
  );
};

export default ToDoLists;
