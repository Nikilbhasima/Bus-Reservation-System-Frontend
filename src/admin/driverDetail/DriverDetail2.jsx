import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  assignBus,
  getTravelAgencyDriver,
  unassignBus,
} from "../../redux/agencySlice/driverSlice/DriverThunks";
import { RxCross2 } from "react-icons/rx";
import { getAllBus } from "../../redux/agencySlice/busSlice/busThunks";

function DriverDetail2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [busList, setBusList] = useState([]);
  const navigateToForm = () => {
    navigate(`driverForm/addDriver/0`);
  };

  const updateNavigate = (id) => {
    navigate(`driverProfile/${id}`);
  };

  const [driverList, setDriverList] = useState([]);

  const [busId, setBusId] = useState({});

  useEffect(() => {
    getAllDriver();
    getAllBuses();
  }, []);

  const getAllDriver = async () => {
    try {
      const response = await dispatch(getTravelAgencyDriver());
      if (response.meta.requestStatus === "fulfilled")
        setDriverList(response.payload);
      console.log(response.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBuses = async () => {
    try {
      const response = await dispatch(getAllBus());
      if (response.meta.requestStatus === "fulfilled") {
        console.log("list of bus", response.payload);
        setBusList(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignBus = async (e, driverId) => {
    e.preventDefault();

    const selectedBusId = busId[driverId];

    try {
      const response = await dispatch(
        assignBus({ driverId: driverId, busId: selectedBusId })
      );
      if (response.meta.requestStatus === "fulfilled") {
        getAllBus();
        setDriverList((prev) =>
          prev.map((data) =>
            data.driverId === response.payload.driverId
              ? response.payload
              : data
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBusUnassign = async (driverId) => {
    try {
      const response = await dispatch(unassignBus(driverId));
      if (response.meta.requestStatus === "fulfilled") {
        setDriverList((prev) =>
          prev.map((data) =>
            data.driverId === response.payload.driverId
              ? response.payload
              : data
          )
        );
        getAllBuses();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">Drivers</h2>
        <PrimaryButton
          name={`Add Driver`}
          width={true}
          icon={<FaPlus />}
          handleSubmit={navigateToForm}
        />
      </div>
      <div className="max-h-[38rem] sm:max-h-[36rem] lg:max-h-[36rem]  overflow-y-auto relative  mt-[8px]">
        <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 ">
            <tr className="rounded-[12px] ">
              <th className="pl-[8px] font-medium text-white">Photo</th>
              <th className="py-[8px] font-medium text-white">Driver</th>
              <th className="py-[8px] font-medium hidden sm:table-cell text-white">
                Email
              </th>
              <th className="py-[8px] font-medium text-white">Phone</th>
              <th className="py-[8px] font-medium text-white">Assigned Bus</th>
              <th className="pr-[8px] font-medium text-white">Detail</th>
            </tr>
          </thead>
          <tbody className="">
            {driverList.map((data, index) => (
              <tr key={index}>
                <td className="pl-[8px] py-[8px] font-light flex justify-center">
                  <img
                    src={
                      data?.driver_photo
                        ? data?.driver_photo
                        : "/images/userImage.png"
                    }
                    className="w-[50px] h-[50px] rounded-[10px] object-cover object-top"
                  />
                </td>
                <td className="py-[8px]  font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                  {data?.driver_name}
                </td>
                <td className="py-[8px] font-light hidden sm:table-cell text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.driver_email}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  +977 {data?.driver_phone}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  <div className="flex  justify-between">
                    {data?.bus?.busName ? data?.bus?.busName : "Assign Bus:"}
                    {data?.bus?.busName ? (
                      <button
                        onClick={() => {
                          handleBusUnassign(data?.driverId);
                        }}
                        className="flex items-center justify-center gap-[8px] text-white text-[12px] p-[8px] rounded-[10px]  bg-[#FF3B30] hover:-translate-y-1 duration-300 transition-all ease-in"
                      >
                        <RxCross2 className="text-[12px]" />
                        Unassign
                      </button>
                    ) : (
                      <form
                        className="flex items-center gap-[8px]"
                        onSubmit={(e) => handleAssignBus(e, data?.driverId)}
                      >
                        <select
                          className="border-[2px] text-[14px] border-[#078DD7]/30 rounded-[10px] px-[12px] py-[4px]"
                          name=""
                          id=""
                          value={busId[data?.driverId]}
                          onChange={(e) =>
                            setBusId({
                              ...busId,
                              [data.driverId]: e.target.value,
                            })
                          }
                        >
                          <option value={null}>Select Bus</option>
                          {busList
                            .filter((data) => data?.assignStatus != "ASSIGN")
                            .map((data, index) => (
                              <option
                                className="text-[12px]"
                                key={index}
                                value={data?.busId}
                              >
                                {data?.busName}
                              </option>
                            ))}
                        </select>
                        <button
                          type="submit"
                          className=" text-white text-[12px] p-[8px] rounded-[10px]  bg-[#078DD7] hover:-translate-y-1 duration-300 transition-all ease-in"
                        >
                          Set
                        </button>
                      </form>
                    )}
                  </div>
                </td>
                <td className="pr-[8px] font-light text-[12px] md:text-[16px] ">
                  <button
                    onClick={() => updateNavigate(data.driverId)}
                    className="bg-[#078DD7] text-[white] text-[16px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in"
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

export default DriverDetail2;
