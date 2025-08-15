import React from "react";
import aboutImage from "../assets/images/aboutsection1.png"; // replace with your image path
import aboutImage1 from "../assets/images/aboutsection2.png"; // replace with your image path


export default function AboutSection1() {
  return (
    <section className="bg-[#FFF8F0] py-12 px-6 font-['Poppins']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="text-center  text-black md:text-left">
          <h2 className="text-[#D99A6C] text-2xl font-bold uppercase mb-6">
            About Us
          </h2>
          <p className="font-bold mb-6">
            Baking From the Heart Since 2012
          </p>
          <p className="mb-4 font-semibold">
            At Cherii Bakery, every loaf, pastry, and cake tells a story. What started
            as a small kitchen passion has blossomed into a community favorite. We believe
            in using time-honored recipes, fresh local ingredients, and a generous sprinkle
            of love in every bite.
          </p>
          <p className="mb-4 font-semibold">
            Our mission is to bring joy through handcrafted baked goods made daily with
            care and dedication. Whether it's your morning bread or a special occasion cake,
            we treat each creation as if it’s for family.
          </p>
          <p className="mb-4 font-semibold">
            We’re proud to serve our neighborhood, support local farmers, and bake a little
            happiness into every day.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="Bake it till you make it"
            className="max-w-xs md:max-w-sm rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={aboutImage1}
            alt="Bake it till you make it"
            className="max-w-xs md:max-w-sm rounded-lg "
          />
        </div>
        {/* Text Section */}
        <div className="text-center  text-black md:text-left">
          <h2 className="text-[#D99A6C] text-2xl font-bold uppercase mt-4 mb-6">
            Our Story
          </h2>
          <p className="font-bold mb-6">
            Baking From the Heart Since 2012
          </p>
          <p className="mb-4 font-semibold">
            At Cherii Bakery, every loaf, pastry, and cake tells a story. What started
            as a small kitchen passion has blossomed into a community favorite. We believe
            in using time-honored recipes, fresh local ingredients, and a generous sprinkle
            of love in every bite.
          </p>

        </div>

  
      </div>
    </section>
  );
}
