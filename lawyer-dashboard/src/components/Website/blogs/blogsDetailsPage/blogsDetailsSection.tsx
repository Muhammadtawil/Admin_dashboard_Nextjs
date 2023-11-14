import { Translator ,translate} from "google-translate-api-x";
import DetailsComponent from "./blogsDetailsMain";
import { ValuesSelect } from '../../../dashboard/shared/formsComponents';

export default async function BlogsDetailsMain({
  params,
  children
}: {
  params: { blogId: string };
  children: any;
}) {

  const token = process.env.TOKEN;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
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
