import React from "react";
const bg1 = "/assets/bg1.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Image src={bg1} fill className="-z-10" />
      </div>
      <div className=" w-[80vw] h-[70vh] flex justify-center items-center absolute top-[16%] left-[10%] rounded-[20px] border backdrop-blur-lg bg-white/30">
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="w-[600px] h-[300px] bg-white rounded-2xl">
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">BCB Medical is a Finnish healthcare software-as-a-service company gathering and analyzing clinical data. BCB Medical wanted a solution that is highly effective, provide access to cutting-edge IT and offer cloud like simplicity and predictability for ease of planning.</p></div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="w-[600px] h-[300px] bg-white rounded-2xl">
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">N Health modernizes its infrastructure on storage solutions from Dell Technologies to fortify security, provide caregivers with data to fuel decisions, deliver excellent patient experiences and drive regional expansion.</p></div>
        </div>
      </div>
    </div>
  );
};

export default page;
