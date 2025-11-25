import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addSchedule,
  getAllTravelAgencySchedule,
} from "../../redux/agencySlice/scheduleSlice/ScheduleThunks";

function BusSchedule() {
  const dispatch = useDispatch();
  const [scheduleList, setScheduleList] = useState([]);
  const [scheduleDetail, setScheduleDetail] = useState({
    departureTime: "",
    period: "",
  });
  const handleScheduleDetail = (e) => {
    const { name, value } = e.target;
    setScheduleDetail((pre) => ({ ...pre, [name]: value }));
  };
  const [errors, setErrors] = useState({});
  const ErrorText = ({ message }) => (
    <div className="min-h-[20px]">
      <span
        className={`text-[12px] ml-[8px] text-[#DC2626] flex items-center gap-[4px] transition-opacity duration-200 ${
          message ? "opacity-100" : "opacity-0"
        }`}
      >
        <MdErrorOutline className="text-[16px]" />
        {message || "placeholder"}
      </span>
    </div>
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setScheduleList((pre) => [...pre, scheduleDetail]);

    try {
      const response = await dispatch(addSchedule(scheduleDetail));
      if (response.meta.requestStatus === "fulfilled") {
        setScheduleDetail({
          departureTime: "",
          period: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSchedule();
  }, []);

  const getAllSchedule = async () => {
    try {
      const response = await dispatch(getAllTravelAgencySchedule());
      console.log(response.payload);
      if (response.meta.requestStatus === "fulfilled") {
        setScheduleList(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">
          Bus Schedule
        </h2>
      </div>
      {/* list of schedule */}
      <div className="max-h-[38rem] sm:max-h-[36rem] lg:max-h-[36rem]  overflow-y-auto relative  mt-[8px]">
        <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 text-white ">
            <tr>
              <th className="pl-[8px] py-[8px] font-medium ">SN</th>
              <th className="pl-[8px] py-[8px] font-medium ">Time</th>
              <th className="pl-[8px] py-[8px] font-medium ">
                Periods of the day
              </th>
              <th className="pl-[8px] py-[8px] font-medium ">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {scheduleList.map((data, index) => (
              <tr
                key={index}
                className="transition-all ease-in duration-300 hover:shadow-lg"
              >
                <td className="pl-[8px] py-[16px] text-[12px] md:text-[16px] lg:text-[22px] font-light">
                  {index}
                </td>
                <td className="pl-[8px] py-[8px] text-[12px] md:text-[16px] lg:text-[22px] font-light">
                  {data?.departureTime}
                </td>
                <td className="pl-[8px] py-[8px] text-[12px] md:text-[16px] lg:text-[22px] font-light">
                  {data?.period}
                </td>
                <td className="text-center">
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-[#078DD7] rounded-[10px] text-white py-[8px] px-[16px]">
                      Edit
                    </button>
                    <button className="bg-[#DC2626] rounded-[10px] text-white py-[8px] px-[16px]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* form to add schedule */}
      <form
        className="flex flex-col gap-[1rem] mt-[40px]"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">
          Schedule Form
        </h2>
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          <div className="flex flex-col w-full">
            <label>Departure Time</label>
            <input
              type="time"
              name="departureTime"
              value={scheduleDetail.departureTime}
              onChange={handleScheduleDetail}
              placeholder="Enter Name of Bus"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {/* <ErrorText message={errors.bus_name} /> */}
          </div>

          <div className="flex flex-col w-full">
            <label>Time Period</label>
            <select
              type="text"
              name="period"
              value={scheduleDetail.period}
              onChange={handleScheduleDetail}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value={"null"}>Select a Type</option>
              <option value={"Morning"}>Morning</option>
              <option value={"Afternoon"}>Afternoon</option>
              <option value={"Evening"}>Evening</option>
              <option value={"Night"}>Night</option>
            </select>
            {/* <ErrorText message={errors.bus_type} /> */}
          </div>
        </div>
        <button
          type="submit"
          className="py-[12px] px-[16px] bg-[#078DD7] text-[white] rounded-[10px] w-fit ml-auto"
        >
          Add Schedule
        </button>
      </form>
    </>
  );
}

export default BusSchedule;
