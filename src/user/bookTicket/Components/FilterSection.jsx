import React from "react";

const FilterSection = ({ title, children, showAll }) => {
  return (
    <div className="border border-[#078DD7] rounded-[8px] p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        {showAll && (
          <button className="text-[#078DD7] text-sm font-medium hover:underline">
            See All
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default FilterSection;
