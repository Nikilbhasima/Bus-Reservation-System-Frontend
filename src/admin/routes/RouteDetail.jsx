import React, { useEffect, useState } from "react";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getAllRoute } from "../../redux/agencySlice/routeSlice/RouteThunks";

const RouteDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [routeDetailList, setRouteDetailList] = useState([]);
  const navigateToForm = () => {
    navigate("routeForm/addRoute/null");
  };

  const updateNavigate = (id) => {
    navigate(`routeFullDetal/${id}`);
  };

  useEffect(() => {
    getAllRoutes();
  }, []);
  const getAllRoutes = async () => {
    try {
      const response = await dispatch(getAllRoute());
      if (response.meta.requestStatus === "fulfilled") {
        setRouteDetailList(response.payload);
        console.log("route data:", response.payload);
      }
    } catch (error) {
      console.log(error);
    }
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
            <th className="pr-[8px] font-medium hidden hidden sm:table-cell">
              Source
            </th>
            <th className="pr-[8px] font-medium hidden hidden sm:table-cell">
              Destination
            </th>
            <th className="py-[8px] font-medium">Distance</th>
            <th className="py-[8px] font-medium">Duration</th>
            <th className="pr-[8px] font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="bg-[#EBEBEB]">
          {routeDetailList.map((data, index) => (
            <tr key={index}>
              <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                {data?.routeName}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                Rs {data?.price}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] hidden sm:table-cell">
                Rs {data?.sourceCity}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] hidden sm:table-cell">
                Rs {data?.destinationCity}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                {data?.distance} km
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                {data?.duration} km
              </td>
              <td className="pr-[8px] font-light text-[12px] md:text-[16px] ">
                <PrimaryButton
                  name={"Detail"}
                  width={true}
                  handleSubmit={() => updateNavigate(data?.routeId)}
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
