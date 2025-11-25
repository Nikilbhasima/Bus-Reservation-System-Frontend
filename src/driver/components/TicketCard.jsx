const TicketCard = ({ data }) => {
  const { bookingId, user, bookingDate, seatName } = data;
  return (
    <div className="bg-[#078DD7] text-white flex gap-[16px] justify-between items-center p-[16px] rounded-[12px]">
      <div className="flex flex-col gap-[4px]">
        <p>Ticket ID: {bookingId}</p>
        <p>
          Name: {user?.username} | Date: {bookingDate}
        </p>
        <p>Reserved Seats: {seatName?.join(", ")}</p>
      </div>
      <div>
        <button className="bg-white text-[#078DD7] px-[16px] py-[16px] rounded-[12px]">
          Mark Boarded
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
