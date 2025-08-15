import React from "react";
import Navbar from "../components/Navbar";
import Cakes from "../components/Cakes"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function CakesPage() {
  return (
    <div>
      <Navbar />
      <Cakes />
      <Footer/>
    </div>
  );
}
