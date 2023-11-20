import React from "react";
const bg1 = "/assets/bg1.png";
const caseStudy= "/assets/Finance/Casestudy/financeCaseStudy.png"
const caseStudy2= "/assets/Finance/Casestudy/financeCaseStudy2.jpeg"
import Image from "next/image";
const page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Image src={bg1} fill className="-z-10" />
      </div>
      <div className=" w-[80vw] h-[70vh] flex justify-center items-center absolute top-[16%] left-[10%] rounded-[20px] border backdrop-blur-lg bg-white/30">
        <div className="w-[50%] flex justify-center items-center flex-col "  >
          <div className="w-[600px] h-[300px] bg-white rounded-2xl" style={{backgroundImage: `url(${caseStudy2})`, backgroundSize:`cover`}}>
            
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">Learn how Caja Morelia Valladolid modernized its data center in a hybrid cloud environment on a service-oriented architecture.</p></div>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <div className="w-[600px] h-[300px] bg-white rounded-2xl" style={{backgroundImage: `url(${caseStudy})`, backgroundSize:`cover`}}>
            
          </div>
          <div className="w-[600px] h-[300px] mt-5 text-white"><p className="text-[32px]">Learn how Caja Morelia Valladolid modernized its data center in a hybrid cloud environment on a service-oriented architecture.</p></div>
        </div>
      </div>
    </div>
  );
};

export default page;
