import React from "react";
import Navbar from "../components/Navbar";
import Cookies from "../components/Cookies";
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function CookiesPage() {
  return (
    <div>
      <Navbar />
      <Cookies />
      <Footer/>
    </div>
  );
}
