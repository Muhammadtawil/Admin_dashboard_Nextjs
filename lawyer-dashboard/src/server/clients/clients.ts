



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
import { revalidatePath, } from "next/cache";

const clientUrl = process.env.CLIENTS_URL;

// const userId = process.env.USERID;
const getTasksUrl = process.env.Get_TASKS_URL;
// const localuserId = localStorage.getItem("user_id");
export async function getClients() {
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",

    },
    next: {
      // revalidate: 10,
      tags: ["clients"],
    },
  };

  try {
    const response = await fetch(`${clientUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const clients = await response.json();

    revalidatePath("/clients", "page");

    return clients;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create Client

export default async function AddClient(data: FormData) {
  // Extract client data from the FormData object
  const clientName = data.get("clientName");
  const clientPhone = data.get("clientPhone");
  const clientEmail = data.get("clientEmail");
  const clientStatus = data.get("clientStatus");
  const clientService = data.get("clientService");
  const session = await getServerSession(authOptions);

  const clientData = {
    clientName: clientName,
    clientPhone: clientPhone,
    clientStatus: clientStatus,
    clientEmail: clientEmail,
    chosenServiceName: clientService,
  };

  const jsonData = JSON.stringify(clientData);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${clientUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("client added successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error adding client:", error);
    // Handle the error here
  }
}
// delete Task

export async function DeleteClient(clientId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${clientUrl}/${clientId}`;
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };

  try {
    const response = await fetch(deleteUrl, requestOptions);
    console.log(deleteUrl);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    console.log("Task deleted successfully");

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidatePath("/tasks", "page");
    // revalidateTag("tasks");
    //      redirect("/");
  } catch (error) {
    console.error("Error Deleting task:", error);
    // Handle the error here
  }
}

// update tasks

export async function UpdateClient(data: FormData, clientId: string) {
  const clientName = data.get("clientName");
  const clientPhone = data.get("clientPhone");
  const clientEmail = data.get("clientEmail");
  const clientStatus = data.get("clientStatus");
  const clientService = data.get("clientService");
  const session = await getServerSession(authOptions);

  const clientData = {
    clientName: clientName,
    clientPhone: clientPhone,
    clientStatus: clientStatus,
    clientEmail: clientEmail,
    chosenServiceName: clientService,
  };

  const jsonData = JSON.stringify(clientData);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${clientUrl}/${clientId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("client Updated successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error update task:", error);
    // Handle the error here
  }
}
