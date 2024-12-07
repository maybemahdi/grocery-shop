"use client";

import React from "react";
import Link from "next/link";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  return (
    <>
      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <ul>
          <li>
            <Link
              href="/admin/add-product"
              className="block py-2 px-4 hover:bg-gray-700 rounded-md"
            >
              Add Products
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar Overlay (for mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
