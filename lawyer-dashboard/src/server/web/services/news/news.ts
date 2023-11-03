export async function getNews() {
  const token = process.env.TOKEN;
  const newsUrl = process.env.NEWSURL;
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
    const response = await fetch(`${newsUrl}?=${Date.now()}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
