import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import { useDispatch } from "react-redux";
import { getUserBooking } from "../../redux/userSlice/bookingSlice/BookingThunks";
import { useNavigate } from "react-router-dom";

function MyTrip() {
  const dispatch = useDispatch();

  const [listOfUserBookings, setListofUserBookings] = useState([]);

  const navigate = useNavigate();

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (!token) {
      navigate("/");
    }
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
      <h2 className="font-bold text-[32px]">My Trips</h2>
      <div className="p-[16px] w-full flex flex-col gap-[32px]">
        <h2 className="text-[24px] opacity-50 font-semibold ">Active Trip</h2>
        {listOfUserBookings
          .filter((data) => data?.status === "CONFIRMED")
          .map((data, index) => (
            <TicketCard
              key={index}
              bookingData={data}
              setListofUserBookings={setListofUserBookings}
            />
          ))}
      </div>

      <div className="relative p-[16px] w-full flex flex-col gap-[24px]  max-h-[40rem]  overflow-hidden overflow-y-auto custom-scrollbar">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] text-black/50  py-[12px] font-semibold -top-5 left-0 sticky bg-[white]">
            Booking History
          </h2>

          <div className="flex items-center gap-[16px]">
            <label className=" opacity-[50%]">Filter:</label>
            <select
              className="border-[2px] rounded-[10px] py-[8px] px-[12px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className="opacity-[50%]" value="">
                Filter Booking
              </option>
              <option value="CANCELLED">Cancelled</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
        </div>

        {listOfUserBookings
          .filter((data) => {
            const check1 = data?.status != "CONFRIMED";

            let check2 = false;

            if (filter === "") {
              check2 = true;
            } else {
              check2 = data?.status === filter;
            }

            return check1 && check2;
          })
          .map((data, index) => (
            <TicketCard key={index} bookingData={data} />
          ))}
      </div>
    </div>
  );
}

export default MyTrip;
