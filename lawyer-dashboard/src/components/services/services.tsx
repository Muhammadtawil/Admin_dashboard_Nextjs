import CreateTask, {
  AssignTask,
  DeleteAssignedTask,
  UpdateAssignedTask,
} from "@/server/tasks/tasks";
import ClientTable from "./service_Table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_service_form";

import AddService, {
  DeleteService,
  GetServices,
  UpdateService,
} from "@/server/services/services";

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
async function Delete(serviceId: string) {
  "use server";
  try {
    await DeleteService(serviceId);
    revalidatePath("/services", "page");
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
    await AddService(formData);
    revalidatePath("/services", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, clientId: string) {
  "use server";
  try {
    await UpdateService(formData, clientId);
    revalidatePath("/services", "page");
  } catch (error) {}
}

const ServicesComponent = async () => {
  const services = await GetServices();
  return (
    <>
      <AddTaskForm onCreate={onCreate} servicesList={services} />
      <ClientTable
        dataRows={services}
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

export default ServicesComponent;
