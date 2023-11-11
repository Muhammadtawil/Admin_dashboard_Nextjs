export async function getTeam() {
  const teamUrl = process.env.TEAM_URL;
 
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
    const response = await fetch(`${teamUrl}?=${Date.now()}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return an empty array or a default value when an error occurs
    return [];
  }
}
