



import { authOptions } from "@/app/utils/authoptions";
import next from "next";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";

const assignTasksUrl = process.env.ASSIGN_TASK_URL;
const tasks_url = process.env.TASKS_URL;
const update_assigned = process.env.UPDATE_ASSIGN_URL;

// const userId = process.env.USERID;
const getTasksUrl = process.env.Get_TASKS_URL;
// const localuserId = localStorage.getItem("user_id");
export async function getTasks(assignedTasks: any) {
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "GET",
    
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
     
    },
    

  };

  try {
    const response = await fetch(
      `${getTasksUrl}/${session?.userId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const tasks = await response.json();

    // Filter out tasks that are already assigned
    const unassignedTasks = tasks.filter((task: any) => {
      // Check if the task ID is not in the list of assigned tasks
      return !assignedTasks.some(
        (assignedTask: any) => assignedTask.taskId === task.taskId
      );
    });

    revalidatePath("/tasks", "page");

    return unassignedTasks;
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
  const session = await getServerSession(authOptions);

  const taskData = {
    taskTitle: taskTitle,
    taskPriority: taskPriority,
    taskStatus: taskStatus,
    taskDeadline: taskDeadline,
  };

  const jsonData = JSON.stringify(taskData);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "POST",
    next: {
  revalidate:60,
},
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
 
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${tasks_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("task added successfully:", responseData);

  } catch (error) {
    console.error("Error adding task:", error);
    // Handle the error here
  }
}
// delete Task

export async function DeleteTask(taskId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${tasks_url}/${taskId}`;
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

export async function UpdateTask(data: FormData, taskId: string) {
  // Extract client data from the FormData object
  const taskTitle = data.get("taskTitle");
  const taskPriority = data.get("taskPriority");
  const taskStatus = data.get("taskStatus");
  const session = await getServerSession(authOptions);

  // const taskDeadline = data.get("taskDeadline");

  const taskData = {
    taskTitle: taskTitle,
    taskPriority: taskPriority,
    taskStatus: taskStatus,
    // taskDeadline: taskDeadline,
  };

  const jsonData = JSON.stringify(taskData);

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
    const response = await fetch(`${tasks_url}/${taskId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("task Updated successfully:", responseData);


  } catch (error) {
    console.error("Error update task:", error);
 
  }
}

// Get assigned tasks

export async function getAssignedTasks() {
  const tasks_url = process.env.ASSIGNED_TASKS_URL;
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },

    next: {
      revalidate: 60,
      // revalidateTag: ["tasks"],
    },
  };

  try {
    const response = await fetch(
      `${update_assigned}/${session?.userId}?=${Date.now()}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    revalidatePath("/tasks", "page");

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getAssignedToTasks() {
  const assignedTo_tasks_url = process.env.ASSIGN_TO_URL;
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },

    next: {
      revalidate: 10,
      // revalidateTag: ["tasks"],
    },
  };

  try {
    const response = await fetch(
      `${assignedTo_tasks_url}/${session?.userId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    revalidatePath("/tasks", "page");

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Assign Task

export async function AssignTask(data: FormData, taskId: any) {
  // Extract client data from the FormData object

  const assignedTo = data.get("usersId");
  const session = await getServerSession(authOptions);

  const taskData = {
    taskId: taskId,
    assignedTo: [assignedTo].join(",").split(","),
  };

  const jsonData = JSON.stringify(taskData);

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
    const response = await fetch(`${assignTasksUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("task Assigned successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error assigning task:", error);
    // Handle the error here
  }
}

export async function DeleteAssignedTask(taskId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteAssignUrl = `https://lawfirm.cyclic.app/tasks/assign/${taskId}`;
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };

  try {
    const response = await fetch(deleteAssignUrl, requestOptions);
    console.log(deleteAssignUrl);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    console.log("Task deleted successfully");
  } catch (error) {
    console.error("Error Deleting task:", error);
  }
}

export async function UpdateAssignedTask(data: FormData, taskId: string) {
  // Extract client data from the FormData object
  const taskTitle = data.get("taskTitle");
  const taskPriority = data.get("taskPriority");
  const taskStatus = data.get("taskStatus");
  // const taskDeadline = data.get("taskDeadline");
  const session = await getServerSession(authOptions);

  const taskData = {
    taskTitle: taskTitle,
    taskPriority: taskPriority,
    taskStatus: taskStatus,
    // taskDeadline: taskDeadline,
  };

  const jsonData = JSON.stringify(taskData);

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
      `${update_assigned}/${taskId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("assigned task Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update assigned task:", error);
    // Handle the error here
  }
}
