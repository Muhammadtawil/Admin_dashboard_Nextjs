// get users

const users_url = process.env.USERS_URL;
const user_url = process.env.USER_URL;

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function GetUsers() {
  const session = await getServerSession(authOptions);
  const users_url = process.env.USERS_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
      cache: "no-store",
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
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
      cache: "no-store",
    },
  };

  try {
    const response = await fetch(
      `${user_url}/${session?.userId}?=${Date.now()}`,
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
