"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Loading from "@/components/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import TopNav from "@/components/Admin/TopNav";
import Sidebar from "@/components/Admin/Sidebar";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      router.push("/admin/login");
    }
  }, [router]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head />
      <body>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-4">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-auto">
              {/* Top Navigation */}
              <div className="bg-white shadow-md">
                <TopNav />
              </div>

              {/* Content */}
              <main className="flex-1 p-6 bg-gray-100">{children}</main>
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
