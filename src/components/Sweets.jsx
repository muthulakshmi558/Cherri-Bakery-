import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

// Images
import milkbarfiImg from "../assets/images/milkbarfi.png";
import kajukatriImg from "../assets/images/kajukatri.png";
import gulabjamunImg from "../assets/images/gulabjamun.png";
import rasmalaiImg from "../assets/images/rasmalai.png";
import ladduImg from "../assets/images/laddu.png";
import rusagulyImg from "../assets/images/rusaguly.png";
import jalebiImg from "../assets/images/jalebi.png";
import mysorepakImg from "../assets/images/mysorepak.png";
import kajaImg from "../assets/images/kaja.png";
import thirunelvelihalwaImg from "../assets/images/thirunelveli-halwa.png";
import palkovaImg from "../assets/images/palkova.png";
import bengalimalpuaImg from "../assets/images/bengalimalpua.png";
import flower from "../assets/images/flower.png";

const Sweets = () => {
  const products = [
    { name: "MILK PARFI", types: "FROM :र600 PER KG", image: milkbarfiImg },
    { name: "KAJU KATRI", types: "FROM :र700 PER KG", image: kajukatriImg },
    { name: "GULAB JAMUN", types: "FROM :र850 PER KG", image: gulabjamunImg },
    { name: "RAS MALAI", types: "FROM :र500 PER KG", image: rasmalaiImg },
    { name: "LADDU", types: "FROM :र650 PER KG", image: ladduImg },
    { name: "RUSAGULY", types: "FROM :र550 PER KG", image: rusagulyImg },
    { name: "JALEBI", types: "FROM :र1200 PER KG", image: jalebiImg },
    { name: "MYSORE PAK", types: "FROM :र600 PER KG", image: mysorepakImg },
    { name: "KAJA", types: "FROM :र1250 PER KG", image: kajaImg },
    { name: "TIRUNELVELI HALWA", types: "FROM :र900 PER KG", image: thirunelvelihalwaImg },
    { name: "PALKOVA", types: "FROM :र700 PER KG", image: palkovaImg },
    { name: "BENGALI MALPUA", types: "FROM :र850 PER KG", image: bengalimalpuaImg },
 
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
          SWEETS
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
