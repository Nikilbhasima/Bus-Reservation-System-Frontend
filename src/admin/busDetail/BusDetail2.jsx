import React from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";

function BusDetail2() {
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate(`busDetailForm/addBus/null`);
  };

  const updateNavigate = (id) => {
    navigate(`busProfile`);
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
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td className="pl-[8px] py-[8px] text-[12px] md:text-[16px] lg:text-[22px] font-light flex justify-center">
                  Kathmandu Yatayat
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                  बा ४ ख ०१२३
                </td>
                <td className="py-[8px] font-light hidden sm:table-cell text-[12px] md:text-[16px] lg:text-[22px]">
                  28
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
                    handleSubmit={() => updateNavigate(1)}
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
