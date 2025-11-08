import React from "react";
import PrimaryButton from "../../component/PrimaryButton";

function TravelAgencies() {
  return (
    <div className="bg-[#078DD7]/10 p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
      <h2 className="font-bold text-4xl text-center">
        Our Trusted Travel Agencies
      </h2>
      <p className="font-medium text-center text-black/50 mb-[16px]">
        Our bus partnership with following company ensures safe and reliable
        travel for all passengers.
      </p>

      <div className="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-[80px] lg:gap-[160px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/bus.png"
            alt="safe"
            className="w-[220px] object-contain md:w-[320px]"
          />
          <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/bus.png"
            alt="safe"
            className="w-[220px] object-contain md:w-[320px]"
          />
          <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/bus.png"
            alt="safe"
            className="w-[220px] object-contain md:w-[320px]"
          />
          <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
        </div>
      </div>

      <div className="mt-[32px]">
        <PrimaryButton name={"View All Agencies"} />
      </div>
    </div>
  );
}

export default TravelAgencies;
