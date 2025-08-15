import React from "react";
import Navbar from "../components/Navbar";
import Sweets from "../components/Sweets";
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function SweetsPage() {
  return (
    <div>
      <Navbar />
      <Sweets />
      <Footer/>
    </div>
  );
}
