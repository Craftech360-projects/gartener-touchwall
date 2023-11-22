"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const mainbg = "/assets/mainbg.png";
const mainbg2 = "/bgbg.mp4";
const beginBtn = "/assets/beginbtn.png";

const finance = "/assets/finance.png";
const healthcare = "/assets/healthcare.png";
const manufacturing = "/assets/manufacturing.png";
const media = "/assets/media.png";
const service = "/assets/servicess.png";

const Page = () => {
  const handleSlideClick = (link) => {
    // You can perform any custom logic here before navigating
    console.log(`Navigating to ${link}`);
    // Use window.location.href to navigate
    // window.location.href = `http://localhost:3000/dashboard/${link}`;
    window.location.href = `https://gartener-touchwall.vercel.app/dashboard/${link}`;
  };

  return (
    <div className="pt-48 flex content-center text-center items-center justify-center">
      <Image src={mainbg} fill />
      {/* <video autoPlay loop muted className="-z-10">
          <source src={mainbg2} type="video/mp4" />
      </video> */}
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        loop
        updateOnWindowResize
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={2}
        centeredSlides
        // className="z-30"
      >
        <SwiperSlide
          onClick={() => handleSlideClick("finance")}
          style={{
            backgroundImage: `url(${finance})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>
        <SwiperSlide
          onClick={() => handleSlideClick("healthcare")}
          style={{
            backgroundImage: `url(${healthcare})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>

        <SwiperSlide
          onClick={() => handleSlideClick("manufacturing")}
          style={{
            backgroundImage: `url(${manufacturing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>

        <SwiperSlide
          onClick={() => handleSlideClick("media")}
          style={{
            backgroundImage: `url(${media})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        ></SwiperSlide>

        <SwiperSlide
          onClick={() => handleSlideClick("service")}
          style={{
            backgroundImage: `url(${service})`,
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
