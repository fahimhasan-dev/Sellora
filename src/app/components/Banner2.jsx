"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const properties = [
  {
    image: "https://i.ibb.co.com/LDJYbGCp/blog-click-mortar.webp",
    title: "Villa on Grand Avenue",
    location: "798 Talbot St. Bridgewater, NJ 08807",
    beds: 7,
    baths: 3,
    area: "3600 Sq Ft",
    price: "$380,000",
  },
  {
    image: "https://i.ibb.co.com/zV7rfV6R/flat-social-media-cover-template-electronics-business-store-23-2151136146.jpg",
    title: "Modern Beach House",
    location: "12 Ocean View Rd, Miami, FL 33101",
    beds: 8,
    baths: 4,
    area: "4200 Sq Ft",
    price: "$550,000",
  },
  {
    image: "https://i.ibb.co.com/bjrCxLdc/black-friday-super-sale-facebook-cover-template-106176-1576.jpg",
    title: "Luxury Mountain Retreat",
    location: "542 Aspen Way, Denver, CO 80204",
    beds: 10,
    baths: 2,
    area: "2800 Sq Ft",
    price: "$450,000",
  },
];

const Banner2 = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % properties.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const property = properties[index];

  return (
    <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      {/* Background image */}
      <img
        src={property.image}
        alt={property.title}
        className={`absolute inset-0 w-full h-full carousel-item object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "bg-black/40 opacity-30"
        }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Info Box */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[95%] sm:w-[85%] md:w-[70%] 
        bg-white/50 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-lg
        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8"
      >
        {/* Title & Location */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold">
            {property.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {property.location}
          </p>
        </div>

        {/* Property Details */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <FaBed className="text-blue-600 text-lg sm:text-2xl md:text-3xl" />
            <span className="text-xs sm:text-sm md:text-base">
              {property.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-blue-600 text-lg sm:text-2xl md:text-3xl" />
            <span className="text-xs sm:text-sm md:text-base">
              {property.baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="text-blue-600 text-lg sm:text-2xl md:text-3xl" />
            <span className="text-xs sm:text-sm md:text-base">
              {property.area}
            </span>
          </div>
          <div className="text-blue-700 font-bold text-sm sm:text-lg md:text-xl">
            {property.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
