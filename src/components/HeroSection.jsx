import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import banner1 from "../assets/images/b1.png";
import banner2 from "../assets/images/b2.png";
import banner3 from "../assets/images/b3.png";
import banner4 from "../assets/images/b4.png";

const banners = [
  {
    image: banner1,

    btnText: "EXPLORE NOW",
  },
  {
    image: banner4,

    btnText: "EXPLORE NOW",
  },
  {
    image: banner2,

    btnText: "EXPLORE NOW",
  },
  {
    image: banner3,

    btnText: "EXPLORE NOW",
  },
];

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            {/* Text + Button Box */}
            <div
              className="
                absolute 
                top-32 left-16
                sm:top-20 sm:left-16 
                md:top-28 md:left-16 
                lg:top-40 lg:left-24
                bg-opacity-80 p-3 sm:p-4 md:p-5 lg:p-6
                max-w-xs sm:max-w-sm md:max-w-md
              "
            >
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-white text-sm sm:text-base mb-3 drop-shadow-md">
                {banner.text}
              </p>
              <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full shadow-lg hover:scale-105 transition">
                {banner.btnText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
