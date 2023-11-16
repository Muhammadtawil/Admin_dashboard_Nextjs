import CreateTask, {
  AssignTask,
  DeleteAssignedTask,
  DeleteTask,
  UpdateAssignedTask,
  UpdateTask,
  getAssignedTasks,
  getAssignedToTasks,
  getTasks,
} from "../../../server/tasks/tasks";
import AddTaskForm from "./add_task_form";


import TaskTable from "./task_table";
import { GetUser, GetUsers } from "../../../server/users/users";
import { revalidatePath } from "next/cache";


const loadUserData = async () => {
  const [users, user, assignedTasks, assignedToTasks] = await Promise.all([
    GetUsers(),
    GetUser(),
    getAssignedTasks(),
    getAssignedToTasks(),
  ]);

  const tasks = await getTasks(assignedTasks);

  return { users, user, assignedTasks, assignedToTasks, tasks };
};
async function Delete(taskId: string) {
  "use server";
  try {
    await DeleteTask(taskId);
    revalidatePath('tasks','page')
  } catch (error) {}
}

async function DeleteAssignedTasks(assigntaskId: string) {
  "use server";
  try {
    await DeleteAssignedTask(assigntaskId);
    revalidatePath('tasks','page')
  } catch (error) {
    console.log(error);
  }
}
async function onCreate(formData: FormData) {
  "use server";
  revalidatePath('tasks','page')
    await CreateTask(formData);
 
}

async function onUpdate(formData: FormData, taskId: string) {
  "use server";
  try {
    await UpdateTask(formData, taskId);
  revalidatePath('tasks','page')

  } catch (error) {}
}

async function onUpdateAssigned(formData: FormData, taskId: string) {
  "use server";
  try {
    await UpdateAssignedTask(formData, taskId);
  revalidatePath('tasks','page')

  } catch (error) {}
}

async function SelectMember(formData: FormData, taskId: string) {
  "use server";
  try {
    await AssignTask(formData, taskId);
  revalidatePath('tasks','page')

  } catch (error) {}
}

const ToDoLists = async () => {
  const { users, user, assignedTasks, assignedToTasks, tasks } =
    await loadUserData();

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
        tableTitle="pageTitle"
      />
  

   
      <TaskTable
        dataRows={assignedToTasks}
        deleteTask={DeleteAssignedTasks}
        updateTask={onUpdateAssigned}
        getusers={users}
        onSelectMember={SelectMember}
        isAssigned={true}
        userRole={user.userRole}
        isToMe={true}
        tableTitle="assignedToMeTitile"
      />

      {user.userRole === "ADMIN" ? (
        <>
      

          <TaskTable
            dataRows={assignedTasks}
            deleteTask={DeleteAssignedTasks}
            updateTask={onUpdateAssigned}
            getusers={users}
            onSelectMember={SelectMember}
            isAssigned={true}
            userRole={user.userRole}
            isToMe={false}
            tableTitle="assignedByTitle"
          />
        </>
      ) : null}
    </>
  );
};

export default ToDoLists;
