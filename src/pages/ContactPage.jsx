import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact"
import Branches from "../components/Branch";
import Branches2 from "../components/Branch2"
import Branches3 from "../components/Branch3"
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Branches />
      <Branches2 />
      <Branches3 />
      <Footer/>
    </div>
  );
}
