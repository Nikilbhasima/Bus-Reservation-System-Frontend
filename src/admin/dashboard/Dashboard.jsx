import { TbBus } from "react-icons/tb";
import DoughnutChart from "../../utils/DoughnutChart";
import BarChart from "../../utils/BarChart";
import { FaUserGroup } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import { SlGraph } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { getDashBoardData } from "../../redux/agencySlice/agencyDetailSlice/AgencyDetailThunks";
import { useEffect, useState } from "react";
const initialDataList = [
  {
    name: "Total Buses",
    key: "totalBuses",
    numbers: 0,
    icon: <TbBus className="text-[22px] text-[white]" />,
  },
  {
    name: "Total Driver",
    key: "totalDrivers",
    numbers: 0,
    icon: <FaUserGroup className="text-[22px] text-[white]" />,
  },
  {
    name: "Active Booking",
    key: "activeBookings",
    numbers: 0,
    icon: <CgCalendarDates className="text-[22px] text-[white]" />,
  },
  {
    name: "Total Revenue",
    key: "totalRevenue",
    numbers: 0,
    icon: <SlGraph className="text-[22px] text-[white]" />,
  },
];

function Dashboard() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState(initialDataList);
  const [pieData, setPieData] = useState({});
  const [weekData, setWeekData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    dashboardData();
  }, [date]);

  const dashboardData = async () => {
    try {
      const response = await dispatch(getDashBoardData(date));

      if (response.meta.requestStatus === "fulfilled") {
        console.log(response.payload);
        const dashData = response.payload;

        const updatedCards = cards.map((card) => ({
          ...card,
          numbers: dashData?.[card.key] ?? 0,
        }));

        setCards(updatedCards);
        setPieData(dashData.pieData);
        setWeekData(dashData.barCharData); // 🔥 important
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-[32px] font-bold">Overview</h2>
        <p className="text-[18px] opacity-[50%]">
          Welcome back! Here's what's happening with your fleet.
        </p>
      </div>
      {/* top container with numbers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-[1rem] ">
        {/* box 1st */}

        {cards.map((data, index) => (
          <div
            key={index}
            className="bg-[#F2F2F2] rounded-[10px] p-[2rem] flex gap-[1rem] flex-col"
          >
            <div className="bg-[#078DD7] rounded-[10px] p-[1rem] w-fit">
              {data.icon}
            </div>
            <p>{data.name}</p>

            <p className="text-[30px] font-bold">
              {data.key === "totalRevenue" && "Rs"} {data.numbers}
            </p>
          </div>
        ))}
      </div>
      {/* charts */}
      <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] mt-[2rem]">
        <DoughnutChart pieData={pieData} />
        <BarChart setDate={setDate} date={date} weekData={weekData} />
      </div>
    </div>
  );
}

export default Dashboard;
