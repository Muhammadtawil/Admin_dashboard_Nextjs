import ServicesTable from "./service_Table";
import { revalidatePath } from "next/cache";
import AddTaskForm from "./add_service_form";

import AddService, {
  DeleteService,
  GetServices,
  UpdateService,
} from "../../../server/services/services";

async function Delete(serviceId: string) {
  "use server";
  try {
    await DeleteService(serviceId);
    revalidatePath("/services", "page");
  } catch (error) {}
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
      <AddTaskForm onCreate={onCreate} />
      <ServicesTable
        dataRows={services}
        deleteTask={Delete}
        updateTask={onUpdate}
      />
    </>
  );
};

export default ServicesComponent;
