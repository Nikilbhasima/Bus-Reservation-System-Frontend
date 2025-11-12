import React from "react";

const Gallery = ({ images }) => {
  return (
    <>
      <div className="p-[16px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
        {images.map((data, index) => (
          <div className="w-full flex justify-center">
            <img src={data} alt="bus" className="w-[220px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
