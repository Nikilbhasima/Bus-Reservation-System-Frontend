import React, { useEffect, useState } from "react";
import BusLayout from "./BusLayout";
import SleepBusLayout from "./SleepBusLayout";
import BusDetail from "./BusDetail";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBusDetailById } from "../../redux/userSlice/busSlice/BusThunks";
import { getBookingsByBusIdAndDate } from "../../redux/userSlice/bookingSlice/BookingThunks";

function ViewBusSeat() {
  const dispatch = useDispatch();

  const [selectSeat, setSelectSeat] = useState([]);

  const [busDetail, setBusDetail] = useState({});

  const { busId, travelDate } = useParams();

  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    getBusById();
    getAllBusBooking();
  }, [busId]);

  const getBusById = async () => {
    try {
      const response = await dispatch(
        getBusDetailById({ busId: busId, travelDate: travelDate })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setBusDetail(response.payload);
      } else {
        console.log("fail to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBusBooking = async () => {
    try {
      const response = await dispatch(
        getBookingsByBusIdAndDate({ busId: busId, tripDate: travelDate })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setBookingList(response.payload);
      } else {
        console.log("error to fetch booking detail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`grid ${
        busDetail?.busType === "busType" ? "grid-cols-[38%_63%]" : "grid-cols-2"
      }  gap-[32px]`}
    >
      {/* bus detail */}
      <BusDetail
        seatName={selectSeat}
        busDetailData={busDetail}
        travelDate={travelDate}
      />
      {/* bus layout */}
      <div className={`flex gap-[28px] justify-center  h-fit`}>
        <BusLayout
          seatName={selectSeat}
          setSeat={setSelectSeat}
          bookingList={bookingList}
        />
        {busDetail?.busType === "busType" && (
          <SleepBusLayout seatName={selectSeat} setSeat={setSelectSeat} />
        )}
      </div>
    </div>
  );
}

export default ViewBusSeat;
