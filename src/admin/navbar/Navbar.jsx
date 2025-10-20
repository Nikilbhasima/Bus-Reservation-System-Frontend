import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { FaRoute } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const linkList1 = [
  {
    icon: <MdDashboard className="w-5 h-5 text-[#078DD7]" />,
    label: "Dashboard",
  },
  { icon: <FaBus className="w-5 h-5 text-[#078DD7]" />, label: "Bus Details" },
  {
    icon: <FaUser className="w-5 h-5 text-[#078DD7]" />,
    label: "Driver Details",
  },
  {
    icon: <IoBookmark className="w-5 h-5 text-[#078DD7]" />,
    label: "Bookings",
  },
  { icon: <FaRoute className="w-5 h-5 text-[#078DD7]" />, label: "Routes" },
];

const linkList2 = [
  {
    icon: <IoIosSettings className="w-5 h-5 text-[#078DD7]" />,
    label: "Settings",
  },
  { icon: <IoLogOut className="w-5 h-5 text-[#078DD7]" />, label: "Logout" },
];
function Navbar() {
  return (
    <div className="bg-white h-full relative flex flex-col py-2 md:p-4 lg:p-6 transition-all duration-300">
      {/* Logo */}
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 flex justify-center items-center">
        <img src="images/logo1.png" alt="bus sewa logo" className="w-[5rem]" />
      </div>

      {/* Sidebar content */}
      <div className="flex flex-col flex-grow justify-between items-center px-2">
        {/* Top menu */}
        <div className="flex flex-col gap-4 w-full">
          {linkList1.map((item, i) => (
            <NavLink
              key={i}
              className="p-2 w-full flex justify-center sm:justify-start items-center rounded-[10px] hover:bg-[#078DD7] hover:text-[#FFFFFF] transition-all duration-300"
            >
              {item.icon}
              <span className="font-semibold text-[16px] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0 sm:opacity-100 sm:max-w-[200px] sm:ml-2">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Bottom menu */}
        <div className="flex flex-col gap-4 w-full items-center">
          {linkList2.map((item, i) => (
            <NavLink
              key={i}
              className="p-2 w-full flex justify-center sm:justify-start items-center rounded-[10px] hover:bg-[#078DD7] hover:text-[#FFFFFF] transition-all duration-300"
            >
              {item.icon}
              <span className="font-semibold text-[16px] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0 sm:opacity-100 sm:max-w-[200px] sm:ml-2">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
