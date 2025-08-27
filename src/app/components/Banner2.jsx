"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
// https://i.ibb.co.com/whS3jv9y/hero-3.png
// https://i.ibb.co.com/fdQ7b1DR/hero-2.png
// https://i.ibb.co.com/chggDT6d/hero-1.png
const banners = [
  {
    id: 1,
    title: "Explore Healthy & Fresh Fruits",
    subtitle: "Flat 20% Off",
    button: "Shop Now",
    image: "https://i.ibb.co.com/chggDT6d/hero-1.png",
  },
  {
    id: 2,
    title: "Explore Warm Fast Food & Snacks",
    subtitle: "Buy 1 Get 1 Free",
    button: "Order Now",
    image: "https://i.ibb.co.com/fdQ7b1DR/hero-2.png",
  },
  {
    id: 3,
    title: "Delicious Cakes & Desserts",
    subtitle: "Special Weekend Offer",
    button: "Grab Deal",
    image: "https://i.ibb.co.com/whS3jv9y/hero-3.png",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[90vh] bg-gray-50 flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full px-6 md:px-56">
              {/* Left Side Text */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="text-center md:text-left space-y-4"
              >
                <p className="text-gray-500 text-lg">{banner.subtitle}</p>
                <h1 className="text-3xl md:text-5xl  font-bold text-gray-800 leading-snug">
                  Explore <span className="text-[#6c7fd8]">Healthy</span>
                  <br />& Fresh Fruits
                </h1>
                <button className="mt-4 px-6 py-3 border border-gray-600 rounded-xl hover:bg-indigo-500 hover:text-white transition">
                  {banner.button}
                </button>
              </motion.div>

              {/* Right Side Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="flex justify-center md:justify-end"
              >
                <Image
                  src={banner.image}
                  alt="banner"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
