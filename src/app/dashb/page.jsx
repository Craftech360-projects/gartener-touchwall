"use client";
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

const finance = "/assets/finance.png";
const healthcare = "/assets/healthcare.png";
const manufacturing = "/assets/manufacturing.png";

const Page = () => {
  return (
    <div className="mt-40 flex content-center text-center items-center justify-center relative">
      <Image src={mainbg} fill />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        effect="coverflow"
        loop
        onAutoplay={(delay = 2500)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={4}
        centeredSlides
        onInit={(swiper) => {
          // Add timeout for left arrow click
          const leftArrow = document.querySelector(".swiper-button-prev");
          if (leftArrow) {
            leftArrow.addEventListener("click", () => {
              setTimeout(() => {
                swiper.slidePrev();
                swiper.allowClick = true;
              }, 4000); // Adjust the timeout duration as needed
            });
          }
          // Add timeout for right arrow click
          const rightArrow = document.querySelector(".swiper-button-next");
          if (rightArrow) {
            rightArrow.addEventListener("click", () => {
              setTimeout(() => {
                swiper.slideNext();
                swiper.allowClick = true;
              }, 4000); // Adjust the timeout duration as needed
            });
          }
        }}
      >
        {/* Swiper slides */}
      </Swiper>

      {/* Previous and Next divs */}
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10">
        Next
      </div>
      <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10">
        Previous
      </div>
    </div>
  );
};
export default Page;
