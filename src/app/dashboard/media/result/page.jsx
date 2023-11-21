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
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">James Cameron’s Lightstorm Entertainment creates stunning films that fully rely on digital technology. Collaborating with Dell Technologies helped them seamlessly capture, store and share vast amounts of data</p></div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="w-[600px] h-[300px] bg-white rounded-2xl">
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">Outernet, a global media and entertainment company, sought to create unique, multi-sensory experiences, giving artists, musicians and brands new ways to reach their audiences.</p></div>
        </div>
      </div>
    </div>
  );
};

export default page;
