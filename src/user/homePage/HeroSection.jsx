import React, { useState } from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { MdDirectionsBus } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CgArrowsExchange } from "react-icons/cg";

function HeroSection() {
  const navigate = useNavigate();

  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };
  const [searchDetail, setSearchDetail] = useState({
    sourceCity: "",
    destinationCity: "",
    date: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSearchDetail((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(JSON.stringify(searchDetail));
    navigate(`/book/browse/${encoded}`);
  };

  const handleSwipeLocation = () => {
    setSearchDetail((pre) => ({
      ...pre,
      sourceCity: searchDetail.destinationCity,
      destinationCity: searchDetail.sourceCity,
    }));
  };
  return (
    <div className="p-[32px] md:p-[60px] bg-[url(/images/hero-img.png)] h-[53rem] bg-center bg-cover flex flex-col md:flex-row md:justify-between flex items-center justify-center">
      <div className="text-white mb-[32px] flex flex-col">
        <h2 className="font-bold text-4xl lg:text-[48px] md:w-[80%] mb-[8px]">
          Travel Well And Easy With Us
        </h2>
        <p className="font-medium text-lg md:w-[80%] mb-[16px]">
          Seamless reservations, comfortable journeys, and trusted service.
        </p>

        <PrimaryButton name="Explore More" width={true} />
      </div>

      <div className="bg-[#FFFFFF] rounded-[16px] md:w-[400px] lg:w-[520px] h-fit overflow-hidden">
        <div className="bg-[#078DD7] px-[24px] py-[24px]">
          <h2 className="text-[1.5rem] text-white font-semibold">
            Book a Ride
          </h2>
          <p className="text-[12px] text-white">Quick and easy booking</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-fit mt-[8px] px-[24px] pb-[32px] pt-[20px]  "
        >
          <div className=" flex flex-col gap-[10px] mb-[16px]">
            <label htmlFor="from">From</label>
            <div className="relative">
              <TextFieldComponent
                name="sourceCity"
                type="text"
                value={searchDetail?.sourceCity}
                onChange={handleFormChange}
              />
              <MdDirectionsBus className="text-[1.4rem] top-[13px] left-[4px] text-[#078DD7] absolute" />
            </div>
          </div>
          <CgArrowsExchange
            className="text-[3rem] mx-auto text-[#078DD7] p-[0]"
            onClick={handleSwipeLocation}
          />
          <div className=" flex flex-col gap-[10px]">
            <label htmlFor="to" className="mb-[8px]">
              To
            </label>
            <div className="relative">
              <TextFieldComponent
                name="destinationCity"
                type="text"
                value={searchDetail?.destinationCity}
                onChange={handleFormChange}
              />
              <IoLocation className="text-[1.5rem] top-[10px] left-[4px] text-[#078DD7] absolute" />
            </div>
          </div>
          <div className="mt-[2rem] flex flex-col gap-[10px]">
            <label htmlFor="depDate" className="mb-[8px]">
              Departure Date
            </label>

            <div className="relative">
              <div className="relative">
                <TextFieldComponent
                  name="date"
                  type="date"
                  value={searchDetail?.date}
                  onChange={handleFormChange}
                  min={getCurrentDate()}
                />
                <SlCalender className="text-[1rem] top-[15px] left-[6px] text-[#078DD7] absolute" />
              </div>
            </div>
          </div>
          <div className="mt-[2rem]">
            <PrimaryButton name={"Search Ticket"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
