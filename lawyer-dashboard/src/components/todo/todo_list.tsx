import CreateTask, {
  AssignTask,
  DeleteAssignedTask,
  DeleteTask,
  UpdateAssignedTask,
  UpdateTask,
  getAssignedTasks,
  getTasks,
} from "@/server/tasks/tasks";
import TaskTable from "./task_table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_task_form";
import { GetUsers } from "@/server/users/users";
import { Typography } from "@mui/material";
// import EnhancedTable from "./tableHead/table_head";
import DataTable from "./tableHead/head2";
import TestTable from "./tableHead/test";

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

async function DeleteAssignedTasks(assigntaskId: string) {
  "use server";
  try {
    await DeleteAssignedTask(assigntaskId);
    revalidatePath("/tasks", "page");
  } catch (error) {
    console.log(error);
  }
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

async function onUpdateAssigned(formData: FormData, taskId: string) {
  "use server";
  try {
    await UpdateAssignedTask(formData, taskId);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}

async function SelectMember(formData: FormData, taskId: string) {
  "use server";
  try {
    await AssignTask(formData, taskId);
    revalidatePath("/tasks", "page");
  } catch (error) {}
}

const ToDoLists = async () => {
  const assignedTasks = await getAssignedTasks();
  const tasks = await getTasks(assignedTasks);
  const users = await GetUsers();

  return (
    <>
      <AddTaskForm onCreate={onCreate} />
      <TaskTable
        dataRows={tasks}
        deleteTask={Delete}
        updateTask={onUpdate}
        getusers={users}
        onSelectMember={SelectMember}
        isAssigned={false}
      />
      <Typography
        component="h2"
        sx={{
          fontSize: 20,
          fontWeight: 500,
          padding: 2,
        }}
      >
        Assigned Tasks
      </Typography>
      <TaskTable
        dataRows={assignedTasks}
        deleteTask={DeleteAssignedTasks}
        updateTask={onUpdateAssigned}
        getusers={users}
        onSelectMember={SelectMember}
        isAssigned={true}
      />
      {/* <EnhancedTable /> */}
      {/* <TestTable /> */}
    </>
  );
};

export default ToDoLists;
