import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const initialData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Bookings",
      data: [5000, 10000, 15000, 20000, 25000, 30000, 90000],
      backgroundColor: "rgba(59,130,246,0.6)",
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: "Weekly Bookings",
    },
    legend: {
      display: true,
    },
  },
  animation: {
    duration: 1500,
    easing: "easeInOutQuart",
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

function BarChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Delay to ensure animation triggers
    const timer = setTimeout(() => {
      setData(initialData);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!data)
    return (
      <div className="flex justify-end relative h-[400px]">Loading...</div>
    );

  return (
    <div className="flex justify-end relative">
      <Bar data={data} options={options} className="mt-auto" />
    </div>
  );
}

export default BarChart;
