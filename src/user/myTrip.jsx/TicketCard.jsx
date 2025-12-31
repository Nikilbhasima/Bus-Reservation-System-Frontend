import { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { calculateArrivalTime, formatTimeTo12Hr } from "../../utils/timeFormat";
import downloadTicket from "../../utils/downloadTicket";
import { RxDownload } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Box, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { cancelBooking } from "../../redux/userSlice/bookingSlice/BookingThunks";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #078DD7",
  borderRadius: "10px",
  overflow: "hidden",
};
const TicketCard = ({ bookingData, setListofUserBookings }) => {
  const dispatch = useDispatch();

  const [showCancellationModel, setShowCancellationModel] = useState(false);

  const [cancellationReason, setCancellationReason] = useState("");

  const [loading, setLoading] = useState(false);

  const handleBookingCancellation = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (cancellationReason.trim() !== "") {
      try {
        const response = await dispatch(
          cancelBooking({
            cancelReason: cancellationReason,
            bookingId: bookingData?.bookingId,
          })
        );
        if (response.meta.requestStatus === "fulfilled") {
          console.log("cancellation response:", response);
          setListofUserBookings((prev) =>
            prev.map((item) =>
              item.bookingId === bookingData.bookingId
                ? { ...item, status: "CANCELLED" } // or use response payload value
                : item
            )
          );
          setShowCancellationModel(false);
          setLoading(false);
          toast.error(
            `You have been charged ${response.payload.data.fineInPercentage}% for cancellation.`
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {/* Card */}
      <div className=" rounded-[10px] flex flex-col gap-[8px] w-full border border-[#078DD7] overflow-hidden">
        {/* First Row */}
        <div
          className={`flex items-center justify-between ${
            bookingData?.status === "COMPLETED"
              ? "bg-gradient-to-r from-gray-700 to-gray-800"
              : bookingData?.status === "CANCELLED"
              ? "bg-[#E53935]"
              : "bg-[#078DD7]"
          }  p-[16px] pt-[16px]`}
        >
          {/* Dats in Row 1*/}
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-medium text-[white]">
              Booking #{bookingData?.bookingId}
            </h3>
            <p className="text-white/50 ">
              Booked in: <span className="">{bookingData?.bookingDate}</span>
            </p>
          </div>

          <div>
            <span
              className={`text-lime-400 font-bold ${
                bookingData?.status === "CANCELLED" && "text-white"
              }`}
            >
              {bookingData?.status}
            </span>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between px-[16px]">
          {/* Departure */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-medium">{bookingData?.sourceCity}</h2>
            <h3>
              {formatTimeTo12Hr(
                bookingData?.busId?.busSchedules?.departureTime
              )}
            </h3>

            {bookingData?.status === "CANCELLED" && (
              <p className="text-black/50">Fine:</p>
            )}

            <p className="text-black/50">Trip Date:</p>
          </div>

          {/* Icon */}
          <div>
            <MdOutlineArrowRightAlt />
          </div>

          {/* Arrival */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-medium">{bookingData?.destinationCity}</h2>
            <h3>
              {formatTimeTo12Hr(
                calculateArrivalTime(
                  bookingData?.busId?.busSchedules?.departureTime,
                  bookingData?.busId?.routes?.duration
                )
              )}
            </h3>

            {bookingData?.status === "CANCELLED" && (
              <p className="text-black/50">{bookingData?.fineInPercentage}%</p>
            )}

            <p className="text-black/50">{bookingData?.tripDate}</p>
          </div>
        </div>

        <hr />

        {/* Third Row */}
        <div className="flex items-center justify-between px-[16px]">
          {/* Bus Name */}
          <div>
            <h2 className="font-medium">
              {bookingData?.busId?.busName}
              <span className="ml-[8px] opacity-50 font-light">
                ({bookingData?.busId?.travelAgency?.travel_agency_name})
              </span>
            </h2>
          </div>

          {/* Selected Seats */}
          <div>
            <div className="flex gap-[8px]">
              {bookingData?.seatName.map((data, index) => (
                <div
                  key={index}
                  className="px-[8px] py-[4px] rounded-[8px] text-white bg-gray-400"
                >
                  {data}
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          {/* Price */}
          <div>
            <h2 className="font-medium">
              Rs.
              {bookingData?.seatName
                .map((seat) => {
                  // Check if seat is sleeper (starts with 'S')
                  if (seat.startsWith("S")) {
                    return bookingData?.busId?.sleeperPrice || 0;
                  } else {
                    // Use bus seat price if defined, otherwise fallback to route price
                    return bookingData?.busId?.seatPrice &&
                      bookingData?.busId?.seatPrice !== 0
                      ? bookingData?.busId?.seatPrice
                      : bookingData?.busId?.routes?.price || 0;
                  }
                })
                .reduce((acc, curr) => acc + curr, 0) + 100}
            </h2>
          </div>
        </div>

        <hr />

        {/* Fourth Row */}
        <div className="flex justify-end px-[16px] pb-[16px]">
          <div className="flex gap-[16px]">
            <button
              className="border border-[#078DD7] rounded-[8px] text-[#078DD7] px-[32px] py-[12px] flex items-center gap-[8px]"
              onClick={() => downloadTicket(bookingData)}
            >
              <RxDownload />
              Download Ticket
            </button>
            {(bookingData?.status == "CONFIRMED" ||
              bookingData?.status == "PENDING") && (
              <button
                onClick={() => setShowCancellationModel(true)}
                className="bg-[#078DD7] rounded-[8px] text-white px-[32px] py-[12px] flex gap-[8px] items-center"
              >
                <RxCross2 />
                Cancle Ticket
              </button>
            )}
          </div>
        </div>
        <Modal open={showCancellationModel}>
          <Box sx={{ ...style }}>
            <div className="flex flex-col relative">
              <div className="flex items-center bg-[#078DD7] px-[20px] py-[12px] gap-[24px]">
                <h2 className="text-[32px] font-semibold text-[white]">
                  Cancel Booking
                </h2>
              </div>
              <form
                onSubmit={handleBookingCancellation}
                className="px-[16px] py-[24px] flex flex-col gap-[16px]"
              >
                <div className="flex flex-col gap-[8px] ">
                  <label className="opacity-[50%]">
                    Reason for cancellation
                  </label>
                  <input
                    className="border-[2px] border-[black] rounded-[10px] text-[16px] p-[8px]"
                    type="text"
                    placeholder="Cancellation Reason"
                    value={cancellationReason}
                    onChange={(e) => setCancellationReason(e.target.value)}
                  />
                </div>
                <div className="flex gap-[8px]">
                  <button
                    type="submit"
                    className="px-[16px] py-[12px] rounded-[10px] bg-[#078DD7] text-[white] w-fit"
                  >
                    Confirm Cancellation
                  </button>
                  <button
                    onClick={() => setShowCancellationModel(false)}
                    className="px-[16px] py-[12px] rounded-[10px] bg-[#E53935] text-[white] w-fit"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {loading && (
                <div className="absolute flex justify-center items-center w-[100%] h-[100%] flex">
                  <FadeLoader />
                </div>
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default TicketCard;
