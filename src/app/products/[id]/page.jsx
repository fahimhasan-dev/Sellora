"use client";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function ProductDetails() {
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("green");

  return (
    <div className="container mx-auto h-screen justify-center items-center flex px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/xMKn2GJ/lemon.png"
            alt="Green Lemon"
            className="rounded-lg shadow-lg max-h-[400px] object-contain"
          />
        </div>

        {/* Right Side - Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Green Lemon Fruit Indoor & Outdoor Plant
          </h1>

          {/* Ratings */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500">(24 reviews)</span>
          </div>

          {/* Brand & Reference */}
          <p className="text-sm text-gray-500 mb-4">
            Brand: <span className="font-medium">Essential vegan</span> | Reference:{" "}
            <span className="font-medium">GRNF_8989</span> | Condition:{" "}
            <span className="font-medium">New</span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from “de
            Finibus Bonorum et Malorum” by Cicero...
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size :</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border rounded-md ${
                    size === s
                      ? "bg-green-600 text-white border-green-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color :</h3>
            <div className="flex gap-3">
              {["red", "green", "yellow"].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    color === c ? "border-green-600" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-green-700 mb-2">$45.00</p>
          <p className="text-sm text-gray-500 mb-6">Delivered within 2-3 days</p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
              Add To Cart
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
              <FiHeart className="text-xl" /> Add To Wishlist
            </button>
          </div>

          {/* Share */}
          <div className="flex gap-4 mt-6">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
              Share
            </button>
            <button className="px-3 py-1 bg-sky-500 text-white rounded-md text-sm">
              Tweet
            </button>
            <button className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">
              Pinterest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
