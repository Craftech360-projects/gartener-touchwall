'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import Image from "next/image";


SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const mainbg = "/assets/mainbg.png";
const beginBtn = "/assets/beginbtn.png";

const  finance = "/assets/finance.png";
const  healthcare = "/assets/healthcare.png";
const manufacturing = "/assets/manufacturing.png";


const Page = () => {
  return (
    <div className=" mt-40 flex content-center text-center items-center justify-center">
      <Image src={mainbg} fill />
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={2}
        centeredSlides
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${finance})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${healthcare})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${manufacturing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Page;
