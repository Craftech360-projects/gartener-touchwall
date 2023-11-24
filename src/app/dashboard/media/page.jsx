"use client";
import React, { useState } from "react";
import Image from "next/image";
const bg1 = "/assets/bg5.png";
import data from "../../../data/main.json";
import Link from "next/link";

const card = "/assets/card11.png";
const caseStudy = "/Casestudy.png";

const Page = () => {
  const dataL = data.pointerfive;
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
    newShowDetailsContainers[index] = !newShowDetailsContainers[index];
    setShowDetailsContainers(newShowDetailsContainers);

    // Check if all details-containers are open
    if (newShowDetailsContainers.every((value) => value)) {
      setShowAllDetails(true);
    }
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
            className="w-[50px] h-[50px]"
            onClick={() => handleClick(index)}
          >
            <video autoPlay loop muted width={50} height={50}>
              <source src={item.image} type="video/webm" />
            </video>
          </div>

          {activeItems[index] && (
            <div
              className="details-container"
              onClick={() => handleDetailsContainerClick(index)}
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
          href={`media/result`}
          className="absolute bottom-4 right-4 w-48 h-20"
        >
          <Image src={caseStudy} width={200} height={200} />
        </Link>
      )}
    </div>
  );
};

export default Page;
