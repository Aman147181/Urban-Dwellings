import React from "react";
import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
import AboutUs from "../components/AboutUs";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HotDeals />
      <AboutUs />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
