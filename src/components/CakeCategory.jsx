import React, { useState } from "react";
import { useLocation } from "react-router-dom";



const CakeCategory = () => {
  const location = useLocation();
  const { name, price, image } = location.state || {};

  const basePrice = Number(price?.replace(/[^0-9]/g, "")) || 0;

  const [selectedWeight, setSelectedWeight] = useState("500 G");
  const [quantity, setQuantity] = useState(1);

  const weightOptions = [
    { label: "500 G", multiplier: 0.5 },
    { label: "1 KG", multiplier: 1 },
    { label: "2 KG", multiplier: 2 },
    { label: "3 KG", multiplier: 3 },
    { label: "4 KG", multiplier: 4 },
    { label: "5 KG", multiplier: 5 },
  ];

  const currentPrice =
    basePrice *
    (weightOptions.find((w) => w.label === selectedWeight)?.multiplier || 1) *
    quantity;

  return (
    <section className="bg-[#FAF3EC] font-[Poppins]">
      {/* Top Product Section */}
      <div className="py-10 px-6 max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="flex-1">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full h-auto object-cover"
          />

          {/* Pincode input */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">
              ENTER YOUR PINCODE*
            </label>
            <input
              type="text"
              placeholder="Enter pincode"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h2 className="text-[#E49D66] text-2xl font-bold">{name}</h2>
          <p className="text-gray-700 mt-4">
            This delectable treat is a heavenly combination of rich, velvety
            chocolate and a melt-in-your-mouth texture. Whether you’re a
            chocolate lover or looking to satisfy your sweet tooth, {name} is
            the perfect choice.
          </p>

          {/* Price */}
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-black">₹ {currentPrice}</h3>
            <p className="text-sm text-gray-500">INCL. OF ALL TAXES</p>
          </div>

          {/* Weight options */}
          <div className="mt-6">
            <p className="font-bold mb-2">WEIGHT:</p>
            <div className="flex flex-wrap gap-2">
              {weightOptions.map((w) => (
                <button
                  key={w.label}
                  onClick={() => setSelectedWeight(w.label)}
                  className={`px-4 py-2 border rounded-lg font-semibold ${
                    selectedWeight === w.label
                      ? "bg-yellow-400 border-yellow-500"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-bold mb-2">QUANTITY:</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="bg-gray-200 px-3 py-1 rounded-lg font-bold text-lg"
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="bg-gray-200 px-3 py-1 rounded-lg font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold text-white">
              ADD TO CART
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-6 pb-12 text-black max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Left icons */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl">🔒</span>
            <p className="font-semibold">100% secure payment</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">⏱️</span>
            <p className="font-semibold">24 hour preparation time</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">🌱</span>
            <p className="font-semibold">100% vegetarian</p>
          </div>
          <p className="text-sm mt-2">
            ** Note that all orders will be dispatched after 24 hours **
          </p>
        </div>

        {/* Right details */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">Nutrition:</p>
            <p className="text-sm mt-1">
              Serving Size (100g) (Amount per serving Calories 323 Kcal, Fat 11g,
              Saturated Fat 7g, Trans Fat 0g, Cholesterol 11mg, Sodium 278mg,
              Carbohydrate 51g, Sugar 26g, Protein 5g) “An average active adult
              requires 2,000 kcal energy per day, however, calorie need may vary”
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">Ingredients:</p>
            <p className="text-sm mt-1">
              Chocolate Sponge, Sugar Syrup, Chocolate Cream, Chocolate Truffle
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">Allergies</p>
            <p className="text-sm mt-1">
              Allergy Advice: Contains: Milk. Made in factory that also handles:
              Celery, Mustard, Sesame, Peanuts, Tree Nuts, Soya, Milk and Milk
              Products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeCategory;
