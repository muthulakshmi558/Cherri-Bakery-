import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

// Images
import blackforestcakeImg from "../assets/images/blackforestcake.png";
import chococakeImg from "../assets/images/chococake.png";
import redvelvetcakeImg from "../assets/images/redvelvetcake.png";
import venillaspongecakeImg from "../assets/images/venillaspongecake.png";
import butterscotchcakeImg from "../assets/images/butterscotchcake.png";
import pineapplecakeImg from "../assets/images/pineapplecake.png";
import chessecakeImg from "../assets/images/chessecake.png";
import carrotcakeImg from "../assets/images/carrotcake.png";
import tiramisucakeImg from "../assets/images/tiramisucake.png";
import fruitcakeImg from "../assets/images/fruitcake.png";
import coffeecakeImg from "../assets/images/coffeecake.png";
import kitkatcakeImg from "../assets/images/kitkatcake.png";
import rainbowcakeImg from "../assets/images/rainbowcake.png";
import oreocakeImg from "../assets/images/oreocake.png";
import blueberrycakeImg from "../assets/images/blueberrycake.png";
import rasamalaiImg from "../assets/images/rasamalai.png";
import strawberrycakeImg from "../assets/images/strawberrycake.png";
import customImg from "../assets/images/custom.png";
import flower from "../assets/images/flower.png";

const Cakes = () => {
  const products = [
    { name: "BLACK FOREST CAKE", types: "FROM :र600 PER KG", image: blackforestcakeImg },
    { name: "CHOCOLATE CAKE", types: "FROM :र700 PER KG", image: chococakeImg },
    { name: "REDVELVET CAKE", types: "FROM :र850 PER KG", image: redvelvetcakeImg },
    { name: "VENILLA SPONGE CAKE", types: "FROM :र500 PER KG", image: venillaspongecakeImg },
    { name: "BUTTER SCOTCH CAKE", types: "FROM :र650 PER KG", image: butterscotchcakeImg },
    { name: "PINEAPPLE CAKE", types: "FROM :र550 PER KG", image: pineapplecakeImg },
    { name: "CHEESE CAKE", types: "FROM :र1200 PER KG", image: chessecakeImg },
    { name: "CARROT CAKE", types: "FROM :र600 PER KG", image: carrotcakeImg },
    { name: "TIRAMISU CAKE", types: "FROM :र1250 PER KG", image: tiramisucakeImg },
    { name: "FRUIT CAKE", types: "FROM :र900 PER KG", image: fruitcakeImg },
    { name: "COFFEE CAKE", types: "FROM :र700 PER KG", image: coffeecakeImg },
    { name: "KITKAT CAKE", types: "FROM :र850 PER KG", image: kitkatcakeImg },
    { name: "RAINBOW CAKE", types: "FROM :र1100 PER KG", image: rainbowcakeImg },
    { name: "OREO CAKE", types: "FROM :र700 PER KG", image: oreocakeImg },
    { name: "BLUEBERRY CAKE", types: "FROM :र1050 PER KG", image: blueberrycakeImg },
    { name: "RASAMALAI CAKE", types: "FROM :र900 PER KG", image: rasamalaiImg },
    { name: "STRAWBERRY CREAM CAKE", types: "FROM :र700 PER KG", image: strawberrycakeImg },
    { name: "CUSTOMIZE THEME CAKE", types: "FROM :र850 PER KG", image: customImg },
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
          CAKES
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

export default Cakes;
