import { Truck, Leaf, Headphones, CreditCard } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-[#6c7fd8]" />,
      title: "Free Fast Shipping",
      description: "Free shipping for orders over",
    },
    {
      icon: <Leaf className="w-10 h-10 text-[#6c7fd8]" />,
      title: "100% Fresh Vegetables",
      description: "Within 30 days for an exchange",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#6c7fd8]" />,
      title: "Best Online Support",
      description: "Within 30 days money return",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-[#6c7fd8]" />,
      title: "Secure Payments",
      description: "Pay with multiple credit cards",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-[90%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {feature.icon}
            <h3 className="mt-4 font-semibold text-lg text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
