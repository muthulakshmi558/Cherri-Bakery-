import React from "react";
import branchImg from "../assets/images/branch1.png"; // your uploaded image path

const Branches = () => {
  return (
    <section className="bg-[#FFF8F0] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#D99A6C] mb-10 uppercase">
          Our Branches Across Tamil Nadu
        </h2>

        {/* Flex Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={branchImg}
              alt="Cheri's Bakery Branch"
              className="rounded-2xl  w-full md:w-[90%]"
            />
          </div>

          {/* Right Content */}
          <div className="text-black text-lg leading-relaxed space-y-6">
            <div>
              <p className="font-semibold">Chennai</p>
              <p>No. 45, Anna Salai, T. Nagar, Chennai – 600017</p>
            </div>

            <div>
              <p className="font-semibold">Coimbatore</p>
              <p>12, DB Road, RS Puram, Coimbatore – 641002</p>
            </div>

            <div>
              <p className="font-semibold">Madurai</p>
              <p>28, KK Nagar Main Road, Madurai – 625020</p>
            </div>

            <div>
              <p className="font-semibold">Tiruchirappalli (Trichy)</p>
              <p>7, Salai Road, Thillai Nagar, Trichy – 620018</p>
            </div>

            <div>
              <p className="font-semibold">Salem</p>
              <p>15, Five Roads, Fairlands, Salem – 636016</p>
            </div>

            <div>
              <p className="font-semibold">Tirunelveli</p>
              <p>11, South Bypass Road, Palayamkottai, Tirunelveli – 627002</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
