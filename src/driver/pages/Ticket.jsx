import { useEffect, useState } from "react";
import BusLayout from "../../user/bookTicket/BusLayout";
import TicketCard from "../components/TicketCard";
import { useDispatch } from "react-redux";
import { getBookingByDriverIdAndDate } from "../../redux/userSlice/bookingSlice/BookingThunks";

const Ticket = () => {
  const dispatch = useDispatch();

  const [bookingList, setBookingList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    console.log(today);

    getBookingList(today);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const getBookingList = async (today) => {
    try {
      const response = await dispatch(getBookingByDriverIdAndDate(today));
      if (response.meta.requestStatus === "fulfilled") {
        console.log("booking data:", response.payload);
        setBookingList(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBookings = bookingList.filter((item) => {
    const ticketId = item.bookingId?.toString() || "";
    const username = item.user?.username?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();

    return ticketId.includes(query) || username.includes(query);
  });
  return (
    <div>
      <h2 className="font-bold text-[32px] mb-[32px]">
        Today's Booking [Date: {today}]
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-[24px]">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="Search ticket"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border px-[16px] py-[8px] rounded-[12px] w-[60%] md:w-[80%]"
            />
            <button className="bg-[#078DD7] text-white text-medium px-[24px] py-[12px] rounded-[12px] w-[40%] md:w-[20%]">
              Search Ticket
            </button>
          </div>
          <div className="flex flex-col gap-[24px]">
            {filteredBookings.map((data, index) => (
              <TicketCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <BusLayout bookingList={bookingList} user={"driver"} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
