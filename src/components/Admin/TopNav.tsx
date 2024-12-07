"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBarsProgress } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

interface TopNavProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNav: React.FC<TopNavProps> = ({ setOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem("adminToken");
    document.cookie =
      "adminToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    toast.success("Sign out successful");
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaBarsProgress />
      </button>

      {/* Admin Title */}
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      {/* Example Profile Menu or Action */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="text-gray-600 hover:text-gray-800">🔔</button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          {isLoggedIn && (
            <button
              onClick={handleSignOut}
              className="flex items-center text-gray-700 hover:text-gray-900 ml-2"
            >
              <IoLogOutOutline className="mr-2" size={24} />
              <span className="hidden md:block">Logout</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TopNav), { ssr: false });