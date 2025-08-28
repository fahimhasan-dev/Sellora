"use client";

import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const sidebarItems = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "Dashboard", href: "/dashboard", icon: <MdDashboard /> },
    {
      name: "Add Product",
      href: "/dashboard/addProduct",
      icon: <FaPlus/>,
    },
  // { name: "Profile", href: "/dashboard/profile", icon: <FiUser /> },
  // { name: "Settings", href: "/dashboard/settings", icon: <FiSettings /> },
];

export default function DashboardLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);
   const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white  shadow-lg 
        transition-transform md:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile header inside sidebar */}
        <div className="p-4 flex items-center justify-between md:hidden">
          <h2 className="text-xl font-bold text-gray-700 ">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-gray-700 " size={24} />
          </button>
        </div>

        {/* Sidebar links */}
       
        <nav className="mt-15 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-600  hover:bg-gray-100  transition rounded-lg"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white  shadow-md">
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <FiMenu className="text-gray-700 " size={24} />
            </button>
            <h1 className="text-lg md:text-2xl font-semibold text-gray-700 ">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 ">Hello, Fahim</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-gray-300 "
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
