import faqImage from "../assets/images/faq-section.png";
import flower from "../assets/images/flower.png"; // image variable

const FAQSection = () => {
  return (
    <>
    <section className="bg-[#FFF8F0] py-10 px-4 md:px-16">
      {/* Centered Heading */}
      <h2
        className="text-center text-2xl md:text-3xl font-bold text-[#D99A6C] mb-10"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        COMMON QUESTION FOR CUSTOMERS
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-black">
          <div>
            <h3
              className="font-bold text-lg text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              1. What kind of content do you post on your blog?
            </h3>
            <p
              className="text-sm mt-4 font-semibold sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We share a variety of content including baking tips, behind-the-scenes stories from our bakery, seasonal updates, recipes, product highlights, and community events.
            </p>
          </div>

          <div>
            <h3
              className="font-bold text-lg text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              2. How often do you update the blog?
            </h3>
            <p
              className="text-sm mt-4 font-semibold sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We aim to post new content at least once or twice a month. Check back regularly or subscribe to our newsletter for updates!
            </p>
          </div>

          <div>
            <h3
              className="font-bold text-lg text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              3. Can I request a blog topic or recipe?
            </h3>
            <p
              className="text-sm mt-4 font-semibold sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Absolutely! We love hearing from our readers. If there's a recipe or topic you’d like us to cover, feel free to contact us or leave a comment on a blog post.
            </p>
          </div>

          <div>
            <h3
              className="font-bold text-lg text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              4. Are the recipes you share easy to follow for beginners?
            </h3>
            <p
              className="text-sm mt-4 font-semibold sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Yes! We include clear instructions, tips, and sometimes even step-by-step photos to help bakers of all levels enjoy the process.
            </p>
          </div>

          <div>
            <h3
              className="font-bold text-lg text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              5. Do you feature guest posts or collaborations?
            </h3>
            <p
              className="text-sm mt-4 font-semibold sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We’re open to collaborating with local chefs, food bloggers, and more!
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={faqImage}
            alt="FAQ"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
<div className="max-w-[80%] mx-auto">
  <img
    src={flower}
    alt="Offers and Deals"
    className="w-full h-auto object-cover rounded-lg "
  />
</div>
    </>
  );
};

export default FAQSection;
