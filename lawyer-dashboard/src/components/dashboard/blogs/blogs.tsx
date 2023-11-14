

import BlogAddComponent from "./AddBlogForm";
import AddBlog, {
  DeleteBlog,
  GetBlogs,
  UpdateBlog,
  UpdateBlogImage,
} from "../../../server/blogs/blogs";
import { revalidatePath } from "next/cache";

import BlogsTable from "./blogsTable";

export let isEdit: boolean;

async function onCreate(formData: FormData) {
  "use server";
  try {
    await AddBlog(formData);
    revalidatePath("/blogs", "page");
  } catch (error) {}
}

async function onUpdate(
  formData: FormData,
  blogId: string,
  selectedImage: File,
  authorId: string
) {
  "use server";
  try {
    console.log(authorId);
    await UpdateBlog(formData, blogId, authorId);

    revalidatePath("/blogs", "page");
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

async function Delete(blogId: string) {
  "use server";
  try {
    await DeleteBlog(blogId);
    revalidatePath("/blogs", "page");
  } catch (error) {}
}
async function updateImage(formData: FormData, blogId: string) {
  "use server";
  revalidatePath("/blogs", "page");
  await UpdateBlogImage(formData, blogId);
}

export default async function BlogsComponent() {
  const blogs = await GetBlogs();
 
  return (
    <>
      <BlogAddComponent onCreate={onCreate} />
      <BlogsTable
        dataRows={blogs}
        deleteTask={Delete}
        updateTask={onUpdate}
        UpdateImage={updateImage}
      />
    </>
  );
}
