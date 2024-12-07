/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionTag from "../SectionTag";

const Banner = () => {
  return (
    <div className="relative h-auto">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center min-h-screen">
        <div className="flex flex-col justify-center gap-6 basis-2/3 mx-8 md:ml-[90px] mt-[170px]">
          <SectionTag text={"Welcome to Fresh Harvest"} />
          <h2 className="font-medium text-[48px] md:text-[60px] md:w-[50%] leading-tight text-text">
            Fresh Fruits and Vegetables
          </h2>
          <p className="text-para text-sm font-normal w-[80%] md:w-[60%]">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange rounded-md py-3 px-8 text-white w-fit font-semibold">
            Shop Now
          </button>
          {/* special offer  */}
          <div className="flex z-20 gap-5 md:ml-[120px]">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="w-[55px] h-[55px] rotate--69 md:block hidden"
            />
            <div className="bg-[#EBEBEB] flex items-center justify-center rounded-lg gap-2 p-5 w-fit">
              <div className="flex flex-col">
                <p className="text-green font-bold md:text-sm text-[8px]">
                  Special Offer
                </p>
                <h4 className="text-text font-bold text-base md:text-[28px]">
                  Fresh Salad
                </h4>
                <p className="md:text-base text-[9px] text-text">
                  <span className="text-green font-medium">Up to</span>{" "}
                  <span className="md:text-2xl text-[13px] font-medium">
                    70%
                  </span>{" "}
                  <span>off</span>
                </p>
                <p className="font-semibold text-[6.955px] md:text-[12px] text-white bg-green p-1 md:py-2 md:px-3 mt-2 rounded-2xl w-fit">
                  CODE : <span className="text-[#FAC714]">FRESH25</span>
                </p>
              </div>
              <img
                className="md:h-[146px] md:w-[149px] w-[86px] h-[84]"
                src="/images/small.png"
                alt="food"
              />
            </div>
          </div>
          {/* Download app section  */}
          <div className="my-[50px] z-40">
            <p className="text-para text-sm">Download App</p>
            <div className="flex gap-4 mt-3">
              <img src="/images/appstore.png" alt="" />
              <img src="/images/googleplay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* banner image  */}
      <div className="absolute hidden md:block ml-6 right-[80px] bottom-0 z-10">
        <img
          className="h-[770px] w-[758px]"
          src="/images/bannerImage.png"
          alt="banner"
        />
      </div>
      <div className="z-30 absolute md:hidden right-0 bottom-0 flex items-center">
        <img
          src="/images/icon1.png"
          alt="icon"
          className="h-[41px] w-[40px] -mr-5"
        />
        <img
          className="w-[300px] h-[573px]"
          src="/images/mobileBanner.png"
          alt="banner"
        />
      </div>
      {/* side green color  */}
      <div className="absolute hidden md:block right-0 top-0 w-[501px] -z-10 h-full bg-main"></div>
      <div className="absolute md:hidden block right-0 top-0 w-[150px] -z-10 h-[877px] bg-main"></div>
      {/* leaf image  */}
      <div className="absolute hidden md:block mt-[100px] -left-[80px] top-0">
        <img className="" src="/images/leaf1.png" alt="leaf" />
      </div>
      <div className="absolute hidden md:block mt-[200px] -right-[100px] top-0">
        <img className="" src="/images/leaf2.png" alt="leaf" />
      </div>
      <div className="absolute hidden md:block mt-[200px] right-[40%] top-0">
        <img className="" src="/images/leaf3.png" alt="leaf" />
      </div>
      <div className="absolute hidden md:block mb-[200px] left-20 bottom-0">
        <img className="" src="/images/leaf3.png" alt="leaf" />
      </div>
      <div className="absolute md:hidden block mt-[200px] right-1/2 top-0">
        <img className="" src="/images/leaf3.png" alt="leaf" />
      </div>
    </div>
  );
};

export default Banner;
