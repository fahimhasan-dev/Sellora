// components/Footer.tsx
"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#6c7fd8]">Sellora</h2>
          <p className="mt-4 text-sm text-gray-600">
            Your trusted online marketplace for fresh groceries, healthy
            products & more.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8]"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8]"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get weekly updates about our latest products and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#6c7fd8] text-white px-4 py-2 rounded-r-lg hover:bg-[#5b73dd]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Sellora. All rights reserved.
      </div>
    </footer>
  );
}
