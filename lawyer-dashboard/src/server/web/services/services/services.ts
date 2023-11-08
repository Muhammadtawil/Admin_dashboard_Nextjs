export async function getServices() {

  const services_url = process.env.SERVICESWEB_URL;
  const requestOptions = {
    method: "GET",
    headers: {
   
      "Content-Type": "application/json",
    },

    next: {
      revalidate: 60,
    },
  };

  try {
    const response = await fetch(
      `${services_url}`,
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
