"use client";
import React from "react";
const bg1 = "/assets/bg1.png";
import Image from "next/image";
import Link from "next/link";

const caseStudy = "/assets/sa01.png";
const caseStudy2 = "/assets/sa02.png";

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
      <div className=" w-[80vw] h-[70vh] flex justify-center items-center absolute top-[16%] left-[10%] rounded-[20px] border backdrop-blur-lg bg-white/30">
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div
            className="w-[600px] h-[300px]  rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy2})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/atea-converged-infrastructure.htm#collapse"
            }
            className="w-[600px] h-[300px] mt-5 text-white"
          >
            <p className="text-[28px]">
              As the leader in IT infrastructure for businesses and
              public-sector organizations in the Nordics and Baltics, Atea
              wanted to provide customers with greater agility and efficiency
              and a better ROI.
            </p>
          </Link>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div
            className="w-[600px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/tacc-high-performance-computing.htm#collapse"
            }
            className="w-[600px] h-[300px] mt-5 text-white"
          >
            <p className="text-[28px]">
              For the Texas Advanced Computing Center (TACC) staff, the key to
              enabling discoveries that change the world begins in their own
              backyard.
            </p>
          </Link>
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
