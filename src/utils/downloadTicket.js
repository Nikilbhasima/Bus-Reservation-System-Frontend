// utils/downloadTicket.js

const downloadTicket = async (bookingData) => {
  try {
    console.log("Sending booking data:", bookingData); // Debug log

    const response = await fetch(
      `http://localhost:8080/api/ticketBooking/getMyTicket`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    console.log("Response status:", response.status); // Debug log

    if (!response.ok) {
      // Get error details from backend
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    // Check content type
    const contentType = response.headers.get("content-type");
    console.log("Content type:", contentType); // Debug log

    // Get the blob
    const blob = await response.blob();
    console.log("Blob size:", blob.size); // Debug log

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ticket_${bookingData.bookingId}.pdf`;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.remove();
    window.URL.revokeObjectURL(url);

    console.log("Ticket downloaded successfully");
  } catch (error) {
    console.error("Error downloading ticket:", error);
    alert(`Failed to download ticket: ${error.message}`);
  }
};

export default downloadTicket;
