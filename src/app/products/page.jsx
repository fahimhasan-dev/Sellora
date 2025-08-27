"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mockProducts = [
  {
    id: 1,
    name: "Red Organic Onion",
    description: "Fresh red organic onions, great for cooking.",
    price: 10,
    image: "https://i.ibb.co.com/20KSPqjn/4-1.jpg",
  },
  {
    id: 2,
    name: "Red Cherry Serbia",
    description: "Juicy sweet cherries imported from Serbia.",
    price: 9,
    image: "https://i.ibb.co.com/SX1BDNQq/6.jpg",
  },
  {
    id: 3,
    name: "Fresh Orange",
    description: "Sweet and tangy oranges full of vitamin C.",
    price: 10,
    image: "https://i.ibb.co.com/fYbh6RJ3/7.jpg",
  },
  {
    id: 4,
    name: "Crunchy Potato Chips",
    description: "Crispy potato chips, perfect for snacking.",
    price: 15,
    image: "https://i.ibb.co.com/Fq0Fz9Rr/16.jpg",
  },
  {
    id: 5,
    name: "Red Organic Onion",
    description: "Fresh red organic onions, great for cooking.",
    price: 10,
    image: "https://i.ibb.co.com/20KSPqjn/4-1.jpg",
  },
  {
    id: 6,
    name: "Red Cherry Serbia",
    description: "Juicy sweet cherries imported from Serbia.",
    price: 9,
    image: "https://i.ibb.co.com/SX1BDNQq/6.jpg",
  },
  {
    id: 7,
    name: "Fresh Orange",
    description: "Sweet and tangy oranges full of vitamin C.",
    price: 10,
    image: "https://i.ibb.co.com/fYbh6RJ3/7.jpg",
  },
  {
    id: 8,
    name: "Crunchy Potato Chips",
    description: "Crispy potato chips, perfect for snacking.",
    price: 15,
    image: "https://i.ibb.co.com/Fq0Fz9Rr/16.jpg",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50 py-10 ">
      <section
        className="relative w-full h-[250px] mt-17 md:h-[400px] flex items-center justify-center text-center rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/cXyNMymV/cms-banner1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay if needed */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            Delivery On Next Day From <br /> 08:00 AM To 08:00 PM
          </h2>
          <p className="text-gray-100 mt-2 text-sm md:text-base">
            Get All Latest Information On Events, Sales Offers In Your Store
          </p>
          <div className="flex w-full mt-3 justify-center mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Search */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="w-[300px] mx-auto h-[300px] flex items-center justify-center ">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1800}
                  height={1800}
                 
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1 flex-grow">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#6179e4]">
                    ${product.price}
                  </span>
                 <Link href={{ pathname: `/products/${product.id}` }} className="px-4 py-2 bg-[#6c7fd8] text-white text-sm rounded-lg hover:bg-[#6179e4] transition">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-4">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
