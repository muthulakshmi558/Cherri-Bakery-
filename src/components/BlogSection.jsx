import React from "react";
import breadImage from "../assets/images/blog1.png"; // update path to your image

const BlogSection = () => {
  return (
    <section className="bg-[#FAF3EC] py-12 px-6 md:px-12 font-[Poppins]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={breadImage}
            alt="Bakery Bread"
            className="rounded-2xl shadow-lg w-full md:w-[90%]"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-center md:text-left">
          <p className="text-[#4B69A9] uppercase tracking-widest font-semibold mb-2">
            Welcome to Our Bakery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Freshly Baked Everyday
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At our bakery, we bring you the warm comfort of freshly baked bread 
            made from the finest ingredients. Every loaf is a masterpiece, 
            baked to perfection and served with love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
