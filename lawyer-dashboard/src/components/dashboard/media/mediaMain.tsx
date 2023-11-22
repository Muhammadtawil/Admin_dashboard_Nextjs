import MediaComponent from '@/components/dashboard/media/media'
import React from 'react'
import { revalidatePath } from "next/cache";
import CreateFolder, { DeleteFile, GetMedia, UploadMediaFile } from "@/server/media/media";

async function onCreate(formData: FormData) {
    "use server";
    try {
      await CreateFolder(formData);
      revalidatePath("/files", "page");
    } catch (error) {}
}
  
async function UplpoadMedia(formData: FormData, folderName: any) {
    "use server";
  await UploadMediaFile(formData, folderName);
  revalidatePath("/files", "page");
  
}
async function Delete(folderName: string,fileName:string) {
  "use server";
  try {
    await DeleteFile(folderName,fileName);
    revalidatePath("/files", "page");
  } catch (error) {}
}
  
export default async function MediaMainCoponent() {
  const media = await GetMedia();

  return (
    <MediaComponent OnCreate={onCreate} Delete={Delete} media={media} AddFile={UplpoadMedia}/> 
  )
}
