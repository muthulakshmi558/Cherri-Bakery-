import React from "react";
import cakeImage from "../assets/blog2.png"; // Update with your image path

const BlogSection3 = () => {
  return (
    <section className="bg-[#FAF3EC] font-[Poppins] py-10 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-left space-y-6">
          {/* Item 1 */}
          <div>
            <h2 className="text-[#E49D66] font-semibold text-xl mb-2">
              Behind-the-Scenes Stories
            </h2>
            <p className="text-black">
              Get a peek inside our kitchen, meet our talented bakers, and learn
              what goes into creating your favorite pastries, cakes, and loaves.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h2 className="text-[#E49D66] font-semibold text-xl mb-2">
              Seasonal Specials & New Arrivals
            </h2>
            <p className="text-black">
              Be the first to know about our latest menu additions, seasonal
              treats, and limited-edition goodies.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-[#E49D66] font-semibold text-xl mb-2">
              Recipes & Baking Tips
            </h2>
            <p className="text-black">
              Try your hand at some of our favorite recipes and get expert tips
              to help you bake like a pro at home.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h2 className="text-[#E49D66] font-semibold text-xl mb-2">
              Customer Spotlights & Events
            </h2>
            <p className="text-black">
              We love our community! Read about our amazing customers, featured
              events, and special moments shared in our bakery.
            </p>
          </div>

          {/* Item 5 */}
          <div>
            <h2 className="text-[#E49D66] font-semibold text-xl mb-2">
              Sustainability & Ingredients
            </h2>
            <p className="text-black">
              Learn more about the ingredients we use, our sourcing practices,
              and how we’re working to bake better—for you and the planet.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={cakeImage}
            alt="Cake"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Center Paragraph */}
      <div className="max-w-[900px] mx-auto mt-10 text-center">
        <p className="text-[#754C28] font-semibold text-lg leading-relaxed">
          Whether you’re here for mouthwatering ideas or curious about what’s
          next in our oven, our blog is a delicious stop on your journey. Stay
          connected with us, leave a comment, and don’t forget to subscribe so
          you never miss a crumb!
        </p>
      </div>
    </section>
  );
};

export default BlogSection3;
