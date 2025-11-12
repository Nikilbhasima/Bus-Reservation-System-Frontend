export const formatTimeTo12Hr = (time24) => {
  if (!time24) return "N/A";

  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
};

export const calculateArrivalTime = (departureTime, durationMinutes) => {
  if (!departureTime || !durationMinutes) return "N/A";

  // Parse departure time (format: "HH:MM:SS" or "HH:MM")
  const [hours, minutes] = departureTime.split(":").map(Number);

  // Create a date object for calculation
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  // Add duration in minutes
  date.setMinutes(date.getMinutes() + durationMinutes);

  // Format back to HH:MM
  const arrivalHours = date.getHours().toString().padStart(2, "0");
  const arrivalMinutes = date.getMinutes().toString().padStart(2, "0");

  return `${arrivalHours}:${arrivalMinutes}`;
};
