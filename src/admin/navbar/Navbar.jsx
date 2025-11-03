import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBus, FaUser, FaRoute } from "react-icons/fa";
import { IoBookmark, IoLogOut } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrOrganization } from "react-icons/gr";
import { TbClockHour4 } from "react-icons/tb";

const linkList1 = [
  { icon: MdDashboard, label: "Dashboard", path: "/" },
  { icon: FaBus, label: "Bus Details", path: "/busDetail" },
  { icon: FaUser, label: "Driver Details", path: "/driverDetail" },
  { icon: IoBookmark, label: "Bookings", path: "/booking" },
  { icon: FaRoute, label: "Routes", path: "/routes" },
  { icon: TbClockHour4, label: "Schedule", path: "/busSchedule" },
  { icon: GrOrganization, label: "Agency Detail", path: "/agencyDetail" },
];

const linkList2 = [
  { icon: IoIosSettings, label: "Settings", path: "/settings" },
  { icon: IoLogOut, label: "Logout", path: "/logout" },
];

function Navbar() {
  const [rotateIcon, setRotateIcon] = useState(true);

  const [displayLabel, setDisplayLabel] = useState(true);

  return (
    <div className="bg-white h-full relative flex flex-col py-2 md:p-4 lg:p-6 transition-all duration-300 shadow-xl">
      {/* navbar display icon */}
      <div
        className="bg-[#078DD7] w-fit p-[8px] rounded-[10px] absolute -right-[30px] hidden sm:block"
        onClick={() => setRotateIcon(!rotateIcon)}
      >
        <IoIosArrowBack
          className={`text-[24px] text-[white] ${
            rotateIcon ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
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
              to={item.path}
              className={({ isActive }) =>
                `group p-2 w-full flex justify-center  items-center rounded-[10px] transition-all duration-300 ${
                  isActive ? "bg-[#078DD7] text-white" : " text-[#078DD7]"
                } ${rotateIcon ? "sm:justify-center" : "sm:justify-start"}`
              }
            >
              <item.icon
                className={({ isActive }) =>
                  `w-5 h-5 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[#078DD7] group-hover:text-white"
                  }`
                }
              />
              <span
                className={`font-semibold text-[16px] transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0 
                ${
                  rotateIcon
                    ? "sm:opacity-0 sm:max-w-0"
                    : "sm:opacity-100 sm:max-w-[200px] sm:ml-2"
                } `}
              >
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
              to={item.path}
              className={({ isActive }) =>
                `group p-2 w-full flex justify-center  items-center rounded-[10px] transition-all duration-300 ${
                  isActive ? "bg-[#078DD7] text-white" : " text-[#078DD7]"
                } ${rotateIcon ? "sm:justify-center" : "sm:justify-start"}`
              }
            >
              <item.icon
                className={`w-5 h-5 transition-colors duration-300 `}
              />
              <span
                className={`font-semibold text-[16px] transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0   ${
                  rotateIcon
                    ? "sm:opacity-0 sm:max-w-0"
                    : "sm:opacity-100 sm:max-w-[200px] sm:ml-2"
                }`}
              >
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
