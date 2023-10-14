import CreateTask, {
  AssignTask,
  DeleteAssignedTask,
  DeleteTask,
  UpdateAssignedTask,
  UpdateTask,
  getAssignedTasks,
  getAssignedToTasks,
  getTasks,
} from "@/server/tasks/tasks";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_task_form";
import { GetUser, GetUsers } from "@/server/users/users";
import { Typography } from "@mui/material";
import TaskTable from "./task_table";

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
  const users = await GetUsers();
  const user = await GetUser();
  const assignedTasks = await getAssignedTasks();
  const assignedToTasks = await getAssignedToTasks();
  const tasks = await getTasks(assignedTasks);
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
        userRole={user.userRole}
        isToMe={false}
      />
      <Typography
        component="h2"
        sx={{
          fontSize: 25,
          fontWeight: 500,
          padding: 2,
        }}
      >
        Assigned Tasks
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontSize: 20,
          fontWeight: 500,
          padding: 2,
        }}
      >
        Assigned Tasks To Me
      </Typography>

      <TaskTable
        dataRows={assignedToTasks}
        deleteTask={DeleteAssignedTasks}
        updateTask={onUpdateAssigned}
        getusers={users}
        onSelectMember={SelectMember}
        isAssigned={true}
        userRole={user.userRole}
        isToMe={true}
      />

      {user.userRole === "ADMIN" ? (
        <>
          <Typography
            component="h2"
            sx={{
              fontSize: 20,
              fontWeight: 500,
              padding: 2,
            }}
          >
            Assigned Tasks By Me
          </Typography>

          <TaskTable
            dataRows={assignedTasks}
            deleteTask={DeleteAssignedTasks}
            updateTask={onUpdateAssigned}
            getusers={users}
            onSelectMember={SelectMember}
            isAssigned={true}
            userRole={user.userRole}
            isToMe={false}
          />
        </>
      ) : null}
    </>
  );
};

export default ToDoLists;
