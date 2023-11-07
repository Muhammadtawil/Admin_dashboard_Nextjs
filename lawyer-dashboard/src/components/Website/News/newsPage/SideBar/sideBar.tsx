
import AddSubscribers from '@/server/subscribers/subscribers';
import SideBarSection from './SideBar-section'
import { getNews } from '@/server/web/services/news/news';

export default async function SideBarNewsPage() {
  const newsData = await getNews();
  async function subscribe(formData: FormData) {
    "use server";
    try {
      await AddSubscribers(formData);

    } catch (error) {}
  }
  
  return (
    <SideBarSection newsData={newsData} Subscribe={subscribe}/> 
  )
}
