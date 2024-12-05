import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div
      className="boxShadow px-10 w-full min-h-full flex flex-col justify-center"
      style={{
        background: `url('https://i.ibb.co/02DvRcV/404.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">
        Go Home , You’re Drunk!
      </h1>

      <Link href={"/"} className="py-3 px-8 w-max rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5">
        BACK TO HOME
      </Link>
    </div>
  );
};

export default Page404;
