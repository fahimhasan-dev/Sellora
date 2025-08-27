// components/Navbar.tsx
"use client";

import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

import UserInfo from "./UserInfo";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-[90%] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6c7fd8]">Sellora</div>

        {/* Desktop Menu */}

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-white border border-[#6c7fd8] rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 outline-none text-sm w-64"
          />
          <button className="bg-[#6c7fd8] text-white text-sm font-light px-4 py-3 btn border-none hover:bg-[#6c7fd8]">
            Search
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-800 font-semibold hover:text-[#6c7fd8]"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-gray-800 font-semibold hover:text-[#6c7fd8]"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-[#6c7fd8]"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-[#6c7fd8]"
          >
            Contact
          </a>
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-[#f4c340]">
            <FaShoppingCart size={18} color="white" />
          </button>
          <UserInfo></UserInfo>
          <Link href="/login">Login</Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-white hover:bg-[#f4c340]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-gray-700 hover:text-[#f4c340]">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#f4c340]">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-[#f4c340]">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#f4c340]">
              Contact
            </a>

            {/* Mobile Search */}
            <div className="flex items-center border-2 border-[#0000003f] rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 outline-none text-sm flex-grow"
              />
              <button className="bg-[#f4c340] text-white px-4 py-3 btn border-none hover:bg-[#f1be32]">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
