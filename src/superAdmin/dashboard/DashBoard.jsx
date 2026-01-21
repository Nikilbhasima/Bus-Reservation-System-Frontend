import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSuperAdminDashboardData } from "../../redux/agencySlice/agencyDetailSlice/AgencyDetailThunks";
import DoughnutChart from "../../utils/DoughnutChart";
import BarChart from "../../utils/BarChart";

const initialCards = [
  { icon: "📊", name: "Total Agency", key: "totalAgency", numbers: "20" },
  { icon: "👥", name: "Total Booking", key: "totalBooking", numbers: "8,432" },
  { icon: "📦", name: "Total Bus", key: "activeBus", numbers: "200" },
  { icon: "⭐", name: "Total Tourney", key: "totalTrip", numbers: "500" },
];
function DashBoard() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState(initialCards);
  const [pieData, setPieData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [weekData, setWeekData] = useState({});

  useEffect(() => {
    getDashBoardData();
  }, [date]);

  const getDashBoardData = async () => {
    try {
      const response = await dispatch(getSuperAdminDashboardData(date));
      if (response.meta.requestStatus === "fulfilled") {
        const data = response.payload;
        console.log(data);
        setPieData(data?.pieData);
        const updatedCards = cards.map((c) => ({
          ...c,
          numbers: data?.[c.key] ?? 0,
        }));

        setCards(updatedCards);
        setWeekData(data?.barCharData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
    </>
  );
}

export default DashBoard;
