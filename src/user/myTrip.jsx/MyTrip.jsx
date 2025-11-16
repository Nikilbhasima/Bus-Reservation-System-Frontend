import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import { useDispatch } from "react-redux";
import { getUserBooking } from "../../redux/userSlice/bookingSlice/BookingThunks";

function MyTrip() {
  const dispatch = useDispatch();

  const [listOfUserBookings, setListofUserBookings] = useState([]);

  useEffect(() => {
    getAllUserBooking();
  }, []);

  const getAllUserBooking = async () => {
    try {
      const response = await dispatch(getUserBooking());
      if (response.meta.requestStatus === "fulfilled") {
        setListofUserBookings(response.payload);
      } else {
        console.log("fail to fetch user booking");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-[32px]">
      <h2 className="font-bold text-[24px]">My Trips</h2>

      <div className="p-[16px] w-full flex flex-col gap-[32px]">
        {listOfUserBookings.map((data, index) => (
          <TicketCard key={index} bookingData={data} />
        ))}
      </div>
    </div>
  );
}

export default MyTrip;
