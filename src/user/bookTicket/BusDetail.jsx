import { GoArrowRight } from "react-icons/go";
import { MdEventSeat } from "react-icons/md";
import PrimaryButton from "../../component/PrimaryButton";

function BusDetail() {
  return (
    <div className="border-[2px] boarder-black rounded-[10px] p-[24px]">
      {/* top part */}
      <div className="flex items-center justify-between ">
        <h2 className="text-[32px] font-bold">Deurali Yatayat Travels</h2>
        <div className="bg-[#000000] text-white rounded-[10px] py-[6px] px-[12px] h-fit w-fit">
          बा ४ ख ०१२३
        </div>
      </div>
      {/* route description */}
      <div className="mt-[8px] flex flex-col gap-[8px]">
        {/* rource destination */}
        <div className="flex items-center gap-[16px]">
          <label className="text-[20px]">Roursce</label>
          <GoArrowRight />
          <label className="text-[20px]">Destination</label>
        </div>
        {/* departure time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Departure Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">6AM</p>
        </div>
        {/* distance */}
        <div className="flex">
          <label className="text-[20px] font-bold">Distane:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">250KM</p>
        </div>
        {/* duration */}{" "}
        <div className="flex">
          <label className="text-[20px] font-bold">Duration:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">8 Hrs</p>
        </div>
        {/* arrival time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Arrival Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">8 Hrs</p>
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
          <label className="text-[20px] font-bold">Total Seat:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">38</p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold">Available Seat:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">10</p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold">Price Per Seat:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">Rs 1900</p>
        </div>
      </div>
      {/* divider */}
      <div className="h-[1px] bg-black my-[8px] "></div>
      {/* booking Detail */}
      <div className="flex gap-[8px] flex-col">
        <h2 className="text-[20px] font-bold">Booking Detail</h2>
        <div className="flex">
          <label className="text-[20px] font-bold">Total Seat:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">2</p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold">Seat Number:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">A1,A2</p>
        </div>
        <div className="flex mb-[24px]">
          <label className="text-[20px] font-bold">Total Price:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">Rs 3800</p>
        </div>
        <PrimaryButton name={"Book Seat"} />
      </div>
    </div>
  );
}

export default BusDetail;
