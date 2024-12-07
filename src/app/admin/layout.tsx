"use client";

import React, { useState } from "react";
import "../globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Admin/Sidebar";
import TopNav from "@/components/Admin/TopNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

   const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-screen w-full">
          {/* admin sidebar */}
          <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
          <div className="flex flex-1 flex-col">
            {/* admin header */}
            <TopNav setOpen={setOpenSidebar} />
            <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}
