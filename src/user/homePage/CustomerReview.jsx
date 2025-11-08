import React from "react";
import { FaStar } from "react-icons/fa";

function CustomerReview() {
  return (
    <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
      <h2 className="font-bold text-4xl text-center">What Our Customer Says</h2>

      <p className="font-medium text-center text-black/50 mb-[16px]">
        Here’s what our passengers thought about their booking experience.
      </p>

      <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px]">
        <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
          <div className="flex gap-[8px]">
            <div>
              <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
            </div>
            <div>
              <p className="text-[18px] font-medium">Nikil Bhasima</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify">
            "Excellent service! The Green Line bus was clean, comfortable, and
            arrived right on time. The scenic views during the journey were
            breathtaking."
          </div>
        </div>

        <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
          <div className="flex gap-[8px]">
            <div>
              <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
            </div>
            <div>
              <p className="text-[18px] font-medium">Nikil Bhasima</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify">
            "Excellent service! The Green Line bus was clean, comfortable, and
            arrived right on time. The scenic views during the journey were
            breathtaking."
          </div>
        </div>

        <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
          <div className="flex gap-[8px]">
            <div>
              <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
            </div>
            <div>
              <p className="text-[18px] font-medium">Nikil Bhasima</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify">
            "Excellent service! The Green Line bus was clean, comfortable, and
            arrived right on time. The scenic views during the journey were
            breathtaking."
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
