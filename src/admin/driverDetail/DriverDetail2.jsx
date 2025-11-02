import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTravelAgencyDriver } from "../../redux/agencySlice/driverSlice/DriverThunks";

function DriverDetail2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToForm = () => {
    navigate(`driverForm/addDriver/null`);
  };

  const updateNavigate = (id) => {
    navigate(`driverProfile/${id}`);
  };

  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    getAllDriver();
  }, []);
  const getAllDriver = async () => {
    try {
      const response = await dispatch(getTravelAgencyDriver());
      if (response.meta.requestStatus === "fulfilled")
        [setDriverList(response.payload)];
      console.log(response.payload);
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
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#D9D9D9] sticky top-0 ">
            <tr className="rounded-[12px] ">
              <th className="pl-[8px] font-medium ">Photo</th>
              <th className="py-[8px] font-medium">Driver</th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Email
              </th>
              <th className="py-[8px] font-medium">Phone</th>
              <th className="pr-[8px] font-medium">Detail</th>
            </tr>
          </thead>
          <tbody className="bg-[#EBEBEB]">
            {driverList.map((data, index) => (
              <tr key={index}>
                <td className="pl-[8px] py-[8px] font-light flex justify-center">
                  <img
                    src={
                      data?.driver_photo
                        ? data?.driver_photo
                        : "/images/userImage.png"
                    }
                    className="w-[50px] h-[50px] rounded-[100%] object-cover object-top"
                  />
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px] ">
                  {data?.driver_name}
                </td>
                <td className="py-[8px] font-light hidden sm:table-cell text-[12px] md:text-[16px] lg:text-[22px]">
                  {data?.driver_email}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[22px]">
                  +977 {data?.driver_phone}
                </td>
                <td className="pr-[8px] font-light text-[12px] md:text-[16px] ">
                  <PrimaryButton
                    name={"Detail"}
                    width={true}
                    handleSubmit={() => updateNavigate(data.driverId)}
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

export default DriverDetail2;
