import React, { useEffect, useState } from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import FilterSidebar from "./Components/FilterSidebar";
import BusCard from "./Components/BusList/BusCard";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBusByRoute } from "../../redux/userSlice/busSlice/BusThunks";

function BrowseBus() {
  const dispatch = useDispatch();

  const { rideDetail } = useParams();

  const [searchDetail, setSearchDetail] = useState({
    sourceCity: "",
    destinationCity: "",
    date: "",
  });

  const [listOfBus, setListOfBus] = useState([]);

  // useEffect for handle path variable
  useEffect(() => {
    try {
      if (rideDetail) {
        const data = JSON.parse(decodeURIComponent(rideDetail));
        setSearchDetail(data);
      }
    } catch (err) {
      console.error("Invalid data:", err);
    }
  }, [rideDetail]);

  // useEffect for fetching data
  useEffect(() => {
    getAllBuses();
  }, [searchDetail, dispatch]);

  const getAllBuses = async () => {
    try {
      const route = {
        sourceCity: searchDetail?.sourceCity,
        destinationCity: searchDetail?.destinationCity,
      };
      const response = await dispatch(
        getBusByRoute({ routeData: route, date: searchDetail?.date })
      );
      if (response.meta.requestStatus === "fulfilled") {
        console.log(response.payload);
        setListOfBus(response.payload);
      } else {
        console.log("data not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchDetail((pre) => ({ ...pre, [name]: value }));
  };
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
          {/* Search */}
          <div className="w-full md:w-[80%] bg-white p-[16px] absolute top-[45%] left-0 md:left-[10%] flex flex-col md:flex-row gap-[20px] rounded-[10px] shadow-[5px_5px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <TextFieldComponent
              name="sourceCity"
              type="text"
              placeholder="From"
              value={searchDetail?.sourceCity}
              onChange={handleChange}
            />
            <TextFieldComponent
              name="destinationCity"
              type="text"
              placeholder="To"
              value={searchDetail?.destinationCity}
              onChange={handleChange}
            />
            <TextFieldComponent
              type="date"
              name="date"
              value={searchDetail?.date}
              onChange={handleChange}
            />
            <PrimaryButton name={"Search Bus"} handleSubmit={getAllBuses} />
          </div>

          {/* List */}
          <div className="w-full mt-[270px] md:mt-[48px] flex">
            <div className="md:w-[30%] hidden md:block">
              <FilterSidebar />
            </div>
            <div className="w-full md:w-[70%] p-4">
              {listOfBus.map((data, index) => (
                <BusCard key={index} busDetail={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseBus;
