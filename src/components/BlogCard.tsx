/* eslint-disable @next/next/no-img-element */
import { IBlog } from "@/utils/blogs";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start shadow-lg p-4 rounded-lg h-">
      <img
        src={blog.image}
        alt="Blog image"
        className="h-[260px] w-[400px] object-cover rounded-lg"
      />
      <p className="text-sm text-gray-500 font-questrial mt-1">{blog.date}</p>
      <h5 className="font-semibold text-lg">{blog.text}</h5>
      <div className="flex gap-2 justify-start items-center mt-2 text-start">
        <p className="text-orange font-semibold hover:underline">
          Read More
        </p>
        <FaArrowRightLong className="text-orange" />
      </div>
    </div>
  );
};

export default BlogCard;
