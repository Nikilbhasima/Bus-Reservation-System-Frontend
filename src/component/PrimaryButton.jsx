import React from "react";

function PrimaryButton({
  name,
  width,
  handleSubmit,
  showBorder,
  changeBackground,
}) {
  return (
    <button
      className={`  py-[12px] px-[24px]  sm:px-[12px] md:px-[24px] lg:px-[32px] rounded-[10px]  bg-primary font-medium cursor-pointer text-white
  ${width ? "w-fit" : "w-full"}

  ${changeBackground && " hover:bg-white hover:text-primary"}
  
  ${showBorder ? "border-2  hover:border-primary" : "border-none"}
  hover:-translate-y-1   duration-300 transition-all ease-in`}
      onClick={handleSubmit}
    >
      {name}
    </button>
  );
}

export default PrimaryButton;
