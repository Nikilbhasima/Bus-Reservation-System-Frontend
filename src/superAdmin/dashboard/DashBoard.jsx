const cards = [
  {
    icon: "📊",
    name: "Total Agency",
    key: "Agency",
    numbers: "20",
  },
  {
    icon: "👥",
    name: "Active Users",
    key: "activeUsers",
    numbers: "8,432",
  },
  {
    icon: "📦",
    name: "Total Bus",
    key: "Active",
    numbers: "200",
  },
  {
    icon: "⭐",
    name: "Total Tourney",
    key: "Journey",
    numbers: "500",
  },
];
function DashBoard() {
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
    </>
  );
}

export default DashBoard;
