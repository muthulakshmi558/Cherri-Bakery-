import React from "react";
import img1 from "../assets/images/review1.jpg";
// import img2 from "../assets/images/review.png";

const Reviews = () => {
  return (
    <section className="bg-[#FFF8F0] py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#D57A66] mb-10 font-['League_Spartan']">
        OUR CUSTOMERS LOVE
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          <img
            src={img1}
            alt="Customer"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <p className="text-black font-semibold leading-relaxed font-['Poppins']">
            "A hidden gem with real passion behind every bake." <br />
            “You can taste the quality in every bite. It’s clear they care deeply
            about their craft.”
          </p>
          <p className="mt-2 text-black font-semibold font-['Poppins']">
            — Daniel K., Chef & Culinary Enthusiast
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          <img
            src={img1}
            alt="Customer"
            className="w-20 h-20 rounded-full object-cover mb-4 border border-[#D57A66] p-1"
          />
          <p className="text-black font-semibold leading-relaxed font-['Poppins']">
            "The kids love the cookies—and so do I!" <br />
            “We stop by after school for their chocolate chip cookies. Soft,
            gooey, and always fresh.”
          </p>
          <p className="mt-2 text-black font-semibold font-['Poppins']">— Lena W., Mom of Two</p>
        </div>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 max-w-6xl mx-auto gap-4">
        <h3 className="text-lg sm:text-xl font-bold">Direct visits chat item available</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">see menu</span>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
