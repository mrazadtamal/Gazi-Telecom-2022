import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Carousel() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926723/v-a-tao-OxvlDO8RwKg-unsplash_1_liokr1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926723/thai-nguyen-IegLpS8Eay8-unsplash_1_d7ps6u.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926724/zana-latif-5uJMG9fUAO0-unsplash_1_zsfeao.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926722/zana-latif-6YmlgOMOQj8-unsplash_1_nz5y5z.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1638899149/pexels-ioannis-ritos-1260239_1_qw5iul.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926722/sabawoon-rahman-CCeq9jvuKt0-unsplash_1_lwjtfe.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649927242/patrik-michalicka-cv4bk-aedJE-unsplash_1_erhwjl.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926722/zana-latif-KI1OHb2QODA-unsplash_1_tgp87r.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649926721/siegrist-nikolai-fzvn0JAVDto-unsplash_1_xahslk.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
