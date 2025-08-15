import React from "react";
import Navbar from "../components/Navbar";
import OurProducts from "../components/OurProducts"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function OurProduct() {
  return (
    <div>
      <Navbar />
      <OurProducts />
      <Footer/>
    </div>
  );
}
