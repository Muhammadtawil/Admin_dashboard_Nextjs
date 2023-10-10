// get users

const users_url = process.env.USERS_URL;
const user_url = process.env.USER_URL;
const update_user = process.env.UPDATE_TEAM_URL;
const createUserUrl = process.env.SIGN_UP_URL;
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

// Create a USER
export async function CreateUser(data: FormData) {
  // Extract client data from the FormData object
  const userName = data.get("userName");
  const password = data.get("password");
  const userPhoneStr = data.get("userPhone");
  const userEmail = data.get("userEmail");
  const userPosition = data.get("userPosition");
  // const userImgUrl = data.get("userImgUrl");
  const userPhone = userPhoneStr as string;
  const session = await getServerSession(authOptions);

  const userData = {
    userName: userName,
    password: password,
    userPhone: parseInt(userPhone, 10),
    userEmail: userEmail,
    userPosition: userPosition,
    userRole: "USER",
    isTeam: false,
    // userImgUrl: userImgUrl,
  };

  const jsonData = JSON.stringify(userData);

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
    const response = await fetch(`${createUserUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user:", error);
  }
}

// Update User
// only for Admins
export async function UpdateUser(data: FormData, userId: string) {
  // Extract client data from the FormData object
  const userName = data.get("userName");
  const userPhone = data.get("userPhone");
  const userEmail = data.get("userEmail");
  const userPosition = data.get("userPosition");
  const password = data.get("passsword");
  const userImgUrl = data.get("userImgUrl");

  const session = await getServerSession(authOptions);

  const taskData = {
    userName: userName,
    userPhone: userPhone,
    userEmail: userEmail,
    userPosition: userPosition,
    password: password,
    userImgUrl: userImgUrl,
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
    const response = await fetch(`${update_user}/${userId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user:", error);
  }
}
