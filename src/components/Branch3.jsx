import React from "react";
import branchImg from "../assets/images/branch3.png"; // your uploaded image path

const Branches3 = () => {
  return (
    <section className="bg-[#FFF8F0] py-12 px-6">
      <div className="max-w-7xl mx-auto">
  

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
              <p className="font-semibold">Karur</p>
              <p>22, Kovai Road, Karur – 639002</p>
            </div>

            <div>
              <p className="font-semibold">Nagercoil</p>
              <p>16, Cape Road, Vadasery, Nagercoil – 629001</p>
            </div>

            <div>
              <p className="font-semibold">Cuddalore</p>
              <p>8, Beach Road, Cuddalore – 607001</p>
            </div>

            <div>
              <p className="font-semibold">Villupuram</p>
              <p>19, Tindivanam Road, Villupuram – 605602</p>
            </div>

            <div>
              <p className="font-semibold">Namakkal</p>
              <p>5, Salem Road, Namakkal – 637001</p>
            </div>

            <div>
              <p className="font-semibold">Tiruppur</p>
              <p>20, Avinashi Road, Tiruppur – 641603</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches3;
