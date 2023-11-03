import { redirect } from "next/navigation";

import withReactContent from "sweetalert2-react-content";

export default async function Login(data: FormData) {
  // Extract client data from the FormData object
  const userName = data.get("userName");
  const userPassword = data.get("userPassword");

  const userData = {
    userName: userName,
    password: userPassword,
  };

  const jsonData = JSON.stringify(userData);

  // Define the URL for adding a client (replace with the correct endpoint)
  const loginUrl = process.env.LOGIN_URL; // Replace with the correct endpoint for adding a client

  const token = process.env.TOKEN;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${loginUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user login successfully:", responseData);

    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    redirect("/recover");
  } catch (error) {
    console.error("Error adding client:", error);
    // Handle the error here
  }
}
