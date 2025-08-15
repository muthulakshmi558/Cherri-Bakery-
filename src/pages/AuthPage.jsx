import React from "react";
import Navbar from "../components/Navbar";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer"
import "swiper/css";
import "swiper/css/autoplay";

export default function AuthPage() {
  return (
    <div>
      <Navbar />
      <AuthForm/>
      <Footer/>
    </div>
  );
}
