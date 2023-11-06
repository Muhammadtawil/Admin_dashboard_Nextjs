
import Image from "next/image";
import style from "./SideBar.module.scss";
import Link from "next/link";
import SubscribeSide from "@/components/Website/Shared/subscribe/Subscribe";
import { GetAuthorBlogs } from "@/server/blogs/blogs";

const SideBarSection =  ({ currentBlogId, blogs }: { currentBlogId: string, blogs: any }) => {
  

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
        <h4>Popular Post</h4>
        {filteredBlogs.map((data:any, index:any) => (
             <Link href={`/ar/blogs/${data.blogId}`}>
          <div className="postCard" key={index} >
         
            <div>
              <Image
                width={200}
                height={200}
                src={data?.blogImageUrl}
                alt="blog image"
              />
              </div>
            <div>
              <h5 >{data.blogTitle.slice(0, 20)}...</h5>
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
      <div className="popularPost">
  {authorBlogs.length > 0 && (
    <>
      <h4>Read more for this author</h4>
      {authorBlogs.map((data: any, index: any) => (
        <Link href={`/ar/blogs/${data.blogId}`} key={index}>
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
      ))}
    </>
  )}
</div>

<SubscribeSide/>
    </div>
  );
};

export default SideBarSection;
