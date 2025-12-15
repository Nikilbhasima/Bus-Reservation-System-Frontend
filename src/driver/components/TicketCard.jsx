import { useDispatch } from "react-redux";
import { updateUserBoard } from "../../redux/agencySlice/driverSlice/DriverThunks";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiXCircle } from "react-icons/pi";
import { TbTicket } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { PiSeatThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

const TicketCard = ({ data, setBookingList }) => {
  const dispatch = useDispatch();

  const { bookingId, user, tripDate, seatName, board } = data;

  const handleOnBoard = async () => {
    try {
      const response = await dispatch(updateUserBoard(bookingId));
      if (response.meta.requestStatus === "fulfilled") {
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
    <div className="bg-[#104E70] text-white flex gap-[16px]  items-center p-[16px] rounded-[12px] ">
      <div className="flex flex-col gap-[16px] w-full ">
        <div className="flex items-center gap-[8px]">
          <span className="text-[white]  rounded-[10px] text-[22px] ">
            <TbTicket />
          </span>
          <div className="flex flex-col">
            <span className="font-light text-[15px]">Ticket ID:</span>
            <span className="text-[22px]"> # {bookingId}</span>
          </div>
        </div>

        <div className="flex justify-between w-full ">
          {/* username */}
          <div className="flex gap-[16px] items-center">
            <span className="rounded-[10px]">
              <FaRegUser className="text-[18px] text-[white]" />
            </span>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-light">Passenger</span>
              <span className="text-[16px] md:text-[22px]">
                {user?.username}{" "}
              </span>
            </div>
          </div>
          {/* trip date */}
          <div className="flex gap-[16px] items-center">
            <span className=" rounded-[10px] ">
              <CiCalendar className="text-[18px] text-[white]" />
            </span>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px]  font-light">Date</span>
              <span className="text-[16px] md:text-[22px]">{tripDate} </span>
            </div>
          </div>
          {/* seat names */}
          <div className="flex gap-[16px] items-center">
            <span className="rounded-[10px]">
              <PiSeatThin className="text-[22px] text-[white]" />
            </span>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-light">Reserved Seat</span>
              <span className="flex gap-[4px]">
                {seatName?.map((data) => (
                  <div className="bg-[white] text-[#078DD7] rounded-[10px] px-[4px] py-[4px] md:px-[6px] md:py-[6px]">
                    {data}
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* <p>Name: | Date: </p>
        <p>Reserved Seats: {seatName?.join(", ")}</p> */}
      </div>
      <div className="ml-auto">
        <button
          onClick={() => {
            if (!data?.board) handleOnBoard();
          }}
          className={`md:px-[12px] md:py-[14px] p-[12px]  rounded-[12px] flex flex-nowrap items-center gap-[8px]  ${
            data?.board
              ? "bg-[#14b8a6]"
              : "bg-white hover:-translate-y-1 transition-all duration-300  text-[#078DD7]"
          } `}
        >
          <span className="text-nowrap text-[14px] ">Mark Boarded</span>
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
