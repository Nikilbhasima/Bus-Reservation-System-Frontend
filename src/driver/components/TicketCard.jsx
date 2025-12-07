import { useDispatch } from "react-redux";
import { updateUserBoard } from "../../redux/agencySlice/driverSlice/DriverThunks";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiXCircle } from "react-icons/pi";

const TicketCard = ({ data, setBookingList }) => {
  const dispatch = useDispatch();

  const { bookingId, user, tripDate, seatName, board } = data;
  console.log("booking data:", data);

  const handleOnBoard = async () => {
    console.log("is being called");
    try {
      const response = await dispatch(updateUserBoard(bookingId));
      if (response.meta.requestStatus === "fulfilled") {
        console.log("update Response:", response.payload);
        setBookingList((prev) =>
          prev.map((item) =>
            item.bookingId === bookingId
              ? { ...item, board: response?.payload?.board }
              : item
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#078DD7] text-white flex gap-[16px] justify-between items-center p-[16px] rounded-[12px]">
      <div className="flex flex-col gap-[4px]">
        <p>Ticket ID: {bookingId}</p>
        <p>
          Name: {user?.username} | Date: {tripDate}
        </p>
        <p>Reserved Seats: {seatName?.join(", ")}</p>
      </div>
      <div>
        <button
          onClick={() => {
            if (!data?.board) handleOnBoard();
          }}
          className={`px-[16px] py-[16px] rounded-[12px] flex items-center gap-[8px] ${
            data?.board
              ? "bg-[#14b8a6]"
              : "bg-white hover:-translate-y-1 transition-all duration-300  text-[#078DD7]"
          } `}
        >
          <span>Mark Boarded</span>
          {data?.board ? (
            <IoCheckmarkCircleOutline className="text-[22px]" />
          ) : (
            <PiXCircle className="text-[22px]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
