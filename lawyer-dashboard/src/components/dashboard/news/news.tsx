import React from "react";
import { revalidatePath } from "next/cache";
import NewsAddComponent from "./newsForm";

import AddNews, {
  DeleteNews,
  GetNews,
  UpdateNews,
  UpdateNewsImage,
} from "../../../server/news/news";
import NewsTable from "./newsTable";

export let isEdit: boolean;

async function onCreate(formData: FormData) {
  "use server";
  try {
    await AddNews(formData);
    revalidatePath("/news", "page");
  } catch (error) {}
}

async function onUpdate(formData: FormData, newsId: string) {
  "use server";
  try {
    await UpdateNews(formData, newsId);

    revalidatePath("/news", "page");
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

async function Delete(newsId: string) {
  "use server";
  try {
    await DeleteNews(newsId);
    revalidatePath("/news", "page");
  } catch (error) {}
}
async function updateImage(formData: FormData, newsId: string) {
  "use server";
//   const selectedNewsId = formData.get("newsId");
  await UpdateNewsImage(formData, newsId);
  revalidatePath("/news", "page");

}
export default async function NewsComponent() {
  const news = await GetNews();

  return (
    <>
      <NewsAddComponent onCreate={onCreate} />
      <NewsTable
        dataRows={news}
        deleteTask={Delete}
        updateTask={onUpdate}
        UpdateImage={updateImage}
      />
    </>
  );
}
