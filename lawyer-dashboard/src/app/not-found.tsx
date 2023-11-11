
"use client"
import Link from "next/link";
import style from "./notfound.module.scss"
import { usePathname } from "next/navigation";

const NotFound = () => {
  const path = usePathname()
  const ar = path.includes('ar');
  return (
    <div className={`${style.notFoundStyle}`}>
      <div className=" error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content-wrap">
              <h1>
                4 <span>0</span> 4
              </h1>
              <h3>{!ar?"Oops! Page Not Found":"للأسف! الصفحة غير موجودة"}</h3>
              <p>{!ar?"The page you were looking for could not be found.":"الصفحة التي كنت تبحث عنها لا يمكن العثور عليها" }</p>

              <Link href={ar?"/ar/home":"/en/home"} className="default-btn btn-two">
              {!ar?"  Return To Home Page":"العودة إلى الصفحة الرئيسية"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
