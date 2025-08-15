import React from "react";
import branchImg from "../assets/images/branch2.png"; // your uploaded image path

const Branches2 = () => {
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
              <p className="font-semibold">Erode</p>
              <p>9, Brough Road, Erode – 638001</p>
            </div>

            <div>
              <p className="font-semibold">Vellore</p>
              <p>14, Katpadi Road, Gandhi Nagar, Vellore – 632006</p>
            </div>

            <div>
              <p className="font-semibold">Thoothukudi (Tuticorin)</p>
              <p>6, Beach Road, Tuticorin – 628001</p>
            </div>

            <div>
              <p className="font-semibold">Thanjavur</p>
              <p>10, Medical College Road, Thanjavur – 613004</p>
            </div>

            <div>
              <p className="font-semibold">Dindigul</p>
              <p>4, GTN Road, Dindigul – 624005</p>
            </div>

            <div>
              <p className="font-semibold">Kanchipuram</p>
              <p>3, Ekambaranathar Sannathi Street, Kanchipuram – 631502</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches2;
