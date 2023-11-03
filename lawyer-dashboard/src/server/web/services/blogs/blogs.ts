export async function getBlogs() {
  const blogUrl = process.env.BLOGURL;
  const token = process.env.TOKEN;
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
    const response = await fetch(`${blogUrl}`, requestOptions);

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
