import { useDispatch } from "react-redux";
import DriverHeader from "./components/DriverHeader";
import DriverContent from "./DriverContent";
import { useEffect, useState } from "react";
import { getBusDriver } from "../redux/agencySlice/driverSlice/DriverThunks";

const DriverLayout = () => {
  const dispatch = useDispatch();
  const [driver, setDriver] = useState();

  const getDriver = async () => {
    try {
      const response = await dispatch(getBusDriver());
      if (response.meta.requestStatus === "fulfilled") {
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
    <div>
      <DriverHeader driver={driver} />
      <DriverContent driverId={driver?.driverId} />
    </div>
  );
};

export default DriverLayout;
