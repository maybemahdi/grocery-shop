import React from "react";

const SectionTag = ({ text }: { text: string }) => {
  return (
    <button className="text-main text-sm md:text-[20px] font-medium shadow-md rounded-lg cursor-auto w-fit p-1">
      {text}
    </button>
  );
};

export default SectionTag;
