import BlogCard from "@/components/BlogCard";
import SectionHead from "@/components/SectionHead";
import SectionTag from "@/components/SectionTag";
import blogs, { IBlog } from "@/utils/blogs";
import React from "react";

const page = () => {
  return (
    <div className="mt-[150px] mb-20 ">
      <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto mb-10">
        <SectionTag text={"Our Blog"} />
        <SectionHead text={"Fresh Harvest Blog"} />
        <p className="text-para text-center text-sm font-normal w-full md:w-[60%] font-questrial">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center px-8 md:px-[90px]">
        {blogs.map((blog: IBlog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default page;
