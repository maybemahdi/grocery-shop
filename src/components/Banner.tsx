import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8 basis-2/3">
        <button className="text-main shadow cursor-auto">
          Welcme to Fresh Harvest
        </button>
      </div>
      <div className="basis-1/3 bg-main h-full">
        <Image src={"/images/bannerImage"} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
