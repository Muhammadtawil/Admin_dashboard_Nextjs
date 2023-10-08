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
import ClientTable from "./client_table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_client_form";
import { GetUser, GetUsers } from "@/server/users/users";
import { Typography } from "@mui/material";
import AddClient, {
  DeleteClient,
  UpdateClient,
  getClients,
} from "@/server/clients/clients";
import { GetServices } from "@/server/services/services";
// import EnhancedTable from "./tableHead/table_head";

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
    await DeleteClient(taskId);
    revalidatePath("/clients", "page");
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
    await AddClient(formData);
    revalidatePath("/clients", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, clientId: string) {
  "use server";
  try {
    await UpdateClient(formData, clientId);
    revalidatePath("/clients", "page");
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

const ClientsComponentList = async () => {
  const users = await GetUsers();
  const user = await GetUser();
  const assignedTasks = await getAssignedTasks();
  const assignedToTasks = await getAssignedToTasks();
  const tasks = await getTasks(assignedTasks);
  const client = await getClients();
  const services = await GetServices();
  return (
    <>
      <AddTaskForm onCreate={onCreate} servicesList={services} />
      <ClientTable
        dataRows={client}
        deleteTask={Delete}
        updateTask={onUpdate}
        servicesList={services}
      />
      {/* <Typography
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

      <ClientTable
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

          <ClientTable
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
      ) : null} */}

      {/* <EnhancedTable /> */}
      {/* <TestTable /> */}
    </>
  );
};

export default ClientsComponentList;
