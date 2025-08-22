import Image from 'next/image'

export default function CategorySection() {
  return (
    <section className="bg-[#FFF9F2] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left - Woman Collection */}
        <div className="relative w-full lg:w-1/2">
          <div className="overflow-hidden rounded-[60px] lg:rounded-[80px]">
            <Image
              src="/images/woman.jpg" // Replace with your image path
              alt="Woman Collection"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-black font-semibold">
            Woman Collection
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Set Your Wardrobe With Our Amazing Selection!
          </h2>
          <p className="text-gray-600 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the...
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Child Fashion */}
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/child.jpg"
                  alt="Child Fashion"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="absolute bottom-3 left-3 bg-white px-4 py-2 rounded-lg shadow text-black font-semibold">
                Child Fashion
              </button>
            </div>

            {/* Man Collection */}
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/man.jpg"
                  alt="Man Collection"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="absolute bottom-3 left-3 bg-white px-4 py-2 rounded-lg shadow text-black font-semibold">
                Man Collection
              </button>

              {/* Sale Badge */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm shadow">
                50% Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
