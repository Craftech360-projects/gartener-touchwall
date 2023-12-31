"use client";
import React from "react";
const bg1 = "/assets/bg1.png";
import Image from "next/image";
import Link from "next/link";

const caseStudy = "/assets/mn01.png";
const caseStudy2 = "/assets/mn02.png";
const caseStudy3 = "/assets/ggpp.webp";

const page = () => {
  const handleHome = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = `https://gartener-touchwall.vercel.app`;
    }, 500);
  };
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Image src={bg1} fill className="-z-10" />
      </div>
      <div className=" w-[80vw] h-[70vh] flex justify-center gap-32 items-center absolute top-[16%] left-[10%] rounded-[20px] border backdrop-blur-lg bg-white/30">
        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/linde-china-internet-of-things.htm#collapse&pdf-overlay=//www.delltechnologies.com/asset/en-us/solutions/infrastructure-solutions/customer-stories-case-studies/dell-technologies-linde-china-customer-profile.pdf"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy2})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              To achieve efficiency, Linde wanted to develop a smart automated
              factory with Dell Technologies solutions, that would improve
              robotic automation and can meet increasing demand for electric
              forklifts while reduce energy use for itself and its customers.
            </p>
          </div>
        </div>

        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/general-motors-high-performance-computing.htm#collapse"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy3})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              GM Motors wanted to create a future forward technology led
              environment that drives productivity, efficiency and increase in
              RoI with data driven, powerful, AI led applications.
            </p>
          </div>
        </div>

        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/hyundai-motor-group.htm#collapse"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              Hyundai Motor Group Innovation Center in Singapore wanted to build
              a human-centered, next generation smart manufacturing platform .
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 bg-yellow-400 px-10 py-3 rounded-3xl">
        <Link
          href={"/dashboard"}
          onClick={handleHome}
          className="text-white font-semibold text-2xl"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default page;
