import { FaBreadSlice, FaSeedling, FaBirthdayCake, FaMugHot, FaGraduationCap } from "react-icons/fa";
import "../index.css"; // make sure fonts are imported globally here
import offerBanner from "../assets/images/offer-banner.png"; // image variable

const features = [
  {
    icon: <FaBreadSlice className="text-[#D99A6C] text-4xl sm:text-5xl" />,
    title: "Fresh, Handcrafted Daily",
    description:
      "Every morning, our bakers start early to bring you the freshest breads, pastries, and cakes—made from scratch using real, wholesome ingredients.",
  },
  {
    icon: <FaSeedling className="text-[#D99A6C] text-4xl sm:text-5xl" />,
    title: "Locally Sourced Ingredients",
    description:
      "We partner with local farms and suppliers to ensure the highest quality and support our community.",
  },
  {
    icon: <FaBirthdayCake className="text-[#D99A6C] text-4xl sm:text-5xl" />,
    title: "Unique & Custom Creations",
    description:
      "From classic croissants to custom birthday cakes, we bake with creativity and care—tailored to your tastes and special occasions.",
  },
  {
    icon: <FaMugHot className="text-[#D99A6C] text-4xl sm:text-5xl" />,
    title: "Warm, Welcoming Atmosphere",
    description:
      "We’re more than just a bakery—we’re your neighborhood spot for sweet treats, good coffee, and friendly smiles.",
  },
  {
    icon: <FaGraduationCap className="text-[#D99A6C] text-4xl sm:text-5xl" />,
    title: "Passion for Excellence",
    description:
      "Baking is our passion, and it shows in every detail—from the golden crust to the last crumb.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
    <section className="bg-[#FFF8F0] py-12 px-4 sm:px-6 lg:px-12">
      <h2
        className="text-center text-2xl sm:text-3xl font-bold text-[#D99A6C] mb-10"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm text-center p-6 flex flex-col items-center border border-gray-300"
          >
            <div className="bg-[#F3E5AB] p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-[#D99A6C] mb-2"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              {feature.title}
            </h3>
            <p
              className="text-sm sm:text-base font-semibold text-black leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {feature.description}
            </p>
          </div>


      
        ))}

      </div>
        <h2 className="mt-10 text-center text-2xl sm:text-3xl font-bold text-[#D99A6C] mb-10"
        style={{ fontFamily: "'League Spartan', sans-serif" }}>
        OFFERS & DEALS
        </h2>

        <div className="w-full">
    <img
    src={offerBanner}
    alt="Offers and Deals"
    className="w-full h-auto object-cover rounded-lg shadow-lg"
  />
</div>
    </section>
    </>
  );
}
