"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Loading from "@/components/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  // State to track whether the component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only on the client side after the component has mounted
  useEffect(() => {
    // Mark the component as mounted (client-side)
    setIsMounted(true);
  }, []);

  // Avoid rendering layout until it's mounted on the client
  if (!isMounted) {
    return <Loading />; // Or a loading spinner, skeleton, or placeholder
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
