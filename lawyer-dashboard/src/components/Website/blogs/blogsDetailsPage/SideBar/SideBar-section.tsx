"use client"
import Image from "next/image";
import style from "./SideBar.module.scss";
import { useRouter } from "next/navigation";

const SideBarSection = ( {currentBlogId ,blogs}: { currentBlogId: string ,blogs:any}) => {
  const router = useRouter();
  const filteredBlogs = blogs.filter(
    (blog: any) => blog.blogId !== currentBlogId
  );

  return (
    <div className={style.sideBarStyle}>
 
      <div className="popularPost">
        <h4>Popular Post</h4>
        {filteredBlogs.map((data:any, index:any) => (
            //  <Link href={`/ar/blogs/${data.blogId}`}>
          <div className="postCard" key={index} onClick={()=>router.push(`ar/blogs/${data.blogId}`)}>
         
            <div>
              <Image
                width={200}
                height={200}
                src={data?.blogImageUrl}
                alt="blog image"
                onClick={()=>router.push(`ar/blogs/${data.blogId}`)}
              />
              </div>
            <div>
              <h5 onClick={()=>router.push(`ar/blogs/${data.blogId}`)}>{data.blogTitle.slice(0, 20)}...</h5>
              <span>{data.createdAt}</span>
            </div>
          </div>
          // </Link>
            
        ))}
      </div>

    </div>
  );
};

export default SideBarSection;
