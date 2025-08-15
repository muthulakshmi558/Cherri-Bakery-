import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

// Images
import blackforestcakeImg from "../assets/images/blackforestcake.png";
import tiramisucakeImg from "../assets/images/tiramisucake.png";
import kitkatcakeImg from "../assets/images/kitkatcake.png";


const CakeCategory2 = () => {
  const products = [
    { name: "BLACK FOREST CAKE", types: "FROM :र600 PER KG", image: blackforestcakeImg },
        { name: "KITKAT CAKE", types: "FROM :र850 PER KG", image: kitkatcakeImg },

    { name: "TIRAMISU CAKE", types: "FROM :र1250 PER KG", image: tiramisucakeImg },

  ];

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (name) => {
    setWishlist((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  return (
    <section className="bg-[#FAF3EC] py-10 px-6 font-[Poppins]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-[#E49D66] font-semibold text-2xl mb-8">
          YOU MAY ALSO LIKE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item, index) => {
            const card = (
              <div className="relative rounded-lg overflow-hidden">
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Stop link navigation when clicking heart
                    toggleWishlist(item.name);
                  }}
                  className="absolute top-3 right-3 bg-white/70 p-2 rounded-full hover:bg-white z-10"
                >
                  {wishlist.includes(item.name) ? (
                    <AiFillHeart className="text-red-500 text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-gray-600 text-xl" />
                  )}
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[340px] object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-0 w-full text-center">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <p className="text-sm font-bold text-black">{item.types}</p>
                </div>
              </div>
            );

            return (
              <Link
                to="/cakecategory"
                state={{
                  name: item.name,
                  price: item.types,
                  image: item.image,
                }}
                key={index}
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>


    </section>
  );
};

export default CakeCategory2;
