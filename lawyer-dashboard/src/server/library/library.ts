



import { authOptions } from "@/app/utils/authoptions";
import { getServerSession } from "next-auth/next";
const media_url = process.env.LIBRARY_URL;
// const createMedia_url = process.env.CREATE_FOLDER_URL
// const upload_file_url = process.env.UPLOAD_FILE_URL;
export async function GetLibrary() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
   
    },
    next: {
      // revalidate: 10,
      tags: ["library"],
    },
 
  };

  try {
    const response = await fetch(
      `${media_url}`,
      requestOptions
    );

    const services = await response.json();
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    return services;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// create Service

// export default async function CreateFolder(data: FormData) {
//   // Extract client data from the FormData object
//   const folderName = data.get("folderName");

//   const session = await getServerSession(authOptions);


//   // const jsonData = JSON.stringify(serviceData);

//   // Define the URL for adding a client (replace with the correct endpoint)

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${session?.accessToken}`,

//       "Content-Type": "application/json",
//     },
//     // body: jsonData,
//   };

//   try {
//     const response = await fetch(`${createMedia_url}/${folderName}`, requestOptions);

//     if (!response.ok) {
//       throw new Error("Request failed with status: " + response.status);
//     }

//     const responseData = await response.json();
//     console.log("Service added successfully:", responseData);

//     // Optionally, you can revalidate tags or perform a redirect here
//     // revalidateTag("posts");
//     // redirect("/tasks");
//   } catch (error) {
//     console.error("Error adding Service:", error);
//     // Handle the error here
//   }
// }




// // Upload image

// export async function UploadMediaFile(data: FormData, folderName: any) {
//   const session = await getServerSession(authOptions);

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${session?.accessToken}`,
//     },
//     body: data,
//   };

//   try {
//     const response = await fetch(
//       `${upload_file_url}/${folderName}`,
//       requestOptions
//     );

//     if (!response.ok) {
//       throw new Error("Request failed with status: " + response.status);
//     }

//     const responseData = await response.json();
//     console.log("user Role Updated successfully:", responseData);
//   } catch (error) {
//     console.error("Error update updating user Role:", error);
//   }
// }



// // delete Service

// export async function DeleteFile(folderName: string,fileName:string) {
//   // Define the URL for deleting a task (replace with the correct endpoint)
//   const deleteUrl = `${media_url}/delete/${folderName}/${fileName}`;
//   const session = await getServerSession(authOptions);

//   const requestOptions = {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${session?.accessToken}`,
//     },
//   };

//   try {
//     const response = await fetch(deleteUrl, requestOptions);
//     console.log(deleteUrl);

//     if (!response.ok) {
//       throw new Error("Request failed with status: " + response.status);
//     }

//     console.log("Service deleted successfully");

//     // Optionally, you can revalidate tags or perform a redirect here
//     // revalidatePath("/tasks", "page");
//     // revalidateTag("tasks");
//     //      redirect("/");
//   } catch (error) {
//     console.error("Error Deleting service:", error);
//     // Handle the error here
//   }
// }


