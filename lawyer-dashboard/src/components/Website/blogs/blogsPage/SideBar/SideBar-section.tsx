"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import SubscribeSide from "@/components/Website/Shared/subscribe/Subscribe";
import { useTranslations } from "next-intl";
import { useState } from "react";



const SideBarSection = ({ blogsData ,Subscribe}: { blogsData: any ,Subscribe:any}) => {
  const t=useTranslations('WebBlog')
  const router = useRouter();
  const filteredBlogs = blogsData.slice(1, 4);
  const path = usePathname()
  const arabic = path.includes('ar')
  const locale = arabic ? "ar" : "en";
  // const numberFormatter = new IntlMessageFormat('0', path.includes('ar') ? 'ar-SA' : 'en-US');

 // Get the current locale

// Step 1: Group blogs by creation date
const groupedBlogs = blogsData.reduce((acc: any, blog: any) => {
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
  return (
    <div className={style.sideBarStyle}>
      {/* <div className="lists">
        <h4>{t('categories') }</h4>
        <div className="categories">
          <span>Business</span>
          <span>3</span>
        </div>
        <div>
          <h5>
          <span>Technology</span>
          </h5>
          <span>8</span>
        </div>
        <div>
          <span>Marketing</span>
          <span>1</span>
        </div>
        <div>
          <span>Branding</span>
          <span>5</span>
        </div>
        <div>
          <span>Programming</span>
          <span>2</span>
        </div>
        <div>
          <span>Designing</span>
          <span>3</span>
        </div>
        <div>
          <span>News</span>
          <span>6</span>
        </div>
      </div> */}
      <div className="popularPost">
        <h4>{t('popularPosts') }</h4>
        {filteredBlogs
  .filter((data:any) => {
    const formattedDate = new Date(data.createdAt).toLocaleDateString(arabic ? 'ar-LB' : 'en-US', {
      month: 'long',
      year: 'numeric',
    });
    return !selectedMonth || formattedDate.includes(selectedMonth);
  }).slice(0,5)
  .map((data:any, index:any) => (
            //  <Link href={`/ar/blogs/${data.blogId}`}>
          <div className="postCard" key={index} onClick={()=>router.push(`/${locale}/blogs/${data.blogId}`)}>
         
            <div>
              <Image
             
                width={200}
                height={200}
                src={data?.blogImageUrl}
                alt="blog image"
              />
              </div>
            <div>
              <h5>{data.blogTitle.slice(0, 20)}...</h5>
              <span>
                                   {new Date(data.createdAt).toLocaleDateString(arabic?"ar-LB":"en-US", {
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
      <SubscribeSide Subscribe={Subscribe}/>
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
