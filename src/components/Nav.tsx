/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa6";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname: string = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change this value to set when to change the navbar background
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-8 fixed top-0 left-0 right-0 px-[90px] z-50 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      {/* logo */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logoImage"
          className="h-[39px] w-[39px]"
        />
        <img src="/images/logoText.png" alt="logoText" className="h-[17px]" />
      </div>

      {/* menu links for large devices  */}
      <div className="flex flex-grow items-center justify-center gap-12 font-questrial text-para text-[14px] font-normal">
        {menuItems.map((menu, idx) => {
          const isActive = pathname === menu.path;
          return (
            <Link
              className={`${isActive ? "border-b-2 border-main" : ""}`}
              key={idx}
              href={menu.path}
            >
              {menu.name}
            </Link>
          );
        })}
      </div>

      {/* cart and signin buttons  */}
      <div
        className={`flex items-center gap-8 font-questrial text-[14px] font-normal  ${
          isScrolled || pathname !== "/" ? "text-text" : "text-white"
        }`}
      >
        <button className="flex items-center justify-center gap-2">
          {isScrolled || pathname !== "/" ? (
            <FaHeart className="text-text" size={20} />
          ) : (
            <img src="/images/heart.png" alt="Favorites" />
          )}
          <p>Favorites</p>
        </button>
        <button className="flex items-center justify-center gap-2">
          {isScrolled || pathname !== "/" ? (
            <FaCartPlus className="text-text" size={20} />
          ) : (
            <img src="/images/cart.png" alt="Favorites" />
          )}
          <p>Cart</p>
          <p className="border-[2px] border-main  text-[8px] text-white relative h-5 w-5 -left-[50px] bottom-3 bg-[#EE4536] p-1 text-center rounded-full">
            3
          </p>
        </button>
        <Link
          href={"/login"}
          className="text-text px-6 py-2 text-sm font-semibold border border-text rounded-md"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
