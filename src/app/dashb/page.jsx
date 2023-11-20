import React from "react";
import Link from "next/link";

import dataName from "../../data/main.json";

const page = () => {
  const data = dataName.links;
  return (
    <div>
      {data.map((item) => (
        <Link href={item.link}>{item.name}</Link>
      ))}
    </div>
  );
};

export default page;
