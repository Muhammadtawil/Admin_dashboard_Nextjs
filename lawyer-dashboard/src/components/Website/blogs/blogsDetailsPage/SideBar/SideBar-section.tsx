
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
  const arabic=path.includes('ar')
  const filteredBlogs = blogs.filter(
    (blog: any) => blog.blogId !== currentBlogId
  );

const currentBlog = blogs.find((blog: any) => blog.blogId === currentBlogId);

if (!currentBlog) {
  // Handle the case where the current blog is not found
  return [];
}

const authorId = currentBlog.author.authorId;

const authorBlogs = blogs.filter((blog: any) => (blog.author.authorId === authorId && blog.blogId !== currentBlogId ));

  return (
    <div className={style.sideBarStyle}>
 
      <div className="popularPost">
        <h4>{t('popularPosts') }</h4>
  
{filteredBlogs.map((data: any, index: any) => (
  <Link key={index} href={`/ar/blogs/${data.blogId}`}>
    <div className="postCard">
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
        <h6 className="date">
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


        {authorBlogs.map((data: any, index: any) => (
  <>
          <h4>{t('readAuthor') }</h4>
  <Link key={index} href={`/ar/blogs/${data.blogId}`}>
    <div key={index} className="postCard">
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
<SubscribeSide Subscribe={Subscribe}/>


    </div>
  );
};

export default SideBarSection;
