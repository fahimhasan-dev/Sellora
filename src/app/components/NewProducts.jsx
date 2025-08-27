// components/NewProducts.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Bundle of blue grapes with a green leaf",
    brand: "Arctic Garden",
    price: 30,
    rating: 4,
    image:
      "https://i.ibb.co.com/Z1pV9FMf/bundle-of-blue-grapes-with-a-green-leaf.jpg",
    hoverImage:
      "https://i.ibb.co.com/CKgd7Kz2/organic-world-kashmiri-red-chilly-powder.jpg",
  },
  {
    id: 2,
    title: "Crispy fruit freen orange dried fruit",
    brand: "Bonzime",
    price: 90,
    rating: 5,
    image:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
    hoverImage:
      "https://i.ibb.co.com/W4LR2Ypb/roasted-freeze-mix-blue-combo-dispenser.jpg",
  },
  {
    id: 3,
    title: "Green lemon fruit indoor & outdoor plant",
    brand: "Essential vegan",
    price: 45,
    rating: 5,
    image:
      "https://i.ibb.co.com/CKgd7Kz2/organic-world-kashmiri-red-chilly-powder.jpg",
    hoverImage:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
  },
  {
    id: 4,
    title: "Bundle of blue grapes with a green leaf",
    brand: "Arctic Garden",
    price: 30,
    rating: 4,
    image:
      "https://i.ibb.co.com/Z1pV9FMf/bundle-of-blue-grapes-with-a-green-leaf.jpg",
    hoverImage:
      "https://i.ibb.co.com/CKgd7Kz2/organic-world-kashmiri-red-chilly-powder.jpg",
  },
  {
    id: 5,
    title: "Crispy fruit freen orange dried fruit",
    brand: "Bonzime",
    price: 90,
    rating: 5,
    image:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
    hoverImage:
      "https://i.ibb.co.com/W4LR2Ypb/roasted-freeze-mix-blue-combo-dispenser.jpg",
  },
  {
    id: 6,
    title: "Green lemon fruit indoor & outdoor plant",
    brand: "Essential vegan",
    price: 45,
    rating: 5,
    image:
      "https://i.ibb.co.com/CKgd7Kz2/organic-world-kashmiri-red-chilly-powder.jpg",
    hoverImage:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
  },
  {
    id: 7,
    title: "Crispy fruit freen orange dried fruit",
    brand: "Bonzime",
    price: 90,
    rating: 5,
    image:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
    hoverImage:
      "https://i.ibb.co.com/W4LR2Ypb/roasted-freeze-mix-blue-combo-dispenser.jpg",
  },
  {
    id: 8,
    title: "Green lemon fruit indoor & outdoor plant",
    brand: "Essential vegan",
    price: 45,
    rating: 5,
    image:
      "https://i.ibb.co.com/CKgd7Kz2/organic-world-kashmiri-red-chilly-powder.jpg",
    hoverImage:
      "https://i.ibb.co.com/nhTLLyN/crispy-fruit-freen-orange-dried-fruit.jpg",
  },
];

export default function NewProducts() {
  return (
    <section className="py-12 max-w-[90%] mx-auto">
      <div className="text-center mb-8">
        <p className="text-green-600 font-medium">Trending item</p>
        <h2 className="text-3xl font-bold">New products</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
        className="px-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="inset-shadow-sm boarder-2 border-[#0000004d] rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">New</span>

              {/* Flip animation container */}
              <div className="relative w-full h-40 my-4 group perspective">
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front Image */}
                  <div className="absolute inset-0 backface-hidden">
                    <Image
                      width={1080}
                      height={1080}
                      src={product.image}
                      alt={product.title}
                      className="h-50 w-50 mx-auto  object-contain"
                    />
                  </div>
                  {/* Back Image */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden">
                    <Image
                      width={1080}
                      height={1080}
                      src={product.hoverImage}
                      alt={product.title}
                      className="h-50 w-50 mx-auto   object-contain"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-medium mt-10 text-gray-600">
                {product.brand}
              </h4>
              <p className="text-base font-semibold mb-2">{product.title}</p>
              <div className="flex items-center text-yellow-500 mb-2">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <p className="text-green-600 font-bold">${product.price}.00</p>
              <button className="w-full mt-3 bg-green-700 text-white py-2 rounded hover:bg-green-800">
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
