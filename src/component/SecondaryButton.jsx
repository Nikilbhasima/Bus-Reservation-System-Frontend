import React from "react";

function SecondaryButton({ name, width }) {
  return (
    <button
      className={`py-[12px] px-[32px] rounded-[10px] bg-white text-primary 
  border border-transparent cursor-pointer font-medium
  ${width ? "w-fit" : "w-full"}
  hover:bg-primary hover:text-white hover:border-white hover:-translate-y-1
  duration-300 transition-all ease-in`}
    >
      {name}
    </button>
  );
}

export default SecondaryButton;
