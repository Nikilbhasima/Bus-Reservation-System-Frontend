import React from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import FilterSidebar from "./Components/FilterSidebar";
import BusCard from "./Components/BusList/BusCard";

function BrowseBus() {
  return (
    <>
      {/* Main Div */}
      <div className="w-full">
        {/* Browse Bus Header */}
        <div className="p-[48px] md:p-[60px] flex flex-col justify-center items-center bg-[url(/images/busBrowse-img.png)] bg-center bg-cover text-white relative">
          <h2 className="font-bold text-[32px]">Choose Place to Travel</h2>
          <p className="text-[18px]">
            Discover amizing places at exclusive deals
          </p>
        </div>

        {/* Section - Browse */}
        <div className="mx-auto w-[80%]">
          <div className="w-full md:w-[80%] bg-white p-[16px] absolute top-[45%] left-0 md:left-[10%] flex flex-col md:flex-row gap-[20px] rounded-[10px] shadow-[5px_5px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <TextFieldComponent type="text" placeholder="From" />
            <TextFieldComponent type="text" placeholder="To" />
            <TextFieldComponent type="date" />
            <PrimaryButton name={"Search Bus"} />
          </div>

          <div className="w-full mt-[270px] md:mt-[48px] flex">
            <div className="md:w-[30%] hidden md:block">
              <FilterSidebar />
            </div>
            <div className="w-full md:w-[70%] p-4">
              <BusCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseBus;
