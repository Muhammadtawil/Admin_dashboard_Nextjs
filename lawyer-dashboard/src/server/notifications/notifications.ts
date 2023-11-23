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