import React from "react";

const Amenities = ({ amenities }) => {
  return (
    <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-700">
      {(amenities || []).map((a, index) => (
        <span key={index}>{a}</span>
      ))}
    </div>
  );
};

export default Amenities;
