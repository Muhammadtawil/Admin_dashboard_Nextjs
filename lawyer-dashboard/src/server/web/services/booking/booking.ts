
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
  const clientServiceId = data.get("clientService");
  const clientMessage = data.get('clientMessage')
  // const originalServiceName = data.get("originalServiceTitle");

  const clientData = {
    clientName,
    clientPhone,
    ...(clientEmail && { clientEmail }), // Include clientEmail only if it's not empty
    ...(clientMessage && { clientMessage }), // Include clientMessage only if it's not empty
    chosenServiceId:clientServiceId, 
  };

  const jsonData = JSON.stringify(clientData);

  // Define the URL for adding a client (replace with the correct endpoint)
  const bookingUrl = process.env.WEBCLIENTURL; // Replace with the correct endpoint for adding a client

  const requestOptions = {
    method: "POST",
    headers: {

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

  } catch (error) {
    console.error("Error adding client:", error);
    // Handle the error here
  }
}
