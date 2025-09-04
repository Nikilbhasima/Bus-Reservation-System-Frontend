import React from "react";

function PrimaryButton({ name, width, handleSubmit }) {
  return (
    <button
      className={`py-[12px] px-[32px] rounded-[10px] bg-primary font-medium  border-none cursor-pointer text-white
 ${
   width ? "w-fit" : "w-full"
 } hover:bg-white hover:text-primary hover:-translate-y-1 duration-300 transition-all ease-in`}
      onClick={handleSubmit}
    >
      {name}
    </button>
  );
}

export default PrimaryButton;
