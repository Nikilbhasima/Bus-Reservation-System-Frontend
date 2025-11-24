import React, { useEffect, useState } from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import FilterSidebar from "./Components/FilterSidebar";
import BusCard from "./Components/BusList/BusCard";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBusByRoute } from "../../redux/userSlice/busSlice/BusThunks";
import { CgArrowsExchange } from "react-icons/cg";
import { PiWarningDiamond } from "react-icons/pi";
import { BsFillBusFrontFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { MdDirectionsBus } from "react-icons/md";

function BrowseBus() {
  const dispatch = useDispatch();

  const { rideDetail } = useParams();

  const [searchDetail, setSearchDetail] = useState({
    sourceCity: "",
    destinationCity: "",
    date: "",
  });

  const [busName, setBusName] = useState("");

  const [listOfBus, setListOfBus] = useState([]);

  const [agencyList, setAgencyList] = useState([]);

  // useEffect for handle path variable
  useEffect(() => {
    try {
      if (rideDetail) {
        const data = JSON.parse(decodeURIComponent(rideDetail));

        const today = getCurrentDate();
        const incomingDate = data.date;

        // If date is old, override with today
        if (incomingDate < today) {
          data.date = today;
        }

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

  // useEffect(() => {
  //   getAllBuses();
  // }, []);

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
        setListOfBus(response.payload);
        getListoFtTravelAgency(response.payload);
      } else {
        console.log("data not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getListoFtTravelAgency = (agencies) => {
    const set = new Set();
    agencies.forEach((data) => {
      set.add(data?.travelAgency?.travel_agency_name);
    });
    if (set.length != 0) {
      setAgencyList(set);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      const today = getCurrentDate();
      if (value < today) return; // prevents selecting old date via typing
    }
    setSearchDetail((pre) => ({ ...pre, [name]: value }));
  };

  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleSwipeLocation = () => {
    setSearchDetail((pre) => ({
      ...pre,
      sourceCity: searchDetail.destinationCity,
      destinationCity: searchDetail.sourceCity,
    }));
  };

  // filtering part

  const [selectedTimes, setSelectedTimes] = useState([]);

  const [selectedBusTypes, setSelectedBusTypes] = useState([]);

  const [selectedProviders, setSelectedProviders] = useState([]);

  const [selectAgencyType, setSelectAgencyType] = useState([]);

  return (
    <>
      {/* Main Div */}
      <div className="w-full">
        {/* Browse Bus Header */}
        <div className=" pt-[0] h-[297px] md:p-[60px] flex flex-col justify-center items-center bg-[url(/images/busBrowse-img.png)] bg-center bg-cover text-white relative">
          <h2 className="font-bold text-[32px] z-2">Choose Place to Travel</h2>
          <p className="text-[18px] z-2">
            Discover amizing places at exclusive deals
          </p>
          <div className="w-full md:w-[80%] bg-white p-[16px] absolute z-2 -bottom-[3rem] md:left-[10%] flex flex-col items-center md:flex-row gap-[20px] rounded-[10px] shadow-[5px_5px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <div className="relative w-full">
              <TextFieldComponent
                name="sourceCity"
                type="text"
                placeholder="From"
                value={searchDetail?.sourceCity}
                onChange={handleChange}
              />
              <MdDirectionsBus className="text-[1.4rem] top-[13px] left-[4px] text-[#078DD7] absolute" />
            </div>
            <CgArrowsExchange
              className="text-[10rem] text-[#078DD7]  h-fit p-[0]"
              onClick={handleSwipeLocation}
            />

            <div className="relative w-full">
              <TextFieldComponent
                name="destinationCity"
                type="text"
                placeholder="To"
                value={searchDetail?.destinationCity}
                onChange={handleChange}
              />
              <IoLocation className="text-[1.5rem] top-[10px] left-[4px] text-[#078DD7] absolute" />
            </div>

            <TextFieldComponent
              type="date"
              name="date"
              value={searchDetail?.date}
              onChange={handleChange}
              min={getCurrentDate()}
            />
            <PrimaryButton name={"Search Bus"} handleSubmit={getAllBuses} />
          </div>

          <div className="absolute bg-[rgba(0,0,0,0.25)] top-0 left-0 w-full h-full z-1"></div>
        </div>

        {/* Section - Browse */}
        <div className="mx-auto w-[80%]">
          {/* Search */}

          {/* List */}
          <div className="w-full mt-[270px] md:mt-[48px] flex">
            <div className="md:w-[30%] hidden md:block">
              <FilterSidebar
                selectedTimes={selectedTimes}
                setSelectedTimes={setSelectedTimes}
                selectedBusTypes={selectedBusTypes}
                setSelectedBusTypes={setSelectedBusTypes}
                selectedProviders={selectedProviders}
                setSelectedProviders={setSelectedProviders}
                setBusName={setBusName}
                agencyList={agencyList}
                setSelectAgencyType={setSelectAgencyType}
                selectAgencyType={selectAgencyType}
              />
            </div>
            <div className="w-full  h-[44rem] md:w-[70%] p-4  overflow-hidden overflow-y-auto custom-scrollbar flex flex-col ">
              {listOfBus
                .filter((data) => {
                  let period = true;
                  let busType = true;
                  let agency = true;
                  let name = true;

                  console.log("printing data:", data);

                  if (selectedBusTypes.length !== 0) {
                    busType = selectedBusTypes.includes(data?.busType);
                  }

                  if (selectAgencyType.length !== 0) {
                    agency = selectAgencyType.includes(
                      data?.travelAgency?.travel_agency_name
                    );
                  }

                  if (selectedTimes.length !== 0) {
                    period = selectedTimes.includes(data?.busSchedules?.period);
                  }

                  if (busName && busName.trim() !== "") {
                    name = data?.busName
                      .toLowerCase()
                      .includes(busName.toLowerCase());
                  }
                  return period && busType && name && agency;
                })
                .map((data, index) => (
                  <BusCard
                    key={index}
                    busDetail={data}
                    date={searchDetail?.date}
                  />
                ))}
              {listOfBus.length === 0 && (
                <div className="flex flex-col  gap-[1rem] w-[30rem]  flex items-center justify-center m-auto ">
                  <div className="p-[2rem] rounded-full bg-[#078DD7]/20">
                    <BsFillBusFrontFill className="text-[3rem] text-[#078DD7]" />
                  </div>

                  <h2 className="text-[28px] font-semibold">No Bus Found</h2>
                  <p className="text-thin opacity-50 text-center text-[14px]">
                    We couldn't find any buses matching your search criteria.
                    Try adjusting your filters or search for a different route.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseBus;
