import { getNews } from "@/server/web/services/news/news";
import News from "./blogs";
import SideBarNewsPage from "./SideBar/sideBar";




export default async function NewsPageMain() {
    const newsData = await getNews();

  return (
   <>
      <News newsData={newsData} children={<SideBarNewsPage/>}/>
      </>
  )
}
