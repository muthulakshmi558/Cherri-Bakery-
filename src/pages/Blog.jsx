import React from "react";
import Navbar from "../components/Navbar";
import BlogSection from "../components/BlogSection";
import BlogSection2 from "../components/BlogSection2"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <BlogSection />
      <BlogSection2 />
      <Footer/>
    </div>
  );
}
