
import style from "./HeaderWrapper.module.scss";

const HeaderWrapper = ({ children }:any) => {
  return <div className={style.backgroundStyle}>{children}</div>;
};

export default HeaderWrapper;
