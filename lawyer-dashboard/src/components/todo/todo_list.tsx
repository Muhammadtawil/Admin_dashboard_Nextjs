import CreateTask, {
  DeleteTask,
  UpdateTask,
  getTasks,
} from "@/server/tasks/tasks";
import TaskTable from "./task_table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_task_form";

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
    await DeleteTask(taskId);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}

async function onCreate(formData: FormData) {
  "use server";
  try {
    await CreateTask(formData);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, taskId: string) {
  "use server";
  try {
    await UpdateTask(formData, taskId);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}

const ToDoLists = async () => {
  const tasks = await getTasks();
  return (
    <>
      <AddTaskForm onCreate={onCreate} />;
      <TaskTable dataRows={tasks} deleteTask={Delete} updateTask={onUpdate} />
    </>
  );
};

export default ToDoLists;
