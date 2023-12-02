



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const events_url = process.env.EVENTS_URL;
const public_event_url=process.env.PUBLIC_EVENTS_URL
const single_event_url=process.env.PUBLIC_Events_ID_URL
export async function GetEvents() {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
   
    },
    next: {
      // revalidate: 10,
      tags: ["events"],
    },
 
  };

  try {
    const response = await fetch(
      `${events_url}/users/${session?.userId}`,
      requestOptions
    );

    const Events = await response.json();
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return Events;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// // create Event

export default async function AddEvents(data: FormData) {
  // Extract client data from the FormData object
  const eventName = data.get("eventName");
  const eventStatus = data.get("eventStatus");
    // const eventStatus = 'private';
    const eventDate=data.get('eventDate')

  const session = await getServerSession(authOptions);

  const eventData = {
       eventTitle: eventName,
      eventStatus: eventStatus?eventStatus:"private",
      eventDate:eventDate,
    

  };

  const jsonData = JSON.stringify(eventData);

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
    const response = await fetch(`${events_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Event added successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error adding Event:", error);
    // Handle the error here
  }
}
// delete Event

export async function DeleteEvents(eventId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${events_url}/${eventId}`;
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

    console.log("Event deleted successfully");

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidatePath("/tasks", "page");
    // revalidateTag("tasks");
    //      redirect("/");
  } catch (error) {
    console.error("Error Deleting event:", error);
    // Handle the error here
  }
}

// update event

export async function UpdateEvent(data: FormData, eventId: string) {
    const eventName = data.get("eventName");
    const eventStatus = data.get("eventStatus");
    // const eventStatus = 'private';
    const eventDate=data.get('eventDate')

  const session = await getServerSession(authOptions);

  const eventData = {
       eventTitle: eventName,
       eventStatus: eventStatus?eventStatus:"private",
      eventDate:eventDate,
    

  };

  const jsonData = JSON.stringify(eventData);

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
      `${events_url}/${eventId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("event Updated successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error update task:", error);
    // Handle the error here
  }
}

// Public Events
export async function GetPublicEvents() {
    const session = await getServerSession(authOptions);
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
     
      },
      next: {
        // revalidate: 10,
        tags: ["events"],
      },
   
    };
  
    try {
      const response = await fetch(
        `${public_event_url}`,
        requestOptions
      );
  
      const Events = await response.json();
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      return Events;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
}
  
export async function UpdatePublicEvent(data: FormData, eventId: string) {
    const eventName = data.get("eventName");
    const eventStatus = data.get("eventStatus");
    // const eventStatus = 'private';
    const eventDate=data.get('eventDate')

  const session = await getServerSession(authOptions);

  const eventData = {
       eventTitle: eventName,
       eventStatus: eventStatus?eventStatus:"private",
      eventDate:eventDate,
    

  };

  const jsonData = JSON.stringify(eventData);

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
      `${events_url}/public/${eventId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("event Updated successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");
  } catch (error) {
    console.error("Error update task:", error);
    // Handle the error here
  }
}

export async function DeletePublicEvents(eventId: string) {
    // Define the URL for deleting a task (replace with the correct endpoint)
    const deleteUrl = `${events_url}/public/${eventId}`;
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
  
      console.log("Event deleted successfully");
  
      // Optionally, you can revalidate tags or perform a redirect here
      // revalidatePath("/tasks", "page");
      // revalidateTag("tasks");
      //      redirect("/");
    } catch (error) {
      console.error("Error Deleting event:", error);
      // Handle the error here
    }
  }