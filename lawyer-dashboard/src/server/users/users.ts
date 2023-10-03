// get users
const token = cookies().get("accessToken")?.value;
const userId = cookies().get("userId")?.value;
const users_url = process.env.USERS_URL;
const user_url = process.env.USER_URL;

import { cookies } from "next/headers";

export async function GetUsers() {
  const users_url = process.env.USERS_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    // next: {
    //   revalidate: 60,
    //   // revalidateTag: ["tasks"],
    // },
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

// get active user

export async function GetUser() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    // next: {
    //   revalidate: 10,
    //   // revalidateTag: ["tasks"],
    // },
  };

  try {
    const response = await fetch(
      `${user_url}/${userId}?=${Date.now()}`,
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
