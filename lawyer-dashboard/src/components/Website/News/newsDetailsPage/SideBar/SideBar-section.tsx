
"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Subscribers from "@/components/Website/Shared/subscribe/subscribers";

const SideBarSection =  ({ currentNewsId, news ,Subscribe}: { currentNewsId: string, news: any ,Subscribe:any}) => {
  const t=useTranslations('webNews')

  const filteredNews = news.filter(
    (news: any) => news.newsId !== currentNewsId
  );




  return (
    <div className={style.sideBarStyle}>
 
      <div className="popularPost">
        <h4>{t('popularPosts') }</h4>
        {filteredNews.map((data:any, index:any) => (
             <Link href={`/ar/news/${data.newsId}`}>
          <div className="postCard" key={index} >
         
            <div>
              <Image
                width={200}
                height={200}
                src={data?.newsImageUrl}
                alt="blog image"
              />
              </div>
            <div>
              <h5 >{data.newsTitle.slice(0, 20)}...</h5>
              <h6 className="date">    {new Date(data.createdAt).toLocaleDateString("en-US", {
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

<Subscribers Subscribe={Subscribe}/>


    </div>
  );
};

export default SideBarSection;
