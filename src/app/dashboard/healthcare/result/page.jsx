import React from "react";
const bg1 = "/assets/bg1.png";
import Image from "next/image";
import Link from "next/link";

const caseStudy = "/assets/h1.webp";
const caseStudy2 = "/assets/h2.png";
const caseStudy3 = "/assets/gen22.png";

const page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Image src={bg1} fill className="-z-10" />
      </div>
      <div className=" w-[80vw] h-[70vh] flex justify-center gap-32 items-center absolute top-[16%] left-[10%] rounded-[20px] border backdrop-blur-lg bg-white/30">
        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/tgen.htm#collapse"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy2})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              TGen needed to be able to handle massive quantities of data in
              order to develop new treatments for patients.
            </p>
          </div>
        </div>
        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/bcb-medical-it-transformationc.htm#collapse&pdf-overlay=//www.delltechnologies.com/asset/en-us/solutions/apex/customer-stories-case-studies/dell-technologies-bcb-medical-customer-story.pdf"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              BCB Medical is a Finnish healthcare software-as-a-service company
              gathering and analyzing clinical data. BCB Medical wanted a
              solution that is highly effective, provide access to cutting-edge
              IT and offer cloud-like simplicity and predictability for ease of
              planning.
            </p>
          </div>
        </div>

        <div className="w-[17%] flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.dell.com/en-us/dt/case-studies-customer-stories/n-health-security.htm#collapse&pdf-overlay=//www.delltechnologies.com/asset/en-us/products/data-protection/customer-stories-case-studies/dell-technologies-n-health-customer-profile.pdf"
            }
            className="w-[300px] h-[300px] rounded-2xl"
            style={{
              backgroundImage: `url(${caseStudy3})`,
              backgroundSize: `cover`,
            }}
          ></Link>
          <div className="w-[300px] h-[300px] mt-5 text-white">
            <p className="text-[20px]">
              N Health modernizes its infrastructure on storage solutions from
              Dell Technologies to fortify security,provide caregivers with data
              to fuel decisions, deliver excellent patient experiences and drive
              regional expansion.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 bg-yellow-400 px-10 py-3 rounded-3xl">
        <Link href={"/dashboard"} className="text-white font-semibold text-2xl">
          Home
        </Link>
      </div>
    </div>
  );
};

export default page;
