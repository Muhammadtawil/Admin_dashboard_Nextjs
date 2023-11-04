// "use client";

// import Link from "next/link";
// import "swiper/css";
// import "swiper/css/navigation"; // Import additional styles if needed
// import "swiper/css/autoplay";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import truncateText from "@/server/web/services/shared/truncateText";
// import Image from "next/image";
// import { Stack } from "@mui/material";
// // import { Navigation, Autoplay } from "swiper";
// export default function NewsSwiper({ news }: { news: any }) {
//   return (
//     <Swiper
//       spaceBetween={25}
//       navigation={true}
//       autoplay={{
//         delay: 4000,
//         disableOnInteraction: true,
//         pauseOnMouseEnter: true,
//       }}
//       breakpoints={{
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         992: {
//           slidesPerView: 2,
//         },
//       }}
//       className="testimonials-slide"
//     >
//       {news.map((singleNews: any, i: number) => (
//         <SwiperSlide key={i}>
//           <Stack direction={"row"} spacing={2}>

 
//           <div>
//             <div className="blog-box row">
//               <div className="col-md-4">
//                 <div className="post-media">
//                   <Link href="tech-single.html" title="">
//                     <Image
//                       src={singleNews.newsImageUrl}
//                       alt=""
//                       className="img-fluid"
//                       width={50}
//                       height={50}
//                     />
//                     <div className="hovereffect"></div>
//                   </Link>
//                 </div>
//               </div>

//               <div className="blog-meta big-meta col-md-8">
//   <h4>
//     <Link href="tech-single.html" title="">
//       {singleNews.newsTitle}
//     </Link>
//   </h4>

//   <small>
//     <span>
//       {new Date(singleNews.createdAt).toLocaleDateString("en-US", {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//       })}
//     </span>
//   </small>

//   <Link href={`/news/${singleNews.newsId}`} className="read-more">
//     Read More <i className="bx bx-plus"></i>
//   </Link>
// </div>
          
//             </div>
//             </div>
//             </Stack>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
