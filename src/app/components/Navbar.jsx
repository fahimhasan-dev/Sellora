// components/Navbar.tsx
"use client";

import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide navbar on dashboard pages
  if (pathName.includes("dashboard")) return null;

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#6c7fd8]">
          Sellora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
            Home
          </Link>
          <Link href="/products" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
            Products
          </Link>
          <Link href="/dashboard" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
            Dashboard
          </Link>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar for lg screens */}
          <div className="hidden lg:flex items-center bg-white border border-[#6c7fd8] rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 outline-none text-sm w-64"
            />
            <button className="bg-[#6c7fd8] text-white text-sm font-light px-4 py-2 btn border-none hover:bg-[#4557a8]">
              Search
            </button>
          </div>

          {/* Cart Icon */}
          <button className="p-2 rounded-full hover:bg-[#f4c340]">
            <FaShoppingCart size={18} color="#6c7fd8" />
          </button>

          {/* Auth Buttons for md+ */}
          <div className="hidden md:flex space-x-2">
            <Link
              href="/login"
              className="btn bg-[#6c7fd8] border-none rounded text-white px-4 py-2 hover:bg-[#4557a8]"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn bg-[#6c7fd8] border-none rounded text-white px-4 py-2 hover:bg-[#4557a8]"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-white hover:bg-[#f4c340]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} color="#6c7fd8" /> : <FaBars size={20} color="#6c7fd8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
              Home
            </Link>
            <Link href="/products" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
              Products
            </Link>
            <Link href="/dashboard" className="text-gray-800 font-semibold hover:text-[#6c7fd8]">
              Dashboard
            </Link>

            {/* Mobile Search */}
            <div className="flex items-center border-2 border-[#6c7fd8] rounded-lg overflow-hidden mt-2">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 outline-none text-sm flex-grow"
              />
              <button className="bg-[#6c7fd8] text-white px-4 py-2 btn border-none hover:bg-[#4557a8]">
                Search
              </button>
            </div>

            {/* Auth Buttons Mobile */}
            <div className="flex flex-col space-y-2 mt-2">
              <Link
                href="/login"
                className="btn bg-[#6c7fd8] border-none rounded text-white px-4 py-2 hover:bg-[#4557a8]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn bg-[#6c7fd8] border-none rounded text-white px-4 py-2 hover:bg-[#4557a8]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
