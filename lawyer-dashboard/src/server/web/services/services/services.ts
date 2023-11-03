export async function getServices() {
  const token = process.env.TOKEN;
  const services_url = process.env.SERVICES_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    next: {
      revalidate: 60,
    },
  };

  try {
    const response = await fetch(
      `${services_url}?=${Date.now()}`,
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
