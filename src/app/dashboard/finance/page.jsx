"use client";
import React, { useState } from "react";
import Image from "next/image";
const bg1 = "/assets/bg1.png";
// const bg2 = "/bgbg.mp4";
import data from "../../../data/main.json";
import Link from "next/link";

const card = "/assets/card11.png";
const caseStudy = "/Casestudy.png";

const Page = () => {
  const dataL = data.pointerone;
  console.log(dataL);
  const [activeItems, setActiveItems] = useState([]);
  const [showDetailsContainers, setShowDetailsContainers] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);

  const handleClick = (index) => {
    const newActiveItems = [...activeItems];
    if (!newActiveItems[index]) {
      newActiveItems[index] = true;
    }
    // Update the state with the new array
    setActiveItems(newActiveItems);
    // Reset the visibility of other details-containers when an item is clicked
    const newShowDetailsContainers = [...showDetailsContainers];
    newShowDetailsContainers[index] = false;
    setShowDetailsContainers(newShowDetailsContainers);

    // Reset the overall visibility flag
    setShowAllDetails(false);
  };

  const handleDetailsContainerClick = (index) => {
    // Toggle the visibility of the details-container when clicked
    const newShowDetailsContainers = [...showDetailsContainers];
    if (!newShowDetailsContainers[index]) {
      newShowDetailsContainers[index] = true;
    }
    //  newShowDetailsContainers[index] = !newShowDetailsContainers[index];
    setShowDetailsContainers(newShowDetailsContainers);

    // Check if all details-containers are open
    if (newShowDetailsContainers.every((value) => value)) {
      setShowAllDetails(true);
    }
  };

  const handleResult = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = `https://gartener-touchwall.vercel.app/dashboard/finance/result`;
    }, 500);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Image src={bg1} fill className="-z-10" />
      </div>

      {dataL.map((item, index) => (
        <div
          key={index}
          className="absolute flex items-start"
          style={{
            top: `${item.position.top}px`,
            left: `${item.position.left}px`,
          }}
        >
          <div
            key={index}
            className="w-[100px] h-[100px]"
            // onClick={() => handleClick(index)}
            onClick={() => {
              setTimeout(() => {
                handleClick(index);
              }, 500);
            }}
          >
            {/* <Image src={item.image} width={50} height={50} /> */}
            <video autoPlay loop muted width={300} height={300}>
              <source src={item.image} type="video/webm" />
            </video>
          </div>

          {activeItems[index] && (
            <div
              className="details-container"
              onClick={() =>
                setTimeout(() => {
                  handleDetailsContainerClick(index);
                }, 500)
              }
            >
              <Image src={item.cardone} width={400} height={400} />
              {showDetailsContainers[index] && (
                <div className="additional-div">
                  <Image src={item.cardtwo} width={400} height={400} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      {showAllDetails && (
        <Link
          href={`finance/result`}
          onClick={handleResult}
          className="absolute bottom-4 right-4 w-48 h-20"
        >
          <Image src={caseStudy} width={200} height={200} />
        </Link>
      )}
    </div>
  );
};

export default Page;
