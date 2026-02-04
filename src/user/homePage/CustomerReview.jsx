import React from "react";
import { FaStar } from "react-icons/fa";

function CustomerReview() {
  return (
    <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
      <h2 className="font-bold text-4xl text-center">What Our Customer Says</h2>

      <p className="font-medium text-center text-black/50 mb-[16px]">
        Here’s what our passengers thought about their booking experience.
      </p>

      <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[32px]">
        <div className="flex flex-col gap-[24px] shadow-lg p-[32px] rounded-[20px] border-[1px] border-[black] lg:max-w-[450px]">
          <div className="flex gap-[8px]">
            <div>
              <img
                src="images/imgRaman.jpg"
                alt="Nikil"
                className="w-[60px] h-[60px] object-cover object-center rounded-[50%]"
              />
            </div>
            <div>
              <p className="text-[18px] font-medium">Raman Kayastha</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify italic opacity-[50%]">
            "Excellent service! The Green Line bus was clean, comfortable, and
            arrived right on time. The scenic views during the journey were
            breathtaking."
          </div>
        </div>
        <div className="flex flex-col gap-[16px] shadow-lg p-[32px] rounded-[20px] border-[1px] border-[black] lg:max-w-[450px]">
          <div className="flex gap-[8px]">
            <div>
              <img
                src="images/imgPranish.jpg"
                alt="Nikil"
                className="w-[60px] h-[60px] object-cover object-center rounded-[50%]"
              />
            </div>
            <div>
              <p className="text-[18px] font-medium">Pranish Pigge</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify italic opacity-[50%]">
            "Best booking experience ever. The online payment was smooth and
            customer support was helpful."
          </div>
        </div>
        <div className="flex flex-col gap-[16px] shadow-lg p-[32px] rounded-[20px] border-[1px] border-[black] lg:max-w-[450px]">
          <div className="flex gap-[8px]">
            <div>
              <img
                src="images/imgAunti.jpg"
                alt="Nikil"
                className="w-[60px] h-[60px] object-cover object-center rounded-[50%]"
              />
            </div>
            <div>
              <p className="text-[18px] font-medium">Sarina Malakar Khadge</p>
              <div className="flex gap-[8px] text-[22px]">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
            </div>
          </div>
          <div className="text-justify italic opacity-[50%]">
            "Safe and reliable service. The live tracking feature gave me peace
            of mind during the journey."
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
