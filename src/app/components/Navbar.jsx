"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#feeb9d] text-black shadow-md px-4 py-3">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-sellora-accent"
        >
          Sellora
        </Link>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:block flex-1 px-4 ">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 rounded-md text-black border-white border-2 focus:outline-none"
          />
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Search Bar on small screens */}
      <div className="block md:hidden mt-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
        />
      </div>

      {/* Mobile Modal Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-60 z-40 flex justify-end">
          <div className="w-64   h-full text-black p-6 space-y-6 shadow-lg z-50">
            <button onClick={toggleMenu} className="mb-4 text-right w-full">
              <X size={24} />
            </button>

            <div className="flex justify-between flex-col">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/shop" onClick={toggleMenu}>
                Shop
              </Link>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
