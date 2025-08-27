import React from 'react'

const Page = () => {
  return (
    <section className='bg-'>
   <section
      className="relative w-full h-[250px] mt-17 md:h-[400px] flex items-center justify-center text-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/cXyNMymV/cms-banner1.png')", // your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay if needed */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Delivery On Next Day From <br /> 08:00 AM To 08:00 PM
        </h2>
        <p className="text-gray-100 mt-2 text-sm md:text-base">
          Get All Latest Information On Events, Sales Offers In Your Store
        </p>
        <button className="mt-4 px-6 py-3 bg-[#6c7fd8] text-white font-medium rounded-lg shadow hover:bg-yellow-500 transition">
          Shop Now
        </button>
      </div>
    </section></section>
  )
}

export default Page