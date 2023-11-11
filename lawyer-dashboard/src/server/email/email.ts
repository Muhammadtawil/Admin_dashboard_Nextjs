



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth";

// Send Email 
const email_url = process.env.SEND_EMAIL_URL;
export default async function SendEmail(data: FormData,content:any) {
    // Extract client data from the FormData object
    const receivers = data.get("receivers");
    const subject = data.get("subject");
    // const content = data.get("content");

    const session = await getServerSession(authOptions);
  
    const EmailData = {
        receivers: receivers,
        subject: subject,
        content: content,

  
    };
  
    const jsonData = JSON.stringify(EmailData);
  
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
      const response = await fetch(`${email_url}`, requestOptions);
  
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      const responseData = await response.json();
      console.log("Email Sent successfully:", responseData);
  
      // Optionally, you can revalidate tags or perform a redirect here
      // revalidateTag("posts");
      // redirect("/tasks");
    } catch (error) {
      console.error("Error sending Email:", error);
      // Handle the error here
    }
  }