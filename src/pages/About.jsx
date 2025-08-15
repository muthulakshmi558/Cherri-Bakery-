import React from "react";
import Navbar from "../components/Navbar";
import WhyChooseUsAbout from "../components/WhyChooseUsAbout"
import AboutSection1 from "../components/AboutSection"
import VisitSection from "../components/VisitSection"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutSection1 />
      <WhyChooseUsAbout />
      <VisitSection />
      <Footer/>
    </div>
  );
}
