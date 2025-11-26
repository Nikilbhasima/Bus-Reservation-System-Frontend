import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllBus } from "../../redux/agencySlice/busSlice/busThunks";
import { getBookingsForAgency } from "../../redux/userSlice/bookingSlice/BookingThunks";

function Booking() {
  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };
  const dispatch = useDispatch();

  const [listOfBus, setListOfBus] = useState([]);

  const [listOfBookings, setListOfBookings] = useState([]);

  const [selectBus, setSelectBus] = useState(0);

  const [selectDate, setSelectDate] = useState(() => getCurrentDate());

  useEffect(() => {
    getAllBusDetail();
  }, []);

  useEffect(() => {
    console.log("bus is selected bus id is:", selectBus);
    console.log("selected date is:", selectDate);
    getBookings();
  }, [selectBus, selectDate]);

  const getAllBusDetail = async () => {
    try {
      const response = await dispatch(getAllBus());
      if (response.meta.requestStatus === "fulfilled") {
        setListOfBus(response.payload);
        console.log("agency bus:", response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBookings = async () => {
    try {
      const response = await dispatch(
        getBookingsForAgency({ bookingDate: selectDate, busId: selectBus })
      );
      if (response.meta.requestStatus === "fulfilled") {
        console.log("get booking responsibility:", response.payload);
        setListOfBookings(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[32px]">Recent Booking</h2>

        {/* filter part */}

        <div className="flex gap-[1rem]">
          {/* select bus */}
          <select
            value={selectBus}
            onChange={(e) => setSelectBus(e.target.value)}
            className="border-[2px] border-black/30 rounded-[10px] p-[8px] w-[15rem]"
          >
            <option className="text-[12px]" value="null">
              Select bus
            </option>
            {listOfBus.map((data, index) => (
              <option className="text-[12px]" key={index} value={data?.busId}>
                {data?.busName}
              </option>
            ))}
          </select>
          <input
            value={selectDate}
            onChange={(e) => setSelectDate(e.target.value)}
            className="border-[2px] border-black/30 rounded-[10px] p-[8px] w-[15rem]"
            type="date"
          />
        </div>
      </div>

      <div className="max-h-[38rem] sm:max-h-[36rem] lg:max-h-[36rem]  overflow-y-auto relative  mt-[8px]">
        <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 ">
            <tr className="rounded-[12px] text-white">
              <th className="pl-[8px] font-medium ">Customer Name</th>
              <th className="py-[8px] font-medium ">Route </th>
              <th className="py-[8px] font-medium ">Travel Date</th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Seats
              </th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Amount
              </th>
              <th className="pr-[8px] font-medium ">Status</th>
              <th className="pr-[8px] font-medium ">Payment</th>
            </tr>
          </thead>

          <tbody className=" text-[16px] ">
            {listOfBookings.map((data, index) => (
              <tr
                key={index}
                className="transition-all duration-300 hover:shadow-md"
              >
                <td className="py-[1rem]">{data?.user?.username}</td>
                <td>{data?.busId?.routes?.routeName}</td>
                <td>{data?.tripDate}</td>
                <td className="hidden sm:table-cell">
                  {data?.seatName.length}
                </td>
                <td className="hidden sm:table-cell">
                  Rs.{data?.seatName.length * data?.busId?.routes?.price + 100}
                </td>
                <td>
                  {/* <select className="outline-none">
                    <option value="Confirmend">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select> */}
                  {data?.status}
                </td>
                <td className="hidden sm:table-cell">{data?.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Booking;
