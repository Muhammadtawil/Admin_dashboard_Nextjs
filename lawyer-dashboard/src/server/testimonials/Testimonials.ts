// create Testimonial




import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const testimonials_url = process.env.TESTIMONIALS_URL;

export async function GetTestimonials() {
  const session = await getServerSession(authOptions);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",

    },
  };

  try {
    const response = await fetch(
      `${testimonials_url}?=${Date.now()}`,
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

// create Testimonials

export default async function AddTestimonials(data: FormData) {
  // Extract client data from the FormData object
  const senderName = data.get("senderName");
  const testimonialContent = data.get("testimonialContent");
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const TestimonialsData = {
    senderName: senderName,
    testimonialContent: testimonialContent,
    isFlag: isFlag == "ready" ? true : false,
  };

  const jsonData = JSON.stringify(TestimonialsData);

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,

      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${testimonials_url}`, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Testimonials added successfully:", responseData);
  } catch (error) {
    console.error("Error adding Testimonials:", error);
    // Handle the error here
  }
}
// delete Testimonilas

export async function DeleteTestimonials(testimonialId: string) {
  // Define the URL for deleting a task (replace with the correct endpoint)
  const deleteUrl = `${testimonials_url}/${testimonialId}`;
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

    console.log("Testimonial deleted successfully");
  } catch (error) {
    console.error("Error Deleting Testimonial:", error);
  }
}

// update Testimonial

export async function UpdateTestimonial(data: FormData, testimonialId: string) {
  const senderName = data.get("senderName");
  const testimonialContent = data.get("testimonialContent");
  const isFlag = data.get("isFlag");
  const session = await getServerSession(authOptions);

  const TestimonialsData = {
    senderName: senderName,
    testimonialContent: testimonialContent,
    isFlag: isFlag == "true" ? true : false,
  };

  const jsonData = JSON.stringify(TestimonialsData);
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const response = await fetch(
      `${testimonials_url}/${testimonialId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const responseData = await response.json();
    console.log("Testimonial Updated successfully:", responseData);
  } catch (error) {
    console.error("Error update Testimonial:", error);
  }
}
