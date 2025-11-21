const TicketCard = () => {
  return (
    <div className="bg-[#078DD7] text-white flex gap-[16px] justify-between items-center p-[16px] rounded-[12px]">
      <div className="flex flex-col gap-[4px]">
        <p>Ticket ID: </p>
        <p>Name | Date |</p>
        <p>Reserved Seats: </p>
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
