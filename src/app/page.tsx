import Benefits from "@/components/Benefits";
import CategoryExplore from "@/components/CategoryExplore";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import PopularProducts from "@/components/PropularProducts";
import SpecialPackage from "@/components/SpecialPackage";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategoryExplore></CategoryExplore>
      <PopularProducts></PopularProducts>
      <SpecialPackage></SpecialPackage>
      <Benefits></Benefits>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}
