import CreateTask, { getTasks } from "@/server/tasks/tasks";
import AddTaskForm from "./add_task_form";
import TaskTable from "./task_table";
import { revalidateTag } from "next/cache";
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

const ToDoLists = async () => {
  async function onCreate(formData: FormData) {
    "use server";
    const res = await CreateTask(formData);
    revalidateTag("tasks"); // Update cached posts
    redirect("/tasks");
  }

  const tasks = await getTasks();
  return (
    <>
      <AddTaskForm onCreate={onCreate} />
      <TaskTable dataRows={tasks} />
    </>
  );
};

export default ToDoLists;
