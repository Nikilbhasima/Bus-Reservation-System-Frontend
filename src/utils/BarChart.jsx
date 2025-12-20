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
      ticks: {
        stepSize: 1,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

function BarChart({ date, setDate, weekData }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (weekData && Object.keys(weekData).length > 0) {
      // Convert the weekData object to arrays for Chart.js
      const sortedDates = Object.keys(weekData).sort(
        (a, b) => new Date(a) - new Date(b)
      );

      // Day labels mapping
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      // Create labels from dates
      const labels = sortedDates.map((dateStr) => {
        const date = new Date(dateStr);
        const dayIndex = date.getDay();
        return dayNames[dayIndex];
      });

      // Get booking counts
      const bookingCounts = sortedDates.map((dateStr) => weekData[dateStr]);

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Bookings",
            data: bookingCounts,
            backgroundColor: "rgba(59,130,246,0.6)",
            borderRadius: 6,
          },
        ],
      };

      // Add delay for animation
      const timer = setTimeout(() => {
        setChartData(data);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [weekData]);

  if (!chartData) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-gray-500">Loading chart...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end relative">
      <div className="flex gap-[16px] items-center mb-4">
        <label className="text-[22px]">Select date:</label>
        <input
          value={date}
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          className="px-[12px] py-[12px] border-[2px] rounded-[10px] border-[black]"
        />
      </div>

      <Bar data={chartData} options={options} className="mt-auto" />
    </div>
  );
}

export default BarChart;
