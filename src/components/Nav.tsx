/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-duplicate-props */
"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import menuItems from "@/utils/menuItems";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import LoginModal from "./Auth/LoginModal";


const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const pathname: string = usePathname();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Sign out successful");
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
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

  useEffect(() => {}, []);

  return (
    <nav
      className={`flex justify-between items-center py-8 fixed top-0 left-0 right-0 px-6 md:px-[90px] z-[100] ${
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
      <div className="hidden md:flex flex-grow items-center justify-center gap-12 font-questrial text-para text-[14px] font-normal">
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
        className={`flex items-center gap-3 md:gap-8 font-questrial text-[14px] font-normal  ${
          isScrolled || pathname !== "/" ? "text-text" : "text-white"
        }`}
      >
        <button className="hidden md:flex items-center justify-center gap-2">
          {isScrolled || pathname !== "/" ? (
            <FaHeart className="text-text md:block hidden" size={20} />
          ) : (
            <img className="" src="/images/heart.png" alt="Favorites" />
          )}
          <p>Favorites</p>
        </button>
        <button
          onClick={() => setIsCartDrawerOpen(true)}
          className="flex items-center justify-center gap-2"
        >
          {isScrolled || pathname !== "/" ? (
            <FaShoppingCart className="text-text" size={25} />
          ) : (
            <img
              src="/images/cart.png"
              alt="Favorites"
              className="h-6 w-6 md:h-4 md:w-4"
            />
          )}
          <p className="hidden md:block">Cart</p>
          <p className="border-[2px] border-main text-[8px] text-white relative h-5 w-5 -left-4 md:-left-[50px] bottom-3 bg-[#EE4536] p-1 text-center rounded-full">
            {cartItems.length}
          </p>
        </button>
        {isLoggedIn ? (
          <button
            onClick={handleSignOut}
            className={`md:block hidden ${
              isScrolled || pathname !== "/"
                ? "text-text border border-text"
                : "text-white border border-white"
            } px-6 py-2 text-sm font-semibold rounded-md`}
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => setLoginModalOpen(true)}
            className={`md:block hidden ${
              isScrolled || pathname !== "/"
                ? "text-text border border-text"
                : "text-white border border-white"
            } px-6 py-2 text-sm font-semibold rounded-md`}
          >
            Sign In
          </button>
        )}
        {/* mobile menu bar */}
        {isNavOpened ? (
          <IoClose
            onClick={() => setIsNavOpened(!isNavOpened)}
            size={32}
            className={`${
              isScrolled || pathname !== "/" ? "text-black" : "text-white"
            } md:hidden block`}
          />
        ) : (
          <IoMenu
            onClick={() => setIsNavOpened(!isNavOpened)}
            size={32}
            className={`${
              isScrolled || pathname !== "/" ? "text-black" : "text-white"
            } md:hidden block`}
          />
        )}
      </div>
      {/* Cart Drawer (Right side) */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
          isCartDrawerOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ width: "50%" }} // Adjust the width as needed
      >
        <div className="flex justify-end p-4">
          <IoClose
            onClick={() => setIsCartDrawerOpen(false)} // Close the cart drawer
            size={24}
            className="cursor-pointer"
          />
        </div>

        {/* Cart Items */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Your Cart:</h2>
          <ul className="mt-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-2"
                >
                  <p className="flex-grow">{item.productName}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform transition-all duration-500 ease-in-out ${
          isNavOpened
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        style={{ width: "60%" }}
      >
        <div className="flex flex-col items-start gap-6 p-6 mt-10">
          {menuItems.map((menu, idx) => {
            const isActive = pathname === menu.path;
            return (
              <Link
                key={idx}
                href={menu.path}
                className={`${
                  isActive ? "border-b-2 border-main" : ""
                } text-[16px] text-black`}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-4 mt-6 px-6">
          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="text-[16px] text-black font-semibold border-b-2 border-main"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => setLoginModalOpen(true)}
              className="text-[16px] text-black font-semibold border-b-2 border-main"
            >
              Sign In
            </button>
          )}
          <button className="flex items-center gap-3 text-black">
            <FaHeart size={20} />
            <p>Favorites</p>
          </button>
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="flex items-center gap-3 text-black"
          >
            <FaShoppingCart size={20} />
            <p>Cart</p>
          </button>
        </div>
        {/* Login Modal */}
        <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} />
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Nav), { ssr: false });

