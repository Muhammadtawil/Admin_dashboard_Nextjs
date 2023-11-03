import Image from "next/image";


import style from "./SideBar.module.scss";
import blogData from "../blogData";

const SideBar = () => {
  return (
    <div className={style.sideBarStyle}>
      <div className="lists">
        <h4>Categories</h4>
        <div>
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
      </div>
      <div className="popularPost">
        <h4>Popular Post</h4>
        {blogData.blogs.slice(0, 3).map((data, index) => (
          <div className="postCard" key={index}>
            <div>
              <Image
                layout="responsive"
                width={200}
                height={200}
                src={data?.image}
                alt="blog image"
              />
            </div>
            <div>
              <h5>{data.title.slice(0, 20)}...</h5>
              <span>{data.posted}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="lists archive">
        <h4>Archives</h4>
        <div>
          <span>March 2022</span>
          <span>21</span>
        </div>
        <div>
          <span>February 2022</span>
          <span>15</span>
        </div>
        <div>
          <span>January 2022</span>
          <span>19</span>
        </div>
        <div>
          <span>December 2021</span>
          <span>30</span>
        </div>
        <div>
          <span>November 2021</span>
          <span>27</span>
        </div>
      </div>
      <div className="tags">
        <h4>Tags</h4>
        <button>Logo</button>
        <button>Technology</button>
        <button>Designing</button>
        <button>Programming</button>
        <button>Marketing</button>
        <button>Business</button>
        <button>Photography</button>
        <button>News</button>
      </div>
    </div>
  );
};

export default SideBar;
