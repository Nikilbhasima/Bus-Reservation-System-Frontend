import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllBus } from "../../redux/agencySlice/busSlice/busThunks";

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
        console.log(response.payload);
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
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#D9D9D9] sticky top-0 ">
            <tr className="rounded-[12px] ">
              <th className="pl-[8px] font-medium ">Bus</th>
              <th className="py-[8px] font-medium">Reg. Number</th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Total Seats
              </th>
              <th className="py-[8px] font-medium">Routes</th>
              <th className="py-[8px] font-medium">Current Location</th>
              <th className="pr-[8px] font-medium">Detail</th>
            </tr>
          </thead>
          <tbody className="bg-[#EBEBEB]">
            {busList.map((data, index) => (
              <tr key={index}>
                <td className="pl-[8px] py-[8px] text-[12px] md:text-[16px] lg:text-[22px] font-light flex justify-center">
                  {data?.busName}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                  {data?.busRegistrationNumber}
                </td>
                <td className="py-[8px] font-light hidden sm:table-cell text-[12px] md:text-[16px] lg:text-[22px]">
                  {data?.totalSeats}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                  Kathmandu-Siraha
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                  Kathmandu
                </td>
                <td className="pr-[8px] font-light text-[12px] md:text-[16px] ">
                  <PrimaryButton
                    name={"Detail"}
                    width={true}
                    handleSubmit={() => updateNavigate(data.busId)}
                  />
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
