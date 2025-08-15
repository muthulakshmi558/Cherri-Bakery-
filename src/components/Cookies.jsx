import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

// Images
import chocolatecookiesImg from "../assets/images/chocolatecookies.png";
import sugarcookiesImg from "../assets/images/sugarcookies.png";
import oatmealcookiesImg from "../assets/images/oatmealcookies.png";
import snickerdoodlesImg from "../assets/images/snickerdoodles.png";
import macaronsImg from "../assets/images/macroons.png";
import coconutcookiesImg from "../assets/images/coconutcookies.png";
import buttercookiesImg from "../assets/images/butter-cookies.png";
import alfaImg from "../assets/images/alfa.png";
import biscottiImg from "../assets/images/biscotti.png";
import whoopiesImg from "../assets/images/whoppies.png";
import lemoncookiesImg from "../assets/images/lemon-cookies.png";
import amaretticookiesImg from "../assets/images/amaretticookies.png";
import flower from "../assets/images/flower.png";

const Sweets = () => {
  const products = [
    { name: "CHOCOLATE COOKIES", types: "FROM :र600 PER KG", image: chocolatecookiesImg },
    { name: "SUGAR COOKIES", types: "FROM :र700 PER KG", image: sugarcookiesImg },
    { name: "OATMEAL COOKIES", types: "FROM :र850 PER KG", image: oatmealcookiesImg },
    { name: "SNICKER DOODLES", types: "FROM :र500 PER KG", image: snickerdoodlesImg },
    { name: "MACARONS", types: "FROM :र650 PER KG", image: macaronsImg },
    { name: "COCONUT COOKIES", types: "FROM :र550 PER KG", image: coconutcookiesImg },
    { name: "BUTTER COOKIES", types: "FROM :र1200 PER KG", image: buttercookiesImg },
    { name: " ALFAJORES", types: "FROM :र600 PER KG", image: alfaImg },
    { name: "BISCOTTI", types: "FROM :र1250 PER KG", image: biscottiImg },
    { name: "WHOOPIE PIES", types: "FROM :र900 PER KG", image: whoopiesImg },
    { name: "LEMON COOKIES", types: "FROM :र700 PER KG", image: lemoncookiesImg },
    { name: "AMARETTI COOKIES", types: "FROM :र850 PER KG", image: amaretticookiesImg },
 
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
         COOKIES
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

      <div className="max-w-[80%] mx-auto mt-8">
        <img
          src={flower}
          alt="Offers and Deals"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Sweets;
