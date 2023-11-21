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
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[28px]">Learn how Caja Morelia Valladolid modernized its data center in a hybrid cloud environment on a service-oriented architecture.</p></div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="w-[600px] h-[300px] bg-white rounded-2xl">
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[28px]">Learn how Caja Morelia Valladolid modernized its data center in a hybrid cloud environment on a service-oriented architecture.</p></div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 bg-yellow-400 px-10 py-3 rounded-3xl">
          <Link href={'/dashboard'} className="text-white font-semibold text-2xl">Home</Link>
        </div>
    </div>
  );
};

export default page;
