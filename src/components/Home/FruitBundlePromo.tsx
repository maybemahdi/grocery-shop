/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import SectionTag from "../SectionTag";

export default function FruitBundlePromo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 18,
    minutes: 54,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#ddd] px-8 md:px-[90px] py-[120px] overflow-hidden md:mt-[180px] mb-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/Bg.jpg')] opacity-5" />

      {/* Content */}
      <div className="relative z-10">
        <SectionTag text={"Special Offer"} />

        <div className="mt-2 space-y-2">
          <h2 className="md:text-[80px] text-[40px] font-normal text-text">
            Seasonal Fruit Bundle
          </h2>
          <p className="md:text-4xl text-2xl font-normal text-text">
            Discount up to <span className="text-orange">80% OFF</span>
          </p>
        </div>

        {/* Timer */}
        <div className="flex gap-4 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-3 min-w-[80px]">
            <div className="text-2xl font-bold text-center">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 text-center">Days</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-3 min-w-[80px]">
            <div className="text-2xl font-bold text-center">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 text-center">Hour</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-3 min-w-[80px]">
            <div className="text-2xl font-bold text-center">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 text-center">Min</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-3 min-w-[80px]">
            <div className="text-2xl font-bold text-center">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 text-center">Second</div>
          </div>
        </div>

        {/* Promo Code */}
        <div className="mt-6">
          <p className="font-semibold text-[24px] text-white bg-green py-2 px-8 mt-2 rounded-[30px] w-fit">
            CODE : <span className="text-[#FAC714]">FRESH25</span>
          </p>
        </div>
      </div>

      {/* Fruit Image */}
      <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 w-1/3">
        <img
          src="/images/orange.png"
          alt="Fresh fruits including oranges, lemons, kiwis, and strawberries"
          className="w-full h-auto"
        />
      </div>

      {/* Decorative Leaves */}
      <div className="absolute -bottom-4 -right-14">
        <img src="/images/leaf2.png" alt="" />
      </div>
      <div className="absolute top-8 right-1/3">
        <img src="/images/leaf1.png" alt="" />
      </div>
    </div>
  );
}
