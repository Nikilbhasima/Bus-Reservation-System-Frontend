import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaBus, FaUser, FaRoute } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoBookmark, IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice/AuthSlice";

const linkList1 = [
  { icon: MdDashboard, label: "Dashboard", path: "/" },
  { icon: FaBus, label: "Agency", path: "/agency" },
];
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#1D212B] h-full relative flex flex-col py-2 md:p-4 lg:p-6 transition-all duration-300 shadow-xl">
      {/* Logo */}
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 flex justify-center items-center">
        <h2 className="text-white text-[1.5rem] font-semibold">Super Admin</h2>
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
                `gap-[8px] p-2 w-full flex items-center rounded-[10px] transition-all duration-300
     ${isActive ? "bg-white text-[#078DD7]" : "text-white"}
    `
              }
            >
              <item.icon
                className={`w-5 h-5 transition-colors duration-300 mx-auto md:mx-0`}
              />
              <span
                className={`font-semibold text-[16px] transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0   
                 sm:opacity-100 sm:max-w-[200px] sm:ml-2 hidden md:flex
                `}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
        <div
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
          className="gap-[8px] p-2 w-full flex items-center rounded-[10px] text-white hover:bg-white hover:text-[#078DD7] duration-300 transition-all ease-in"
        >
          <IoLogOut
            className={`w-5 h-5 transition-colors duration-300 mx-auto md:mx-0`}
          />
          <span
            className={`font-semibold text-[16px] transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap opacity-0 max-w-0   
                 sm:opacity-100 sm:max-w-[200px] sm:ml-2 hidden md:flex
                `}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
