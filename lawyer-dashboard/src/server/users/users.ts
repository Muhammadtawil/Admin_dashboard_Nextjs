// get users

const users_url = process.env.USERS_URL;
const user_url = process.env.USER_URL;
const update_user = process.env.UPDATE_TEAM_URL;
const createUserUrl = process.env.SIGN_UP_URL;
const updateRoleUrl = process.env.UPDATE_ROLE_URL;
const deleteUser_url = process.env.DELETE_USER_URL;


import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";

export async function GetUsers() {
  const session = await getServerSession(authOptions);
  const users_url = process.env.USERS_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",

    },

  
  };

  try {
    const response = await fetch(`${users_url}`, requestOptions);

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
  const userEmail = data.get("userEmail");
  const userPosition = data.get("userPosition");
  // const userImgUrl = data.get("userImgUrl");
  const userPhoneStr = data.get("userPhone");
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
    console.log("user created successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user:", error);
  }
}

// Update User
// only for Admins
export async function UpdateUser(data: FormData, userId: string) {
  // Extract client data from the FormData object
  const userName = data.get("userName");
  const userPhoneStr = data.get("userPhone");
  const userPhone = userPhoneStr as string;
  const userEmail = data.get("userEmail");
  const userPosition = data.get("userPosition");
  const userFacebookUrl = data.get("facebook");
  const userLinkedInUrl = data.get("LinkedIn");
  const userTwitterUrl = data.get("Twitter");
  const isTeam = data.get("isTeam");
  const userBio = data.get("userBio");

  // const password = data.get("passsword");
  // const userImgUrl = data.get("userImgUrl");

  const session = await getServerSession(authOptions);

  const userData = {
    userName: userName,
    userPhone: parseInt(userPhone, 10),
    userEmail: userEmail,
    userPosition: userPosition,
    userFacebookUrl: userFacebookUrl,
    userLinkedInUrl: userLinkedInUrl,
    userTwitterUrl: userTwitterUrl,
    userBio:userBio,
    isTeam: isTeam == "Yes" ? true : false,
    // password: password,
    // userImgUrl: userImgUrl,
  };

  const jsonData = JSON.stringify(userData);

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

export async function UpdateUserRole(data: FormData, userId: string) {
  // Extract client data from the FormData object
  const userRole = data.get("userRole");

  const session = await getServerSession(authOptions);

  const userData = {
    userRole: userRole,
  };

  const jsonData = JSON.stringify(userData);

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
    const response = await fetch(`${updateRoleUrl}/${userId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user Role Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user Role:", error);
  }
}

export async function UpdateUserImage(data: FormData, userId: string) {
  // Extract client data from the FormData object
  // const formData = new FormData();
  // formData.append("image",imageFile);
  const session = await getServerSession(authOptions);

  // const jsonData = JSON.stringify(image);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: data,
  };

  try {
    const response = await fetch(
      `${user_url}/${userId}/update-image`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user Role Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user Role:", error);
  }
}


export async function DeleteUser(userId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${deleteUser_url}/${userId}`;
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

    console.log("team member deleted successfully");
  } catch (error) {
    console.error("Error Deleting team Member:", error);
  }
}
