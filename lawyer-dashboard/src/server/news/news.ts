// create news





import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const newss_url = process.env.NEWSIDURL;

export async function GetNews() {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
   
    },
  };

  try {
    const response = await fetch(`${newss_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create News

export default async function AddNews(data: FormData) {
  // Extract client data from the FormData object
  const newsTitle = data.get("NewsTitle");
  const newsContent = data.get("NewsContent");
  const newsLang = data.get('newsLang');
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const newssData = {
    newsTitle: newsTitle,
    newsContent: newsContent,
    isFlag: isFlag == "ready" ? true : false,
    newsImageUrl: "image",
    newsLang:newsLang=='arabic'?"arabic":"english",
  };

  const jsonData = JSON.stringify(newssData);

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${newss_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("News added successfully:", responseData);
  } catch (error) {
    console.error("Error adding News:", error);
    // Handle the error here
  }
}
// delete News

export async function DeleteNews(newsId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${newss_url}/${newsId}`;
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };

  try {
    const response = await fetch(deleteUrl, requestOptions);
    console.log(deleteUrl);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    console.log("News deleted successfully");
  } catch (error) {
    console.error("Error Deleting News:", error);
  }
}

// update News

export async function UpdateNews(data: FormData, newsId: string) {
  const newsTitle = data.get("newsTitle");
  const newsContent = data.get("newsContent");
  const isFlag = data.get("isFlag");
  const newsLang = data.get('newsLang');
  const session = await getServerSession(authOptions);

  const newssData = {
    newsTitle: newsTitle,
    newsContent: newsContent,
    isFlag: isFlag == "ready" ? true : false,
    newsLang:newsLang=='arabic'?"arabic":"english",
  };

  const jsonData = JSON.stringify(newssData);

  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${newss_url}/${newsId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("News Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update News:", error);
  }
}

// Upload image

export async function UpdateNewsImage(data: FormData, newsId: string) {
  const session = await getServerSession(authOptions);

  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: data,
  };

  try {
    const response = await fetch(
      `${newss_url}/${newsId}/update-image`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("news Image Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating news Image :", error);
  }
}
