import BusLayout from "../../user/bookTicket/BusLayout";
import TicketCard from "../components/TicketCard";

const Ticket = () => {
  return (
    <div>
      <h2 className="font-bold text-[32px] mb-[32px]">Today's Booking</h2>
      <div className="flex flex-col md:flex-row justify-between gap-[24px]">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="Search ticket"
              className="border px-[16px] py-[8px] rounded-[12px] w-[60%] md:w-[80%]"
            />
            <button className="bg-[#078DD7] text-white text-medium px-[24px] py-[12px] rounded-[12px] w-[40%] md:w-[20%]">
              Search Ticket
            </button>
          </div>
          <div className="flex flex-col gap-[24px]">
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </div>
        </div>
        <div className="flex justify-center">
          <BusLayout bookingList={[]} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
