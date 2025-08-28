import React from "react";

import {
  FaBuilding,
  FaHome,
  FaPlus,
  FaHandHoldingUsd,
  FaClipboardCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

const Sidebar = ({ closeSidebar }) => {
  const handleLogout = async () => {
    // const result = await Swal.fire({
    //   title: "Are you sure?",
    //   text: "You want to logout!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, logout!",
    // });
    // if (result.isConfirmed) {
    //   await logOut();
    //   localStorage.removeItem("accessToken");
    //   Swal.fire("Logged Out!", "You have been logged out.", "success");
    // }
  };

  const linksToRender = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
    {
      name: "Add Property",
      path: "/dashboard/addProperty",
      icon: <FaPlus />,
    },
    {
      name: "My Properties",
      path: "/dashboard/my-added-properties",
      icon: <FaBuilding />,
    },
    {
      name: "Offered Properties",
      path: "/dashboard/offered-properties",
      icon: <FaHandHoldingUsd />,
    },
    {
      name: "My Sold Properties",
      path: "/dashboard/payment-collection",
      icon: <FaClipboardCheck />,
    },
  ];

  return (
    <aside className="h-full flex flex-col border-r bg-white border-gray-200 ">
      <div className="flex items-center justify-between p-4 font-bold text-xl text-black dark:text-white">
        <Link href="/" onClick={closeSidebar}>
          Sellro
        </Link>
        {/* Close button for mobile */}
        <button
          className="lg:hidden text-black"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>
      <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
        {/* {linksToRender.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-sm font-medium rounded  sidebarNav-hover ${
                isActive
                  ? " bg-slate-700 text-white hover:text-white"
                  : "text-black "
              }`
            }
            onClick={closeSidebar}
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </Link>
        ))} */}
      </nav>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
