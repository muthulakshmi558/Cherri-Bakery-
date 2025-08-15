import React from "react";
import { Link } from "react-router-dom"; 
import cakeImg from "../assets/images/cake.png";
import pastryImg from "../assets/images/Pastries.png"; // fixed case
import sweetsImg from "../assets/images/sweets.png";
import giftImg from "../assets/images/gift.png"; // better image if available
import savoriesImg from "../assets/images/savories.png";
import breadsImg from "../assets/images/breads.png";
import biscuitsImg from "../assets/images/biscuits.png";
import creamrollImg from "../assets/images/creamroll.png";
import muffinImg from "../assets/images/muffin.png";
import chipsImg from "../assets/images/chips.png";
import chocolateImg from "../assets/images/chocolates.png";
import ruskImg from "../assets/images/rusk.png";
import flower from "../assets/images/flower.png";

const OurProducts = () => {
  const products = [
    { name: "CAKES", types: "20 TYPES", image: cakeImg, link: "/cakes" },
    { name: "PASTRIES", types: "12 TYPES", image: pastryImg },
    { name: "SWEETS", types: "25 TYPES", image: sweetsImg, link: "/sweets" },
    { name: "GIFT BOX", types: "10 TYPES", image: giftImg },
    { name: "SEVORIES", types: "34 TYPES", image: savoriesImg }, // fixed spelling
    { name: "BREADS", types: "14 TYPES", image: breadsImg },
    { name: "COOKIES AND BISCUITS", types: "19 TYPES", image: biscuitsImg, link: "/cookies" },
    { name: "CREAM ROLL", types: "4 TYPES", image: creamrollImg },
    { name: "MUFFIN & FRUIT CAKE", types: "18 TYPES", image: muffinImg },
    { name: "CHIPS", types: "5 TYPES", image: chipsImg },
    { name: "CHOCOLATES", types: "1 TYPE", image: chocolateImg }, // fixed singular
    { name: "RUSK", types: "10 TYPES", image: ruskImg },
  ];

  return (
    <section className="bg-[#FAF3EC] py-10 px-6 font-[Poppins]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-[#E49D66] font-semibold text-2xl mb-8">
          OUR PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item, index) => {
            const content = (
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <p className="text-sm text-black">{item.types}</p>
                </div>
              </div>
            );

            // Wrap in Link if product has a link
            return item.link ? (
              <Link to={item.link} key={index}>
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
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

export default OurProducts;
