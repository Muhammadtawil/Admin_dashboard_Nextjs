



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const services_url = process.env.SERVICES_URL;

export async function GetServices() {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
   
    },
    next: {
      // revalidate: 10,
      tags: ["services"],
    },
 
  };

  try {
    const response = await fetch(
      `${services_url}`,
      requestOptions
    );

    const services = await response.json();
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return services;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create Service

export default async function AddService(data: FormData) {
  // Extract client data from the FormData object
  const serviceName = data.get("serviceName");
  const serviceDescription = data.get("serviceDescription");
  const serviceStatus = data.get("serviceStatus");
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const serviceData = {
    serviceTitle: serviceName,
    serviceDescription: serviceDescription,
    serviceStatus: serviceStatus,
    isFlag: isFlag == "Yes" ? true : false,
  };

  const jsonData = JSON.stringify(serviceData);

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
    const response = await fetch(`${services_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Service added successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error adding Service:", error);
    // Handle the error here
  }
}
// delete Service

export async function DeleteService(serviceId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${services_url}/${serviceId}`;
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

    console.log("Service deleted successfully");

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidatePath("/tasks", "page");
    // revalidateTag("tasks");
    //      redirect("/");
  } catch (error) {
    console.error("Error Deleting service:", error);
    // Handle the error here
  }
}

// update Service

export async function UpdateService(data: FormData, serviceId: string) {
  const serviceName = data.get("serviceName");
  const serviceDescription = data.get("serviceDescription");
  const serviceStatus = data.get("serviceStatus");
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const serviceData = {
    serviceTitle: serviceName,
    serviceDescription: serviceDescription,
    serviceStatus: serviceStatus,
    isFlag: isFlag == "Yes" ? true : false,
  };

  const jsonData = JSON.stringify(serviceData);

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
    const response = await fetch(
      `${services_url}/${serviceId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("service Updated successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error update task:", error);
    // Handle the error here
  }
}
