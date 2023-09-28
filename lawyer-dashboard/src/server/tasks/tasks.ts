import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getTasks() {
  const token = process.env.TOKEN;
  const tasks_url = process.env.TASKS_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    next: {
      revalidate: 60,
      revalidateTag: ["tasks"],
    },
  };

  try {
    const response = await fetch(`${tasks_url}?=${Date.now()}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create Task

export default async function CreateTask(data: FormData) {
  // Extract client data from the FormData object
  const taskTitle = data.get("taskTitle");
  const taskPriority = data.get("taskPriority");
  const taskStatus = data.get("taskStatus");
  const taskDeadline = data.get("taskDeadline");

  const taskData = {
    taskTitle: taskTitle,
    taskPriority: taskPriority,
    taskStatus: taskStatus,
    taskDeadline: taskDeadline,
  };

  const jsonData = JSON.stringify(taskData);

  // Define the URL for adding a client (replace with the correct endpoint)
  const tasksUrl = process.env.TASKS_URL;

  const token = process.env.TOKEN;
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${tasksUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("task added successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    redirect("/tasks");
  } catch (error) {
    console.error("Error adding task:", error);
    // Handle the error here
  }
}
// delete Task

export async function DeleteTask(taskId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `https://lawfirm.cyclic.cloud/tasks/${taskId}`;

  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjk1NjY2ODc5LCJleHAiOjE2OTY4NzY0Nzl9.Ln92hXmQXQ78Tj_pf30H4WGnu5LK_uJkC8hJQ_Xy9Nw",
    },
  };

  try {
    const response = await fetch(deleteUrl, requestOptions);
    console.log(deleteUrl);
    await getTasks();
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    console.log("Task deleted successfully");

    // Optionally, you can revalidate tags or perform a redirect here
    revalidatePath("/tasks", "page");
    // revalidateTag("tasks");
    //      redirect("/");
  } catch (error) {
    console.error("Error Deleting task:", error);
    // Handle the error here
  }
}
