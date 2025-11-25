import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBusDriver } from "../../redux/agencySlice/driverSlice/DriverThunks";

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

      <div>
        <h2 className="font-medium text-[20px]">{driver?.driver_name}</h2>
      </div>
    </div>
  );
};

export default DriverHeader;
