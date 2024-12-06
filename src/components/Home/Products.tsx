"use client";
import React, { useState } from "react";
import SectionTag from "../SectionTag";
import SectionHead from "../SectionHead";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShineSkeleton from "../ShineSkeleton";
import ProductCard from "../ProductCard";
import imageLinks from "@/utils/ProductImageLinks";

interface IProduct {
  productName: string;
  price: number;
  categoryId: string;
}

const categoryMapper = {
  fruits: "6751516f9c52879c1fde6558",
  Salad: "6751569e0e539396658e60a9",
  Vegetable: "6751584feaeaa5cc21bbe21b",
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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
  if (isLoading) {
    return (
      <div className="px-8 md:px-[90px] my-20">
        <ShineSkeleton />
      </div>
    );
  }

  const selectedCategoryId =
    selectedCategory === "All"
      ? ""
      : categoryMapper[selectedCategory as keyof typeof categoryMapper];

  // Filter products based on the selected category
  const filteredProducts = products.filter((product: IProduct) =>
    selectedCategoryId ? product.categoryId === selectedCategoryId : true
  );

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);
  return (
    <div className="my-20 px-8 md:mx-[90px]">
      <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto">
        <SectionTag text={"Our Products"} />
        <SectionHead text={"Our Fresh Products"} />
        <p className="text-para text-center text-sm font-normal w-full md:w-[60%] font-questrial">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>
      {/* Filter buttons */}
      <div className="flex gap-4 items-center justify-center my-6 flex-wrap">
        {["All", "fruits", "Vegetable", "Salad"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              refetch();
            }}
            className={`${
              selectedCategory === category
                ? "bg-main text-white"
                : "bg-white text-text"
            } hover:bg-main hover:text-white text-text border border-[#D9D9D9] rounded-lg py-2 px-8 w-fit font-normal transition-all duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {productsToShow.length > 0 ? (
          productsToShow.map((product: IProduct, idx: number) => {
            const productImage = imageLinks[idx % imageLinks.length];
            return (
              <ProductCard key={idx} product={product} image={productImage} />
            );
          })
        ) : (
          <p>No products available.</p>
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
