export async function AddSubscribers(data: FormData) {
  "use server";
  const subscriberUrl = process.env.SUBSCRIBERS_URL;
  const subscriberEmail = data.get("subscriberEmail");
  const subscriber = {
    subscriberEmail,
  };

  const jsonData = JSON.stringify(subscriber);

  const apiUrl = ` ${subscriberUrl}`;



  const requestOptions = {
    method: "POST",
    headers: {

      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${apiUrl}/Web`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Client added successfully:", responseData);
  } catch (error) {
    console.error("Error adding client:", error);
  }
}
