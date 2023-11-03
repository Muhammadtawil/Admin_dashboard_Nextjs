import React from "react";
import Link from "next/link";
import { getBlogs } from "@/server/web/services/blogs/blogs";


const BlogsSidebar = async ({ currentBlogId }: { currentBlogId: string }) => {
  const blogs = await getBlogs(); // Fetch blogs data
  // Filter out the current blog
  const filteredBlogs = blogs.filter(
    (blog: any) => blog.blogId !== currentBlogId
  );

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>

          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Blogs</h3>

          <div className="post-wrap">
            {filteredBlogs.map((blog: any) => (
              <article className="item">
                <Link href={`/ar/blogs/${blog.blogId}`} className="thumb">
                  <span className="fullimage cover bg1" role="img">
                    {" "}
                    <img src={blog.blogImageUrl} alt="Image" />
                  </span>
                </Link>

                <div className="info">
                  <time>
                    {" "}
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h4 className="title usmall">
                    <Link href={`/ar/blogs/${blog.blogId}`}>{blog.blogTitle}</Link>
                  </h4>
                </div>

                <div className="clear"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSidebar;
