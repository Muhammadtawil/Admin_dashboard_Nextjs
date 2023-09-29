// get users

import { revalidatePath } from "next/cache";

export async function GetUsers() {
  const token = process.env.TOKEN;
  const users_url = process.env.USERS_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    next: {
      revalidate: 60,
      // revalidateTag: ["tasks"],
    },
  };

  try {
    const response = await fetch(`${users_url}?=${Date.now()}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
