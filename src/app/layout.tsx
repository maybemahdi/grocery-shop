"use client"
import React, { useEffect, useState } from "react";
import "./globals.css";

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
    return null; // Or a loading spinner, skeleton, or placeholder
  }

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto mt-5">{children}</div>
      </body>
    </html>
  );
}
