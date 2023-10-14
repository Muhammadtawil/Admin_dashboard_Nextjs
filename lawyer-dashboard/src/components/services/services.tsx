import CreateTask, {
  AssignTask,
  DeleteAssignedTask,
  UpdateAssignedTask,
} from "@/server/tasks/tasks";
import ServicesTable from "./service_Table";
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
      <ServicesTable
        dataRows={services}
        deleteTask={Delete}
        updateTask={onUpdate}
        servicesList={services}
      />
    </>
  );
};

export default ServicesComponent;
