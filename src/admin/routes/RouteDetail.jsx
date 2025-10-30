import React from "react";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const RouteDetail = () => {
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate("routeForm/addRoute/null");
  };

  const updateNavigate = (id) => {
    navigate(`routeFullDetal/${id}`);
  };
  return (
    <div>
      {/* route detail title */}
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">Routes</h2>
        <PrimaryButton
          name={`Add Driver`}
          width={true}
          icon={<FaPlus />}
          handleSubmit={navigateToForm}
        />
      </div>
      {/* route detail table */}
      <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
        <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#D9D9D9] sticky top-0 ">
          <tr className="rounded-[12px] ">
            <th className="pl-[8px] font-medium ">Route Name</th>
            <th className="py-[8px] font-medium">Ticket Price</th>
            <th className="py-[8px] font-medium">Distance</th>
            <th className="pr-[8px] font-medium">Duration</th>
          </tr>
        </thead>
        <tbody className="bg-[#EBEBEB]">
          {[...Array(10)].map((_, i) => (
            <tr key={i}>
              <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                Kathmadu-Pokhera
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                Rs 1800
              </td>

              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                203 km
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
  );
};

export default RouteDetail;
