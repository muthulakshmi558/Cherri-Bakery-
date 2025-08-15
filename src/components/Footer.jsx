import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../assets/images/footerlogo.png";


const Footer = () => {
  return (
    <footer className="bg-[#F3E5AB] font-bold text-black font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Title */}
        <div>
      <img 
        src={Logo} 
        alt="Cherii Bakery" 
        className="mb-3 w-28" 
      />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Track Your Order</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>Cookies</li>
            <li>Muesli</li>
            <li>Granola Bars</li>
            <li>Seed Mixes</li>
            <li>Gift Boxes</li>
            <li>Super Savers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt /> No.45, Anna Salai, T. Nagar, Chennai - 600 017
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@cherii.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +123 456 7890
            </p>
          </div>
          <h4 className="mt-4 font-bold">Follow us</h4>
          <div className="flex gap-3 mt-2">
            <FaInstagram className="text-xl cursor-pointer hover:text-[#D99A6C]" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-[#D99A6C]" />
            <FaFacebook className="text-xl cursor-pointer hover:text-[#D99A6C]" />
            <FaYoutube className="text-xl cursor-pointer hover:text-[#D99A6C]" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FFF8F0] py-3 text-center text-xs text-gray-700">
        © {new Date().getFullYear()} Cherii Bakery & Cakes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
