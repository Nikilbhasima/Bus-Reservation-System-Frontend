import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBusDriver } from "../../redux/agencySlice/driverSlice/DriverThunks";
import { logout } from "../../redux/authSlice/AuthSlice";
import { useNavigate } from "react-router-dom";

const DriverHeader = () => {
  const dispatch = useDispatch();
  const [driver, setDriver] = useState();

  const getDriver = async () => {
    try {
      const response = await dispatch(getBusDriver());
      if (response.meta.requestStatus === "fulfilled") {
        console.log("Driver", response.payload);
        setDriver(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDriver();
  }, []);

  return (
    <div className="bg-[#078DD7] text-white px-[16px] md:px-[64px] py-[18px] flex justify-between items-center">
      <div className="flex flex-col gap-[4px]">
        <h2 className="font-bold text-[24px]">{driver?.bus?.busName}</h2>
        <p className="font-medium">
          Route: {driver?.bus?.routes?.sourceCity} -
          {driver?.bus?.routes?.destinationCity}
        </p>
      </div>

      <div className="flex gap-[24px] items-center">
        <h2 className="font-medium text-[20px]">{driver?.driver_name}</h2>
        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="bg-white text-[#078DD7] border rounded-[8px] px-[28px] py-[12px] font-medium  cursor-pointer hover:bg-[#078DD7] hover:text-white transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DriverHeader;
