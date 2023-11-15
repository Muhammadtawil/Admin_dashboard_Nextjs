"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import Link from "next/link";
import SubscribeSide from "@/components/Website/Shared/subscribe/Subscribe";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


  const SideBarSection =  ({ currentBlogId, blogs ,Subscribe}: { currentBlogId: string, blogs: any,Subscribe:any }) => {
  const t=useTranslations('WebBlog')
  const path = usePathname()
    const arabic = path.includes('ar')
    const locale=arabic?'ar':'en'
  const filteredBlogs = blogs.filter(
    (blog: any) => blog.blogId !== currentBlogId
  );

const currentBlog = blogs.find((blog: any,index:any) => blog.blogId === currentBlogId);

if (!currentBlog) {
  // Handle the case where the current blog is not found
  return [];
}

const authorId = currentBlog.author.authorId;

const authorBlogs = blogs.filter((blog: any,index:any) => (blog.author.authorId === authorId && blog.blogId !== currentBlogId &&index===index));

  return (
    <div className={style.sideBarStyle}>
<SubscribeSide Subscribe={Subscribe}/>
 
      <div className="popularPost">
        <h4>{t('popularPosts') }</h4>
  
{filteredBlogs.map((data: any, index: any) => (
  <Link key={index} href={`/${locale}/blogs/${data.blogId}`}>
    <div key={index} className="postCard">
      <div key={index} >
        <Image
          width={200}
          height={200}
          src={data?.blogImageUrl}
          alt="blog image"
        />
      </div>
      <div key={index} >
        <h5 key={index} >{data.blogTitle.slice(0, 20)}...</h5>
        <h6  key={index}  className="date">
          {new Date(data.createdAt).toLocaleDateString(arabic ? "ar-LB" : "en-US", {
            day: "numeric",
            month: "long",
            year: "2-digit",
          })}
        </h6>
      </div>
    </div>
  </Link>
))}
        

<h4 className="author-title">{t('readAuthor') }</h4>

        {authorBlogs.map((data: any, index: any) => (
  <>
  <Link key={index} href={`/${locale}/blogs/${data.blogId}`}>
    <div key={index} className="postCard">
      <div key={index} >
        <Image
          width={200}
          height={200}
          src={data?.blogImageUrl}
          alt="blog image"
        />
      </div>
      <div key={index} >
        <h5>{data.blogTitle.slice(0, 20)}...</h5>
        <h6 className="date">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "2-digit",
            hour: "numeric",
          })}
        </h6>
      </div>
    </div>
            </Link>
  </>
            
))}

</div>


    </div>
  );
};

export default SideBarSection;
