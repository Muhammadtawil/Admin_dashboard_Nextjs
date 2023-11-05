
import { Col, Row } from "react-bootstrap";
import { CgSearch } from "react-icons/cg";
import style from "./Hero.module.scss";

const Hero = ({ searcHandler }: any) => {
  return (
    <div className={style.blogHero}>
      {/* Blog search start */}
      <Row className="justify-content-center">
        <Col xs={11} sm={9} md={8} lg={6} xl={5}>
          <div className="searchContainer">
            <div className="centered-content">
            </div>
            <div className="searchBox">
              <input onChange={searcHandler} placeholder="Search articles here" />
              <button>
                <CgSearch />
              </button>
            </div>
          </div>
        </Col>
      </Row>
      {/* Blog search end */}
    </div>
  );
};

export default Hero;
