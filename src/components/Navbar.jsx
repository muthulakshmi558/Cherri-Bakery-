import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiBell,
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/images/logo.png";

const LINKS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "OUR PRODUCTS", path: "/products" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT US", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-bakeryBrown font-spartan">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Cherii Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col flex-1 ml-10">
            {/* Row 1 */}
            <div className="flex items-center justify-between">
              {/* Links */}
              <div className="flex items-center space-x-10">
                {LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`uppercase text-black text-base font-bold tracking-wide hover:opacity-90 ${
                      link.name === "HOME" ? "underline underline-offset-4" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-5 text-black ml-6">
                <FiHeart className="text-xl" />
                <FiBell className="text-xl" />
                <FiShoppingBag className="text-xl" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="relative w-96 max-w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="SEARCH HERE"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-bakeryWhite placeholder-gray-400 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-bakeryCream"
                />
              </div>
              <Link to = "/auth">
              <button className="bg-bakeryCream text-black px-6 py-2 rounded-full font-bold shadow">
                LOGIN
              </button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-1 text-black"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bakeryBrown px-4 pb-4 space-y-4">
          {/* Links */}
          <div className="flex flex-col space-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`uppercase text-black font-semibold px-1 py-1 ${
                  link.name === "HOME" ? "underline underline-offset-4" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search + Icons */}
          <div className="flex flex-col space-y-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="SEARCH HERE"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-bakeryWhite placeholder-gray-400 text-sm text-black shadow-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-black">
                <FiHeart className="text-xl" />
                <FiBell className="text-xl" />
                <FiShoppingBag className="text-xl" />
              </div>
              <button className="bg-bakeryCream text-black px-5 py-2 rounded-full font-bold">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
