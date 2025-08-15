import React from "react";
import Navbar from "../components/Navbar";
import CakeCategory from "../components/CakeCategory"
import CakeCategory2 from "../components/CakeCategory2";
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function CakeCategoryPage() {
  return (
    <div>
      <Navbar />
      <CakeCategory />
      <CakeCategory2 />
      <Footer/>
    </div>
  );
}
