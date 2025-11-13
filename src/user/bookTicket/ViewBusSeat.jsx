import React, { useEffect, useState } from "react";
import BusLayout from "./BusLayout";
import SleepBusLayout from "./SleepBusLayout";
import BusDetail from "./BusDetail";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBusDetailById } from "../../redux/userSlice/busSlice/BusThunks";

function ViewBusSeat() {
  const dispatch = useDispatch();

  const [selectSeat, setSelectSeat] = useState([]);

  const [busDetail, setBusDetail] = useState({});

  const { busId, date } = useParams();
  console.log("travel date:", date);

  useEffect(() => {
    getBusById();
  }, [busId]);

  const getBusById = async () => {
    try {
      const response = await dispatch(getBusDetailById(busId));
      if (response.meta.requestStatus === "fulfilled") {
        setBusDetail(response.payload);
        console.log("bus detail:", response.payload);
      } else {
        console.log("fail to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-[38%_63%] gap-[32px]">
      {/* bus detail */}
      <BusDetail
        seatName={selectSeat}
        busDetailData={busDetail}
        travelDate={date}
      />
      {/* bus layout */}
      <div className="flex gap-[28px] justify-center h-fit">
        <BusLayout seatName={selectSeat} setSeat={setSelectSeat} />
        <SleepBusLayout seatName={selectSeat} setSeat={setSelectSeat} />
      </div>
    </div>
  );
}

export default ViewBusSeat;
