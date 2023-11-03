import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Done!",
    text: "Your message was successfully sent and will call you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
export default async function AddClient(data: FormData) {
  // Extract client data from the FormData object
  const clientName = data.get("clientName");
  const clientPhone = data.get("clientPhone");
  const clientEmail = data.get("clientEmail");
  const clientServiceName = data.get("clientService");

  const clientData = {
    clientName,
    clientPhone,
    clientEmail,
    chosenServiceName: clientServiceName,
  };

  const jsonData = JSON.stringify(clientData);

  // Define the URL for adding a client (replace with the correct endpoint)
  const bookingUrl = process.env.BOOKING_URL; // Replace with the correct endpoint for adding a client

  const token = process.env.TOKEN;
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${bookingUrl}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Client added successfully:", responseData);
    MySwal.fire({
      title: "Done!",
      text: "Your message was successfully sent and will call you soon",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    // Optionally, you can revalidate tags or perform a redirect here
    // revalidateTag("posts");
    // redirect("");
  } catch (error) {
    console.error("Error adding client:", error);
    // Handle the error here
  }
}
