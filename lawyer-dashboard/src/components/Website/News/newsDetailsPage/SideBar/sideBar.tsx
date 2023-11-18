import AddSubscribers from '@/server/subscribers/subscribers';
import SideBarSection from './SideBar-section'
import { getNews } from '@/server/web/services/news/news';


export default async function SideBarNewsDetails({currentNewsId,}:{currentNewsId:string}) {

  const newsData = await getNews();
  
  async function subscribe(formData: FormData) {
    "use server";
    try {
      await AddSubscribers(formData);

    } catch (error) {}
  }
  
  return (
    <SideBarSection news={newsData} currentNewsId={currentNewsId} Subscribe={subscribe} /> 
  )
}
