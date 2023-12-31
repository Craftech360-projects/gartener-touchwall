"use client";
import React from "react";
const bg1 = "/assets/bg1.png";
const caseStudy = "/assets/Finance/Casestudy/financeCaseStudy.png";
const caseStudy2 = "/assets/Finance/Casestudy/financeCaseStudy2.jpeg";
import Image from "next/image";
import Link from "next/link";
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
        <div className="w-[50%] flex justify-center items-center flex-col ">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/caja-morelia-valladolid.htm#collapse"
            }
            className="w-[600px] h-[300px] bg-white rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy2})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[600px] h-[300px] mt-5 text-white">
            <p className="text-[28px]">
              Learn how Caja Morelia Valladolid modernized its data center in a
              hybrid cloud environment on a service-oriented architecture.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/founders-federal-credit-union-data-protection.htm#collapse"
            }
            className="w-[600px] h-[300px] bg-white rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[600px] h-[300px] mt-5 text-white">
            <p className="text-[28px]">
              Founders Federal Credit Union builds their customers’ financial
              wellbeing and grows their company revenues by offering fast,
              reliable services and emphasizing the value of data
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
