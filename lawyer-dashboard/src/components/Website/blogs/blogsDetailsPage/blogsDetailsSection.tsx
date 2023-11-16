
import DetailsComponent from "./blogsDetailsMain";


export default async function BlogsDetailsMain({
  params,
  children
}: {
  params: { blogId: string };
  children: any;
}) {


  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const blogUrl = process.env.BLOGIDURL;
  const response = await fetch(`${blogUrl}/${params.blogId}`, requestOptions);
  const blog = await response.json();



  return (
    <DetailsComponent params={params} blogs={blog} children={children}  />
  );
}
