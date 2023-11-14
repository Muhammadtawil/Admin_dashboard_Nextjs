import ClientTable from "./client_table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_client_form";
import AddClient, {
  DeleteClient,
  UpdateClient,
  getClients,
} from "../../../server/clients/clients";
import { GetServices } from "../../../server/services/services";





async function Delete(taskId: string) {
  "use server";
  try {
    await DeleteClient(taskId);
    revalidatePath("/clients", "page");
  } catch (error) {}
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
    revalidatePath("/[lang]/clients", "page");
  } catch (error) {}
}

const ClientsComponentList = async () => {
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
    </>
  );
};

export default ClientsComponentList;
