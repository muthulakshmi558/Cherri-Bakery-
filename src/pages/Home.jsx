import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs"
import FAQSection from "../components/FAQSection"
import Reviews from "../components/Reviews"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FAQSection />
      <Reviews />
      <Footer/>
    </div>
  );
}
