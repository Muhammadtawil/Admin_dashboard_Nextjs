import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Ellipse from "../../../../../../public/images/common/Ellipse1.svg";
import Polygon from "../../../../../../public/images/common/Polygon1.svg";
import style from "./Hero2.module.scss";

const Hero2 = ({ children }:any) => {
  return (
    <div className={`container sectionStyle ${style.heroSection}`}>
      <div className="heroContainer">
        {children}
        {/* Image background style start*/}
        <div>
          <motion.div
            initial={{ x: 30, y: -50, scale: 0.8, rotate: -120 }}
            animate={{
              x: [30, 0, -15, 0, 35, 0, 30],
              y: [-50, 102, -70, 102, -55, 102, -50],
              scale: 0.8,
              rotate: [-120, -180, -180, -130, -150, -100, -120],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="circle1"
          >
            
          </motion.div>
          <motion.div
            initial={{ x: 0, y: 0, scale: 0.8, rotate: -170 }}
            animate={{
              x: [0, -30, 0, 20, 0, -35, 0],
              y: [102, -50, 102, -70, 102, -55, 102],
              scale: 0.8,
              rotate: [-170, -180, -150, -120, -150, -180, -170],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="circle2"
          >
       
          </motion.div>
          <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 0, scale: [0, 0.7, 0, 0.7, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="polygon"
          >
   
          </motion.div>
        </div>
        {/* Image background style end*/}
      </div>
    </div>
  );
};

export default Hero2;
