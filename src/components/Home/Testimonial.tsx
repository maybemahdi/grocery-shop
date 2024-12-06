import SectionTag from "../SectionTag";
import SectionHead from "../SectionHead";
import { FaQuoteLeft, FaRegStar, FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  
  return (
    <div className="my-20 px-8 md:mx-[90px]">
      <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto mb-10">
        <SectionTag text={"Testimonial"} />
        <SectionHead text={"What Our Customers Say"} />
        <p className="text-para text-center text-sm font-normal w-full md:w-[60%] font-questrial">
          Don't just take our word for it—here's what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </div>
      <div className="w-full rounded-lg flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-16">
        <img
          src="/images/testi.png"
          className="w-[287] h-[396px] object-cover rounded-[200px]"
        />

        <div className="w-full lg:w-[65%] relative bg-[#F4F6F6] p-8 rounded-[24px]">
          <div className="flex items-center justify-between relative">
          </div>
          <p className=" text-justify text-[0.9rem] my-3 text-text font-questrial">
            "I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <p className="text-text-font-bold">
              Jane Doe - <span className="font-normal">Professional chef</span>
            </p>
          </div>
          <FaQuoteLeft className=" absolute bottom-[-10%] right-[0%] text-[2rem] text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
