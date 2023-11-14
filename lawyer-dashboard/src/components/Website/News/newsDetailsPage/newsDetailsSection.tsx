



import DetailsComponent from "./newsDetailsMain";

export default async function NewsDetailsMain({
  params,
  children
}: {
    params: { newsId: string };
    children: any;
    }) {

        const token = process.env.TOKEN;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // next: {
      //   revalidate: 120,
      // },
    };
    const newsUrl = process.env.NEWSIDURL;
  const response = await fetch(`${newsUrl}/${params.newsId}`, requestOptions);
    const news = await response.json();
  
  return (
    
    <DetailsComponent params={params} news={news} children={children}/>



  );
  

  
}
