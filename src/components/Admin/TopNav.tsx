"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoLogOutOutline } from "react-icons/io5";

const TopNav = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Sign out successful");
    window.location.reload();
  };
  if (!isLoggedIn) {
    router.push("/admin/login");
  }
  return (
    <div className="flex items-center justify-end p-4">
      {/* Right section */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSignOut}
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <IoLogOutOutline className="mr-2" size={24} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNav;
