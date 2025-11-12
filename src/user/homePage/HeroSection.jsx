import React, { useState } from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="p-[32px] md:p-[60px] bg-[url(/images/hero-img.png)] bg-center bg-cover flex flex-col md:flex-row md:justify-between">
      <div className="text-white mb-[32px] flex flex-col">
        <h2 className="font-bold text-4xl lg:text-[48px] md:w-[80%] mb-[8px]">
          Travel Well And Easy With Us
        </h2>
        <p className="font-medium text-lg md:w-[80%] mb-[16px]">
          Seamless reservations, comfortable journeys, and trusted service.
        </p>
        <PrimaryButton name="Explore More" width={true} />
      </div>

      <div className="p-[32px] bg-[#FFFFFF] rounded-[10px] md:w-[420px] lg:w-[520px]">
        <div>
          <h2 className="text-xl font-bold text-center">Book a Ride</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] ">
          <div>
            <label htmlFor="from" className="mb-[8px]">
              From
            </label>
            <TextFieldComponent
              name="sourceCity"
              type="text"
              value={searchDetail?.sourceCity}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="to" className="mb-[8px]">
              To
            </label>
            <TextFieldComponent
              name="destinationCity"
              type="text"
              value={searchDetail?.destinationCity}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="depDate" className="mb-[8px]">
              Departure Date
            </label>
            <TextFieldComponent
              name="date"
              type="date"
              value={searchDetail?.date}
              onChange={handleFormChange}
              min={getCurrentDate()}
            />
          </div>
          <PrimaryButton name={"Search Ticket"} />
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
