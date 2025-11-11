import React from "react";

const CheckboxList = ({ options, selected, onChange, columns = 1 }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1",
    3: "grid-cols-1",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-2`}>
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(option)}
            className="accent-[#078DD7] w-4 h-4 cursor-pointer"
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
