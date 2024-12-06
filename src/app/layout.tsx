"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Loading from "@/components/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

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
          <div className="w-[88%] mx-auto">
            <Nav />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
