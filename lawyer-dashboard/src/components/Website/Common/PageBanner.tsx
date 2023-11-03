import React from "react";
import Link from "next/link";
import DarkAndLightMode from "@/components/ControlPanelModal/DarkAndLightMode";
import Image from "next/image";
import { Stack } from "@mui/material";


interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageBanner  = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}:any) => {
  return (
    <>
      
      
      <div className="page-title-area item-bg1">
        {/* <div className="container"> */}
        <div className="page-title-content">
      <Stack direction={"row-reverse"} spacing={2} />
      <Image src="/blogIcon.png" width={150} height={100} alt="Law"/>
          
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
          </ul>
        <Stack />
          
          </div>
        {/* </div> */}

      </div>
  

    </>
  );
};

export default PageBanner;
