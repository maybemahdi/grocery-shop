/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the current product is already in the cart
    const isProductInCart = cart.some(
      (cartItem: IProduct) =>
        cartItem.productName === product.productName &&
        cartItem.price === product.price
    );
    setAddedToCart(isProductInCart);
  }, [product]);

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to add items to the cart.");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cart.some(
      (cartItem: IProduct) =>
        cartItem.productName === product.productName &&
        cartItem.price === product.price
    );
    if (isProductInCart) {
      return toast.error("Already in Cart");
    }
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAddedToCart(true);
    toast.success("Product Added to Cart");
  };
  return (
    <div
      className={`rounded-[20px] bg-white shadow-md ${
        product.isSmall ? "px-1 py-2 gap-2" : "px-3 py-[10px]"
      } flex flex-col gap-3`}
    >
      <div className="rounded-[16px] bg-[#F4F6F6]">
        <img
          src={image}
          alt=""
          className={`w-[200px] h-[200px] mx-auto ${
            product.isSmall && "h-20 w-20"
          }`}
        />
      </div>
      <h5 className="text-text text-[12px] md:text[18px] font-medium text-center">
        {product.productName}
      </h5>
      <p className="font-questrial text-center">${product.price}/KG</p>
      <button
        onClick={handleAddToCart}
        className={`hover:bg-orange hover:text-white text-text bg-white border border-[#D9D9D9] rounded-lg py-2 px-8 w-full font-normal transition-all duration-300 ${
          product.isSmall && "p-2"
        }`}
      >
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
