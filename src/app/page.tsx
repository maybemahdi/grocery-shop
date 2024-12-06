"use client";
import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <div className="my-20">hello</div>
    </div>
  );
}
