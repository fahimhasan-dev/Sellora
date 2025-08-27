"use client";
import { useEffect, useState } from "react";
import { FiShoppingCart, FiHeart, FiRefreshCcw } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll to toggle sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      {/* Top Banner (hidden when sticky) */}
      {!isSticky && (
      <div>
          
          <div className="bg-[url(https://i.ibb.co.com/F4yTJXmg/Screenshot-2025-08-23-004356.png)] z-10 pt-9 pb-5 bg-no-repeat">
            
      </div>
          <div className="bg-[#2f6b51e1]">
            

          <div className="max-w-[1600px] mx-auto  text-white">
            <div className=" text-xs py-2 md:text-sm px-3 flex flex-col md:flex-row md:justify-between items-center gap-1 text-center">
 <p>Delivery on next day from 08:00 AM to 08:00 PM</p>
          <p className="font-medium">
            Up to <span className="text-yellow-400">20% off</span> everyday{" "}
            <button className="bg-yellow-400  text-green-900 px-2 py-1 rounded ml-1 text-xs md:text-sm">
              Shop Now
            </button>
          </p>
            </div>
         
        </div></div></div>
      )}

      {/* Main Navbar (hidden when sticky) */}
      {!isSticky && (
        <div className="bg-[#3b745b] border-b border-[#ffffff48] text-white">
          <div className="max-w-[1600px] mx-auto px-5 md:px-6 py-5 flex items-center justify-between">
            {/* Logo & Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl"
              >
                {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </button>
              <h1 className="text-xl md:text-4xl font-bold flex items-center gap-1">
                <span className="text-yellow-400">🌿</span> Greenleaf
              </h1>
            </div>

            {/* Nav Links (desktop only) */}
            <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
              <a href="#">Organic</a>
              <a href="#">Juice</a>
              <a href="#">Vegetables</a>
              <a href="#">Fruits</a>
              <a href="#">Cookies</a>
              <a href="#">Pretzels</a>
              <a href="#">News</a>
            </nav>
          </div>
        </div>
      )}

      {/* Sticky Search Bar (Always Visible) */}
      <div
        className={`w-full bg-[#3b745b] transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-lg z-50" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between px-3 md:px-6 py-3 gap-3">
          {/* Categories */}
          <button className=" text-white px-3 py-2  rounded flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
           <div className="bg-[#3d8164] border rounded-full p-2 border-[#ffffff50]"><BiCategory size={25} className="text-lg" /></div>  Shop by categories
          </button>

          {/* Search Bar */}
          <div className="flex w-full sm:flex-1 items-center">
            <input
              type="text"
              placeholder="Search Product Here..."
              className="flex-1 px-3  border bg-white rounded-l-3xl py-4 border-none focus:outline-none text-black text-sm sm:text-base"
            />
            <button className="bg-yellow-400 rounded-r-3xl text-green-900 px-3 sm:px-7 py-4  text-sm sm:text-base">
              <IoMdSearch  size={25}/>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-5 text-lg sm:text-xl text-white">
            <FiRefreshCcw className="cursor-pointer" />
            <div className="relative">
              <FiHeart className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <div className="relative">
              <FiShoppingCart className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && !isSticky && (
        <div className="bg-green-800 text-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base">
            <a href="#">Organic</a>
            <a href="#">Juice</a>
            <a href="#">Vegetables</a>
            <a href="#">Fruits</a>
            <a href="#">Cookies</a>
            <a href="#">Pretzels</a>
            <a href="#">News</a>
          </nav>
        </div>
      )}
    </header>
  );
}
