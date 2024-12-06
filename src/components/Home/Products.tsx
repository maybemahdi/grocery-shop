"use client";
import React, { useState } from "react";
import SectionTag from "../SectionTag";
import SectionHead from "../SectionHead";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShineSkeleton from "../ShineSkeleton";
import ProductCard from "../ProductCard";

interface IProduct {
  images: string[];
  productName: string;
  price: string;
}

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`
      );
      return data.data;
    },
  });
  const imageLinks = [
    "https://i.ibb.co.com/2v6x6Xb/banana.jpg",
    "https://i.ibb.co.com/1RPZrYQ/coconut.jpg",
    "https://i.ibb.co.com/9ZPsVmC/Guava.png",
    "https://i.ibb.co.com/crRM5H4/pomegrate.webp",
    "https://i.ibb.co.com/NmJ6w94/Kiwi.jpg",
    "https://i.ibb.co.com/xzVYKL1/mustard.png",
    "https://i.ibb.co.com/QMRmJGn/massrom.webp",
    "https://i.ibb.co.com/YPyh8kW/Cauliflower.png",
    "https://i.ibb.co.com/8gKNXM0/Eggplant.png",
    "https://i.ibb.co.com/dK1D6GG/SnapPea.png",
    "https://i.ibb.co.com/4f4CwCW/Onion.png",
    "https://i.ibb.co.com/RynQHmG/Caesear-Salad.webp",
    "https://i.ibb.co.com/wr2tsVR/Corn-Salad.jpg",
    "https://i.ibb.co.com/446HSWG/Fruit-Salad.jpg",
  ];

  if (isLoading) {
    return (
      <div className="px-8 md:px-[90px] my-20">
        <ShineSkeleton />
      </div>
    );
  }
  const productsToShow = showAll ? products : products.slice(0, 8);
  return (
    <div className="my-20 px-8 md:mx-[90px]">
      <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto">
        <SectionTag text={"Our Products"} />
        <SectionHead text={"Our Fresh Products"} />
        <p className="text-para text-center text-sm font-normal w-full md:w-[60%]">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {productsToShow.length > 0 ? (
          productsToShow.map((product: IProduct, idx: number) => {
            // Use imageLinks[idx] to get the corresponding image for each product
            const productImage = imageLinks[idx % imageLinks.length]; // In case products exceed image links
            return (
              <ProductCard
                key={idx}
                product={product}
                image={productImage} // Pass the image to ProductCard
              />
            );
          })
        ) : (
          <p>No products available.</p> // Fallback message when no products
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="hover:bg-orange hover:text-white text-orange bg-white border border-orange rounded-lg py-2 px-8 w-fit font-normal transition-all duration-300"
        >
          {showAll ? "Show Less Products" : "See All Products"}
        </button>
      </div>
    </div>
  );
};

export default Products;
