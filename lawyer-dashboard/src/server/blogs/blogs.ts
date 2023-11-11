// create Blog





import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const blogs_url = process.env.BLOGS_URL;
const blog_Id_Url=process.env.BLOGIDURL
export async function GetBlogs() {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",

    },
  };

  try {
    const response = await fetch(`${blogs_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create bLOG

export default async function AddBlog(data: FormData) {
  // Extract client data from the FormData object
  const blogTitle = data.get("blogTitle");
  const blogContent = data.get("blogContent");
  const authorName = data.get("authorName");
  const isFlag = data.get("isFlag");
  const blogLang=data.get('blogLang')
  const session = await getServerSession(authOptions);

  const blogsData = {
    blogTitle: blogTitle,
    blogContent: blogContent,
    authorName: authorName,
    isFlag: isFlag == "ready" ? true : false,
    blogLang:blogLang=='arabic'?"arabic":"english",
    blogImageUrl: "",
  };

  const jsonData = JSON.stringify(blogsData);

  // Define the URL for adding a client (replace with the correct endpoint)

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${blogs_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("blog added successfully:", responseData);
  } catch (error) {
    console.error("Error adding blog:", error);
    // Handle the error here
  }
}
// delete blog

export async function DeleteBlog(blogId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${blogs_url}/${blogId}`;
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

    console.log("blog deleted successfully");
  } catch (error) {
    console.error("Error Deleting blog:", error);
  }
}

// update Blog

export async function UpdateBlog(
  data: FormData,
  blogId: string,
  authorId: string
) {
  const blogTitle = data.get("blogTitle");
  const blogContent = data.get("blogContent");
  const authorName = data.get("authorName");
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const blogsData = {
    blogTitle: blogTitle,
    blogContent: blogContent,
    isFlag: isFlag == "ready" ? true : false,
    author: {
      authorId: authorId,
      authorName: authorName,
    },
  };
  const jsonData = JSON.stringify(blogsData);

  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${blogs_url}/${blogId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("blog Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update task:", error);
  }
}

// Upload image

export async function UpdateBlogImage(data: FormData, blogId: string) {
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
      `${blogs_url}/${blogId}/update-image`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("user Role Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update updating user Role:", error);
  }
}


export async function GetAuthorBlogs(authorId:string) {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",

    },
  };

  try {
    const response = await fetch(`${blog_Id_Url}/authors/all/${authorId}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}