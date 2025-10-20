import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-end bg-[#FFFFFF] p-[24px] gap-[16px]">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#EBEBEB] py-[8px] px-[16px] rounded-[10px]"
      />
      <div className="bg-[#EBEBEB] p-[16px] rounded-[10px]">
        <FaUserAlt />
      </div>
    </div>
  );
}

export default Header;
