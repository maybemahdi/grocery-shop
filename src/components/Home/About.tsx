/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionTag from "../SectionTag";
import SectionHead from "../SectionHead";
import ProductCard from "../ProductCard";

const demoProduct = {
  id: "1234",
  productName: "Mushroom",
  price: 2.3,
  isSmall: true,
};
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-24 md:gap-8 container px-8 md:px-[90px] my-20">
      <div className="basis-1/2 relative">
        <img src="/images/man-1.png" alt="product" />
        <div className="absolute top-[70%] right-8">
          <ProductCard product={demoProduct} image={"/images/16.png"} />
        </div>
        {/* logo */}
        <div className="flex items-center gap-2 absolute top-[55%] md:top-[60%] right-16 bg-white rounded-md px-4 py-2">
          <img
            src="/images/logo.png"
            alt="logoImage"
            className="h-[29px] w-[29px]"
          />
          <img src="/images/logoText.png" alt="logoText" className="h-[13px]" />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-4 z-10">
        <SectionTag text={"About Us"} />
        <SectionHead text={"About Fresh Harvest"} />
        <p className="text-para text-sm font-normal w-full md:w-[60%] font-questrial">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="hover:bg-orange hover:text-white text-orange bg-white border border-orange rounded-lg py-2 px-8 w-fit font-normal transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
