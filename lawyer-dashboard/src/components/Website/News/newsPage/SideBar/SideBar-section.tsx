"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { useState } from "react";
import SubscribeSide from "@/components/Website/Shared/subscribe/Subscribe";

const SideBarSection = ({ newsData, Subscribe }: { newsData: any, Subscribe: any }) => {
  const t = useTranslations('webNews')
  const router = useRouter();
  const path = usePathname()
  const arabic = path.includes('ar')
  const locale=useLocale()
  // Step 1: Group blogs by creation date
  const groupedBlogs = newsData.reduce((acc: any, blog: any) => {
    const createdAt = new Date(blog.createdAt);
    // Format the date to 'Month Year'
    const dateKey = new Date(createdAt).toLocaleDateString(arabic ? 'ar-LB' : 'en-US', {
      month: 'long',
      year: 'numeric',
    });
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(blog);
    return acc;
  }, {});

  // Step 2: Calculate blog counts for each date
  const archiveData = Object.keys(groupedBlogs).map((dateKey) => ({
    date: dateKey,
    count: groupedBlogs[dateKey].length,
  }));
  const [selectedMonth, setSelectedMonth] = useState('');
  const filteredNews = newsData.slice(1, 4);
  return (
    <div className={style.sideBarStyle}>

      <div className="popularPost">
        <h4>{t('popularPosts')}</h4>
        {filteredNews
          .filter((data: any) => {
            
            const formattedDate = new Date(data.createdAt).toLocaleDateString(arabic ? 'ar-LB' : 'en-US', {
              month: 'long',
              year: 'numeric',
            });
            return !selectedMonth || formattedDate.includes(selectedMonth);
          })
          .map((data: any, index: any) => (

            <div className="postCard" key={index} onClick={() => router.push(`/${locale}/news/${data.newsId}`)}>

              <div>
                <Image
              
                  width={200}
                  height={200}
                  src={data?.newsImageUrl}
                  alt="news image"
                />
              </div>
              <div>
                <h5>{data.newsTitle.slice(0, 20)}...</h5>
                <span>
                  {new Date(data.createdAt).toLocaleDateString(arabic ? "ar-LB" : "en-US", {
                    day: "numeric",
                    year: "numeric",

                    month: "long",
                  })}
                </span>
              </div>
            </div>
            // </Link>

          ))}
      </div>
      <SubscribeSide Subscribe={Subscribe} />
      <div className="lists archive">
        <h4>{t('archive')}</h4>
        {archiveData.map((data, index) => (
          <div
            key={index}
            onClick={() => setSelectedMonth(data.date)}
            className={selectedMonth === data.date ? 'selected' : ''}
          >
            <span>{data.date}</span>
            <span>{data.count}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SideBarSection;
