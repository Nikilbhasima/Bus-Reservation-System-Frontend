import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAllBus,
  switchLocation,
  updateStatus,
} from "../../redux/agencySlice/busSlice/busThunks";
import { TbSwitchHorizontal } from "react-icons/tb";

function BusDetail2() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate(`busDetailForm/addBus/null`);
  };

  const updateNavigate = (id) => {
    navigate(`busProfile/${id}`);
  };

  const [busList, setBusList] = useState([]);

  useEffect(() => {
    getAllBusDetail();
  }, []);

  const getAllBusDetail = async () => {
    try {
      const response = await dispatch(getAllBus());
      if (response.meta.requestStatus === "fulfilled") {
        setBusList(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const switchCurrentLocation = async (id) => {
    try {
      const response = await dispatch(switchLocation(id));

      if (response.meta.requestStatus === "fulfilled") {
        setBusList((prev) =>
          prev.map((data) =>
            data.busId === response.payload.busId
              ? {
                  ...data,
                  currentBusLocation: response.payload.currentBusLocation,
                }
              : data,
          ),
        );

        console.log("Updated:", response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statusUpdate = async (id) => {
    try {
      const response = await dispatch(updateStatus(id));
      if (response.meta.requestStatus === "fulfilled") {
        setBusList((prev) =>
          prev.map((data) =>
            data.busId === response.payload.busId
              ? { ...data, active: response.payload.active }
              : data,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">Buses</h2>
        <PrimaryButton
          name={`Add Bus`}
          width={true}
          icon={<FaPlus />}
          handleSubmit={navigateToForm}
        />
      </div>

      <div className="max-h-[38rem] sm:max-h-[36rem] lg:max-h-[36rem]  overflow-y-auto relative  mt-[8px]">
        <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 ">
            <tr className="rounded-[12px] ">
              <th className="pl-[8px] font-medium text-white">Bus</th>
              <th className="py-[8px] font-medium text-white">Reg. Number</th>
              <th className="py-[8px] font-medium hidden sm:table-cell text-white">
                Total Seats
              </th>
              <th className="py-[8px] font-medium text-white">Routes</th>
              <th className="py-[8px] font-medium text-white">
                Current Location
              </th>
              <th className="pr-[8px] font-medium text-white">Assign Status</th>
              <th className="pr-[8px] font-medium text-white">Active Status</th>

              <th className="pr-[8px] font-medium text-white">Detail</th>
            </tr>
          </thead>
          <tbody className="">
            {busList.map((data, index) => (
              <tr key={index}>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                  {data?.busName}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                  {data?.busRegistrationNumber}
                </td>
                <td className="py-[8px] font-light hidden sm:table-cell text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.totalSeats}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[2216pxpx]">
                  {data?.routes?.routeName}
                </td>
                <td className="py-[8px] px-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                  <div className="mx-auto flex items-center justify-between">
                    <span>{data?.currentBusLocation}</span>

                    <button
                      onClick={() => switchCurrentLocation(data?.busId)}
                      className="ml-[8px] rounded-[10px] bg-[#078DD7] px-[8px] py-[12px]"
                    >
                      <TbSwitchHorizontal className="rotate-90 text-[24px] text-white" />
                    </button>
                  </div>
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.assignStatus}
                </td>
                <td className="py-[8px] ">
                  <div className="flex justify-center items-center">
                    <div
                      onClick={() => statusUpdate(data.busId)}
                      className={`w-[60px] my-auto h-[30px] flex items-center rounded-full cursor-pointer p-1 transition-all duration-300 
      ${data.active ? "bg-green-500" : "bg-gray-400"}`}
                    >
                      <div
                        className={`flex bg-white w-[24px] h-[24px] rounded-full shadow-md transform transition-all duration-300
        ${data.active ? "translate-x-[30px]" : "translate-x-0"}`}
                      >
                        <span className="text-[10px] m-auto text-[#078DD7] font-semibold">
                          {data?.active ? "ON" : "OFF"}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="pr-[8px] font-light text-[12px] md:text-[16px]  ">
                  {/* <PrimaryButton
                    name={"Detail"}
                    width={true}
                    handleSubmit={() => updateNavigate(data.busId)}
                  /> */}

                  <button
                    className="bg-[#078DD7] text-[white] text-[16px] px-[16px] py-[8px] rounded-[10px] font-light"
                    onClick={() => updateNavigate(data.busId)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BusDetail2;
