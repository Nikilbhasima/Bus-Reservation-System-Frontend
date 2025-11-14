import { GoArrowRight } from "react-icons/go";
import { MdEventSeat } from "react-icons/md";
import PrimaryButton from "../../component/PrimaryButton";
import { calculateArrivalTime, formatTimeTo12Hr } from "../../utils/timeFormat";

function BusDetail({ seatName, busDetailData, travelDate }) {
  const handleBookingDetail = () => {
    const data = {
      totalSeats: seatName.length,
      tripDate: travelDate,
      seatName: seatName,
    };
    console.log("123:", data);
  };
  return (
    <div className="border-[2px] boarder-black rounded-[10px] p-[24px] min-w-[30rem]">
      {/* top part */}
      <div className="flex items-center justify-between ">
        <h2 className="text-[32px] font-bold">{busDetailData?.busName}</h2>
        <div className="bg-[#000000] text-white rounded-[10px] py-[6px] px-[12px] h-fit w-fit text-nowrap">
          {busDetailData?.busRegistrationNumber}
        </div>
      </div>
      {/* route description */}
      <div className="mt-[8px] flex flex-col gap-[8px]">
        {/* rource destination */}
        <div className="flex items-center gap-[16px]">
          <label className="text-[20px]">
            {busDetailData?.routes?.sourceCity}
          </label>
          <GoArrowRight />
          <label className="text-[20px]">
            {busDetailData?.routes?.destinationCity}
          </label>
        </div>
        {/* departure time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Departure Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {formatTimeTo12Hr(busDetailData?.busSchedules?.departureTime)}
          </p>
        </div>
        {/* distance */}
        <div className="flex">
          <label className="text-[20px] font-bold">Distane:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.routes?.distance}KM
          </p>
        </div>
        {/* duration */}{" "}
        <div className="flex">
          <label className="text-[20px] font-bold">Duration:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.routes?.duration / 60}Hrs
          </p>
        </div>
        {/* arrival time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Arrival Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {formatTimeTo12Hr(
              calculateArrivalTime(
                busDetailData?.busSchedules?.departureTime,
                busDetailData?.routes?.duration
              )
            )}
          </p>
        </div>
      </div>
      {/* divider */}
      <div className="h-[1px] bg-black my-[8px] "></div>
      {/* bus detail */}
      <div className="flex gap-[8px] flex-col">
        <h2 className="text-[20px] font-bold">Seat Details</h2>
        <div className="flex gap-[32px] mt-[8px]">
          <div className="flex flex-col justify-center">
            <MdEventSeat className="text-[66px] text-[#00FF0A]" />
            <label>Available</label>
          </div>
          <div className="flex flex-col justify-center">
            <MdEventSeat className="text-[66px] text-[#FF0000]" />
            <label>Booked</label>
          </div>
          <div className="flex flex-col justify-center">
            <MdEventSeat className="text-[66px] text-[#E5FF00]" />
            <label>Selected</label>
          </div>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Total Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.totalSeats}
          </p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Available Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">10</p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Price Per Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            Rs {busDetailData?.routes?.price}
          </p>
        </div>
      </div>
      {/* divider */}
      <div className="h-[1px] bg-black my-[8px] "></div>
      {/* booking Detail */}
      <div className="flex gap-[8px] flex-col">
        <h2 className="text-[20px] font-bold">Booking Detail</h2>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Total Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {seatName != null ? seatName.length : 0}
          </p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Seat Number:
          </label>
          <div className="text-[20px] opacity-50 ml-[10px] flex flex-wrap gap-2">
            {seatName.map((name, index) => (
              <span key={index}>{name}</span>
            ))}
          </div>
        </div>

        <div className="flex mb-[24px]">
          <label className="text-[20px] font-bold text-nowrap">
            Total Price:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            Rs {seatName.length * (busDetailData?.routes?.price || 0)}
          </p>
        </div>
        <PrimaryButton name={"Book Seat"} handleSubmit={handleBookingDetail} />
      </div>
    </div>
  );
}

export default BusDetail;
