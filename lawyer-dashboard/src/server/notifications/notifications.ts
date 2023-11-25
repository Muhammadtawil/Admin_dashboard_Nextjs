import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const notifications_url = process.env.GET_NOTIFICATIONS_URL;

export async function GetNotifications() {
    const session = await getServerSession(authOptions);
    const userId = session?.userId;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
   
    },
    next: {
      // revalidate: 10,
      tags: ["notifications"],
    },
 
  };

  try {
    const response = await fetch(`${notifications_url}/${userId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }


}

export async function UpdateNotifications(notificationId:string) {
  const session = await getServerSession(authOptions);
  const notificationsData = {
    read: true,
  };
  const jsonData = JSON.stringify(notificationsData);
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };
  try {
    const response = await fetch(`${notifications_url}/status/${notificationId}/read`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Notification Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update Notification:", error);
  }

}

