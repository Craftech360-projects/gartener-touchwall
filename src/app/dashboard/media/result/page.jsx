"use client";
import React from "react";
const bg1 = "/assets/bg1.png";
import Image from "next/image";
import Link from "next/link";
const caseStudy = "/assets/md01.jpeg";
const caseStudy2 = "/assets/md2.jpeg";

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
            className="w-[600px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy2})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/lightstormentertainment.htm"
            }
            className="w-[600px] h-[300px] mt-5 text-white"
          >
            <p className="text-[28px]">
              James Cameron’s Lightstorm Entertainment creates stunning films
              that fully rely on digital technology. Collaborating with Dell
              Technologies helped them seamlessly capture, store and share vast
              amounts of data
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
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/outernet.htm"
            }
            className="w-[600px] h-[300px] mt-5 text-white"
          >
            <p className="text-[28px]">
              Outernet, a global media and entertainment company, sought to
              create unique, multi-sensory experiences, giving artists,
              musicians and brands new ways to reach their audiences.
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
