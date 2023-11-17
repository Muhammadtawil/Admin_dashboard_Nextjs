



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const subscriberss_url = process.env.SUBSCRIBERS_URL;

export async function GetSubscribers() {
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
      `${subscriberss_url}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Add Subscribers

export default async function AddSubscribers(data: FormData) {
  const session = await getServerSession(authOptions);
  const subscriberEmail = data.get("subscriberEmail");


  const subscribersData = {
    subscriberEmail: subscriberEmail,
  };

  const jsonData = JSON.stringify(subscribersData);



  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${subscriberss_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Subscriber added successfully:", responseData);

  } catch (error) {
    console.error("Error adding Subscriber:", error);
    // Handle the error here
  }
}
// delete Subscriber

export async function DeleteSubscriber(subscriberId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${subscriberss_url}/${subscriberId}`;
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

    console.log("Subscriber deleted successfully");

  } catch (error) {
    console.error("Error Deleting Subscriber:", error);

  }
}

// update Subscriber

export async function UpdateSubscribers(data: FormData, subscriberId: string) {
    const subscriberEmail = data.get("subscriberEmail");

    const session = await getServerSession(authOptions);
  
    const subscribersData = {
      subscriberEmail: subscriberEmail,
    };
  
    const jsonData = JSON.stringify(subscribersData);



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
      `${subscriberss_url}/${subscriberId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Subscriber Updated successfully:", responseData);

 
  } catch (error) {
    console.error("Error update task:", error);

  }
}
