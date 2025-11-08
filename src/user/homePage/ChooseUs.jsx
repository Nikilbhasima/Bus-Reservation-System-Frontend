import React from "react";

function ChooseUs() {
  return (
    <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
      <h2 className="font-bold text-4xl">Why Choose Us?</h2>

      <p className="font-medium text-center text-black/50 mb-[16px]">
        Experience the best bus travel service in Nepal with our premium
        features
      </p>

      <div className="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-[80px] lg:gap-[160px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/safe-icon.svg"
            alt="safe"
            className="w-[120px] md:w-[160px]"
          />
          <p className="font-medium text-black/50">Safe Travels</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/cashless-icon.svg"
            alt="safe"
            className="w-[120px] md:w-[160px]"
          />
          <p className="font-medium text-black/50">Online Transaction</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/customer.svg"
            alt="safe"
            className="w-[120px] md:w-[160px]"
          />
          <p className="font-medium text-black/50">24/7 Support</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <img
            src="images/location.svg"
            alt="safe"
            className="w-[120px] md:w-[160px]"
          />
          <p className="font-medium text-black/50">Live Tracking</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
