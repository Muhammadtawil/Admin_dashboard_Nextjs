
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
export async function GetServices() {
    const session = await getServerSession(authOptions);
    const services_url = process.env.SERVICES_URL;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
        cache: "no-store",
      },
  
      // next: {
      //   revalidate: 60,
      //   // revalidateTag: ["tasks"],
      // },
    };
  
    try {
      const response = await fetch(`${services_url}?=${Date.now()}`, requestOptions);
  
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  