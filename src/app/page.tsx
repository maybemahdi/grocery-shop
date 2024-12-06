import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs";
import FruitBundlePromo from "@/components/Home/FruitBundlePromo";
import Products from "@/components/Home/Products";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <About />
      <FruitBundlePromo />
      <Testimonial />
      <Blogs />
    </div>
  );
}
