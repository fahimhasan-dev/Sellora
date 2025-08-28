import React from "react";

import { LuAlignLeft } from "react-icons/lu";
import { MdLogout, MdDashboard } from "react-icons/md";


import Link from "next/link";

const DashBoardNavbar = () => {


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

  return (
    <div className="navbar nav-bg shadow-md px-4 flex items-center justify-between">
      {/* Sidebar toggle for mobile */}
      <button
        onClick={toggleSidebar}
        className="btn btn-ghost btn-circle text-black lg:hidden"
        aria-label="Toggle sidebar"
      >
        <LuAlignLeft size={24} />
      </button>

      <div className="flex-1" />

      {/* Theme toggle */}
      {/* <button
        onClick={toggleTheme}
        className=" text-black text-2xl mr-3"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <MdOutlineLightMode size={24} />
        ) : (
          <MdOutlineNightlight size={24} />
        )}
      </button> */}

      {/* User dropdown or Auth buttons */}
     
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            aria-label="User menu"
          >
            <div className="w-15 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="user" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
          >
            <li>
              {/* <Link to="/dashboard/myProfile"><p className="font-semibold text-center">{user.displayName}</p></Link> */}
            </li>
            <li>
              <Link href="/dashboard">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <MdLogout />
                Logout
              </button>
            </li>
          </ul>
        </div>
      
    </div>
  );
};

export default DashBoardNavbar;
