import { useEffect, useState } from "react";
import BusLayout from "../../user/bookTicket/BusLayout";
import TicketCard from "../components/TicketCard";
import { useDispatch } from "react-redux";
import {
  boardingNotification,
  getBookingByDriverIdAndDate,
  updateJourney,
} from "../../redux/userSlice/bookingSlice/BookingThunks";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Box, Modal } from "@mui/material";
import { FadeLoader } from "react-spinners";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { CiCalendar } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import SleepBusLayout from "../../user/bookTicket/SleepBusLayout";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #078DD7",
  p: "24px",
  borderRadius: "10px",
};
const Ticket = ({ driverId }) => {
  const dispatch = useDispatch();

  const [showNotifyStart, setShowNotifyStart] = useState(false);
  const [showUpdateJourney, setShowUpdateJourney] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [bookingList, setBookingList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    getBookingList(today);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const getBookingList = async (today) => {
    try {
      const response = await dispatch(getBookingByDriverIdAndDate(today));
      if (response.meta.requestStatus === "fulfilled") {
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

  const handleBoardNotification = async () => {
    try {
      setShowLoader(true);
      const response = await dispatch(
        boardingNotification({ busId: driverId, bookingDate: today })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setShowLoader(false);
        setBookingList(response.payload);
        setShowNotifyStart(false);
        toast.success("Journey start notification sent.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateJour = async () => {
    setShowLoader(true);
    try {
      const response = await dispatch(updateJourney(today));
      if (response.meta.requestStatus === "fulfilled") {
        setShowLoader(false);
        setBookingList(response.payload);
        setShowNotifyStart(false);
        toast.success("Journey status updated to completed.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <span className="bg-[#078DD7] text-white rounded-[10px] p-[8px]">
            <CiCalendar className="text-[30px]" />
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="font-semibold text-[32px]">Today's Booking</span>
            <span className="text-[18px] opacity-[50%]">Date: {today}</span>
          </div>
        </div>

        <div className="flex gap-[8px] flex-col md:flex-row">
          <button
            onClick={() => {
              if (bookingList.length > 0 && !bookingList[0]?.journeyStarted) {
                setShowNotifyStart(true);
              }
            }}
            className={`flex gap-[8px] shadow-sm rounded-[10px] text-[white]  px-[12px] py-[12px]  h-fit text-nowrap ${
              bookingList.length > 0 && !bookingList[0]?.journeyStarted
                ? "bg-[#078DD7] transition-all duration-300 hover:-translate-y-1 ease-in"
                : " bg-[#898B8E]"
            } `}
          >
            <IoIosNotificationsOutline className="text-[22px]" />
            <span> Notify Start</span>
          </button>
          <button
            onClick={() => {
              if (
                bookingList.length > 0 &&
                bookingList[0]?.status != "COMPLETED"
              ) {
                setShowUpdateJourney(true);
              }
            }}
            className={`flex gap-[8px] shadow-sm rounded-[10px] h-fit text-nowrap px-[12px] py-[12px] text-[white] ${
              bookingList.length > 0 && bookingList[0]?.status != "COMPLETED"
                ? "bg-[#1EBA58] transition-all duration-300 hover:-translate-y-1 ease-in"
                : "bg-[#898B8E]"
            } `}
          >
            <FaRegCircleCheck className="text-[22px]" />
            <span>Journey Complete</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-[24px] mt-[16px]">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="Search ticket"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border px-[16px] py-[8px] rounded-[12px] w-[60%] md:w-[80%]"
            />
            <button className="flex items-center gap-[8px] bg-[#078DD7] text-white text-medium px-[24px] py-[12px] rounded-[12px] w-[40%] md:w-[20%] transition-all duration-300 hover:-translate-y-1 ease-in">
              <IoSearch className="text-[22px]" />
              <span>Search</span>
            </button>
          </div>
          <div className="flex flex-col gap-[24px]">
            {filteredBookings.map((data, index) => (
              <TicketCard
                key={index}
                data={data}
                setBookingList={setBookingList}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-[16px]">
          <BusLayout bookingList={bookingList} user={"driver"} />
          <SleepBusLayout />
        </div>
      </div>
      {/* show notify start modal */}
      <Modal open={showNotifyStart}>
        <Box sx={{ ...style }}>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[22px] font-semibold">
              Are you sure you want start your Journey
            </h2>
            {/* warning part */}
            <div className="flex border-[1px] rounded-[10px] p-[12px] gap-[10px] border-amber-200 bg-amber-50">
              <span>
                <RiErrorWarningLine className="text-[20px] text-amber-600" />
              </span>
              <p className="text-sm text-amber-800">
                This action cannot be undone. The journey status will be
                permanently updated.
              </p>
            </div>
            {/* button part */}
            <div className="flex gap-[8px]  mt-[8px]">
              <button
                onClick={handleBoardNotification}
                className="flex gap-[8px] rounded-[10px] bg-[#078DD7] px-[32px] py-[12px] text-[white] transition-all duration-300 hover:-translate-y-1 ease-in"
              >
                <FaRegCircleCheck className="text-[20px]" /> <span>Start</span>
              </button>
              <button
                onClick={() => setShowNotifyStart(false)}
                className="rounded-[10px] bg-[#E5E7EB] px-[32px] py-[12px] transition-all duration-300 hover:-translate-y-1 ease-in"
              >
                Cancel
              </button>
            </div>
          </div>
          {showLoader && (
            <div className="absolute  bg-[black]/20 w-[100%] h-[100%] flex justify-center items-center top-0 left-0 rounded-[10px]">
              <FadeLoader />
            </div>
          )}
        </Box>
      </Modal>
      {/* update Journey modal */}
      <Modal open={showUpdateJourney}>
        <Box sx={{ ...style }}>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[22px] font-semibold">
              Are you sure you want update Journey complete!!
            </h2>
            {/* warning part */}
            <div className="flex border-[1px] rounded-[10px] p-[12px] gap-[10px] border-amber-200 bg-amber-50">
              <span>
                <RiErrorWarningLine className="text-[20px] text-amber-600" />
              </span>
              <p className="text-sm text-amber-800">
                This action cannot be undone. The journey status started
                complete will be permanently updated.
              </p>
            </div>
            {/* button container */}
            <div className="flex gap-[8px] mt-[8px]">
              <button
                onClick={handleUpdateJour}
                className="flex gap-[8px] rounded-[10px] bg-[#078DD7] px-[32px] py-[12px] text-[white]  transition-all duration-300 hover:-translate-y-1 ease-in"
              >
                <FaRegCircleCheck className="text-[20px]" />
                <span>Complete</span>
              </button>
              <button
                onClick={() => setShowUpdateJourney(false)}
                className="rounded-[10px] bg-[#E5E7EB] px-[32px] py-[12px]  transition-all duration-300 hover:-translate-y-1 ease-in"
              >
                Cancel
              </button>
            </div>
          </div>
          {showLoader && (
            <div className="absolute  bg-[black]/20 w-[100%] h-[100%] flex justify-center items-center top-0 left-0 rounded-[10px]">
              <FadeLoader />
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Ticket;
