import React from "react";

const SectionHead = ({ text }: { text: string }) => {
  return (
    <h3 className="text-[32px] text-center md:text-[48px] font-medium leading-normal md:font-semibold text-text ">
      {text}
    </h3>
  );
};

export default SectionHead;
