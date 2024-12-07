"use client";
import React from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const queryClient = new QueryClient();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head />
      <body>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <div className="w-[88%] mx-auto">{!isAdmin && <Nav />}</div>
          <div>{children}</div>
          <div>{!isAdmin && <Footer />}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
