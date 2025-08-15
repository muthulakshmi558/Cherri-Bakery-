import React from "react";
import visitImage from "../assets/images/aboutsection3.png"; // replace with your image path

export default function VisitSection() {
  return (
    <section className="bg-[#FFF8F0] py-12 px-6 font-league">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Meet the Bakery */}
        <div className="bg-[#F7EFAE] rounded-lg p-6 text-center">
          <h2 className="text-[#E38A3B] text-2xl font-bold uppercase mb-4">
            Meet the Bakery
          </h2>
          <p className="text-black font-semibold">
            Our team is made up of passionate bakers who bring skill, creativity, 
            and care to every product. From our Head Baker to our pastry chefs, 
            everyone shares a commitment to quality and customer happiness.
          </p>
        </div>

        {/* Come Visit Us */}
        <div className="text-center">
          <h2 className="text-[#E38A3B] text-2xl font-bold uppercase mb-6">
            Come Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Text */}
            <div>
              <p className="mb-4 text-black font-semibold">
                We’re serving smiles across Tamil Nadu with many franchise locations!
              </p>
              <p className="mb-6 text-black font-semibold">
                Drop by your nearest branch and enjoy our fresh, handcrafted treats.
              </p>
              <h3 className="text-[#E38A3B] text-xl font-bold mb-2">
                Head office:
              </h3>
              <p className="font-bold text-black font-semibold">
                Cherii Bakery,<br />
                No.45, Anna Salai, T.Nager,<br />
                Chennai-600 017,<br />
                Tamil Nadu, India
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={visitImage}
                alt="Bakery Illustration"
                className="max-w-xs md:max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
