import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function DoughnutChart({ pieData }) {
  if (!pieData) return null;

  const labels = Object.keys(pieData);
  const values = Object.values(pieData);

  const data = {
    labels,
    datasets: [
      {
        label: "Booking Status",
        data: values,
        backgroundColor: [
          "#EF4444", // CANCELLED
          "#22C55E", // COMPLETED
          "#F59E0B", // CONFIRMED
          "#3B82F6", // PENDING
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Booking Updates",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="w-full flex justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
