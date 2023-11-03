export async function getLAwFirmAbout() {
  const token = process.env.TOKEN;
  const about_lawfirm_url = process.env.ABOUT_LAWFIRM_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 120,
    },
  };

  try {
    const response = await fetch(
      `${about_lawfirm_url}`,
      requestOptions
    );

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
