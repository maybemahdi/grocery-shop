/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

interface IProduct {
  productName: string;
  price: number;
  isSmall?: boolean;
}

const ProductCard = ({
  product,
  image,
}: {
  product: IProduct;
  image: string;
}) => {
  return (
    <div
      className={`rounded-[20px] bg-white shadow-md ${
        product.isSmall ? "px-1 py-2 gap-2" : "px-3 py-[10px]"
      } flex flex-col gap-3`}
    >
      <div className="rounded-[16px] bg-[#F4F6F6]">
        <img src={image} alt="" className={`w-[200px] h-[200px] mx-auto ${product.isSmall && "h-20 w-20"}`} />
      </div>
      <h5 className="text-text text-[12px] md:text[18px] font-medium text-center">
        {product.productName}
      </h5>
      <p className="font-questrial text-center">${product.price}/KG</p>
      <button className={`hover:bg-orange hover:text-white text-text bg-white border border-[#D9D9D9] rounded-lg py-2 px-8 w-full font-normal transition-all duration-300 ${product.isSmall && "p-2"}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
