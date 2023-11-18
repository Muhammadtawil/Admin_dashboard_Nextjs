"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import SubscribeSide from "@/components/Website/Shared/subscribe/Subscribe";

const SideBarSection =  ({ currentNewsId, news ,Subscribe}: { currentNewsId: string, news: any ,Subscribe:any}) => {
  const t=useTranslations('webNews')
  const path = usePathname()
  const arabic = path.includes('ar')
  const locale=arabic?'ar':'en'
  const filteredNews = news.filter(
    (news: any) => news.newsId !== currentNewsId
  );


  // const currentNews = news.find((news: any) => news.newsId ===currentNewsId);

  if (!currentNewsId) {
    // Handle the case where the current blog is not found
    return [];
  }
  

  return (
    <div className={style.sideBarStyle}>
 <SubscribeSide Subscribe={Subscribe}/>
      <div className="popularPost">
        <h4>{t('popularPosts') }</h4>
        {filteredNews.slice(0,8).map((data:any, index:any) => (
             <Link href={`/${locale}/news/${data.newsId}`}  key={index}>
          <div className="postCard" key={index} >
         
            <div key={index}>
              <Image
                width={200}
                height={200}
                src={data?.newsImageUrl}
                alt="blog image"
              />
              </div>
            <div key={index}>
              <h5 >{data.newsTitle.slice(0, 20)}...</h5>
              <h6 className="date">    {new Date(data.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
                                     day: "numeric",
                                     month: "long",
                                     year: "2-digit",
                                     hour:"numeric"
                                   })}</h6>
            </div>
          </div>
         </Link>
            
        ))}
      </div>




    </div>
  );
};

export default SideBarSection;
