async function Subscribe(data: FormData) {
  "use server";
  const subscriberUrl = process.env.SUBSCRIBERS_URL;
  const subscriberEmail = data.get("subscriberEmail");
  const subscriber = {
    subscriberEmail,
  };

  const jsonData = JSON.stringify(subscriber);

  const apiUrl = ` ${subscriberUrl}`;

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
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Client added successfully:", responseData);
  } catch (error) {
    console.error("Error adding client:", error);
  }
}
