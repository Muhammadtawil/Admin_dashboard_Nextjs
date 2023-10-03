import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
import { cookies } from "next/headers";
const login_url = process.env.LOGIN_URL;

export default async function SignIn(data: FormData) {
  // Extract client data from the FormData object
  const userName = data.get("userName");
  const userPassword = data.get("userPassword");

  const userData = {
    userName: userName,
    password: userPassword,
  };

  const jsonData = JSON.stringify(userData);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${login_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();

    // Check if the response contains an accessToken
    if (responseData.accessToken) {
      // Store the token as an HTTP cookie with a specified expiration time (e.g., 1 day)

      cookies().set("accessToken", `${responseData.accessToken}`, {
        secure: true,
      });
      cookies().set("userId", `${responseData.userId}`, { secure: true });

      console.log("user login Successfully:", responseData);
      // Log the access token and user ID (optional)
      console.log("Access Token:", responseData.accessToken);
      console.log("User ID:", responseData.userId);
      console.log(cookies().get("accessToken"));
      console.log(cookies().get("userId"));
      // Redirect to '/tasks' page
      // Redirect to '/login' page using Next.js Router
      if (response.status == 201 || response.status == 200) {
        // redirect("/tasks");
      }
    }

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("/tasks");z
  } catch (error) {
    console.error("Error adding task:", error);
    // Handle the error here
  }
}
