import React from "react";

function SecondaryButton({
  name,
  width,
  handleSubmit,
  changeBackground,
  showBorder,
  icon,
}) {
  return (
    <button
      className={`py-[12px] px-[24px] sm:px-[12px] md:px-[24px] lg:px-[32px] rounded-[10px] bg-white text-primary flex  items-center
 cursor-pointer font-medium border-2
  ${width ? "w-fit" : "w-full"}
  ${changeBackground && "hover:bg-primary hover:text-white hover:border-white"}
  ${showBorder && "border-2 border-primary"}
    hover:-translate-y-1
  duration-300 transition-all ease-in `}
      onClick={handleSubmit}
    >
      {icon}
      <span className="mx-auto">{name}</span>
    </button>
  );
}

export default SecondaryButton;
