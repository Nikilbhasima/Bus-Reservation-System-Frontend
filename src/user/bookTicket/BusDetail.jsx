import { GoArrowRight } from "react-icons/go";
import { MdEventSeat } from "react-icons/md";
import PrimaryButton from "../../component/PrimaryButton";
import { calculateArrivalTime, formatTimeTo12Hr } from "../../utils/timeFormat";
import { useDispatch, useSelector } from "react-redux";
import { bookSeat } from "../../redux/userSlice/bookingSlice/BookingThunks";
import { toast } from "react-toastify";
import { useState } from "react";
import EsewaPayment from "../../component/EsewaPayment";
import { initiatePayment } from "../../redux/paymentSlice/PaymentThunks";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "white",
  p: "24px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};
function BusDetail({ seatName, busDetailData, travelDate }) {
  const dispatch = useDispatch();

  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);

  const [errorModal, setErrorModal] = useState(false);

  const handleOpen = () => setErrorModal(!errorModal);

  const handleClose = () => setErrorModal(!errorModal);

  const handlePaymentModelVisibility = () => {
    setIsPaymentModalVisible((pre) => !pre);
  };

  const { success } = useSelector((state) => state.auth);

  const handleBookingDetail = async () => {
    const data = {
      totalSeats: seatName.length,
      tripDate: travelDate,
      seatName: seatName,
      sourceCity: busDetailData?.routes?.sourceCity
        .toLowerCase()
        .includes(busDetailData?.currentBusLocation.toLowerCase())
        ? busDetailData?.routes?.sourceCity
        : busDetailData?.routes?.destinationCity,
      destinationCity: !busDetailData?.routes?.destinationCity
        .toLowerCase()
        .includes(busDetailData?.currentBusLocation?.toLowerCase())
        ? busDetailData?.routes?.destinationCity
        : busDetailData?.routes?.sourceCity,
    };

    try {
      const response = await dispatch(
        bookSeat({ bookingDetail: data, busId: busDetailData?.busId })
      );

      if (response.meta.requestStatus === "fulfilled") {
        const bookingId = response.payload?.bookingId;

        // Create payment data directly (don't use state)
        const paymentData = {
          productCode: "EPAYTEST",
          productName: "Bus Booking",
          totalAmount: seatName.length * busDetailData?.routes?.price,
          serviceCharge: 100, // Use number instead of string
          customerEmail: response.payload?.user?.email,
          customerPhone: response.payload?.user?.phoneNumber,
        };
        // Use the payment data directly
        const response2 = await dispatch(
          initiatePayment({ paymentDetail: paymentData, bookingId })
        );
        console.log("payment respons:", response2.payload);

        if (
          response2.meta.requestStatus === "fulfilled" &&
          response2.payload.status
        ) {
          console.log("is there error in payment", response2.payload.formData);
          const form = document.createElement("form");
          form.method = "POST";
          form.action = response2.payload.paymentUrl;

          Object.entries(response2.payload.formData).forEach(([key, value]) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = value;
            form.appendChild(input);
          });

          document.body.appendChild(form);
          form.submit();
        }
      } else {
        toast.error("Booking failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during booking");
    }
  };

  return (
    <div className="border-[2px] boarder-black rounded-[10px] p-[24px] min-w-[30rem]">
      {/* top part */}
      <div className="flex items-center justify-between ">
        <h2 className="text-[32px] font-bold">{busDetailData?.busName}</h2>
        <div className="bg-[#000000] text-white rounded-[10px] py-[6px] px-[12px] h-fit w-fit text-nowrap">
          {busDetailData?.busRegistrationNumber}
        </div>
      </div>
      {/* route description */}
      <div className="mt-[8px] flex flex-col gap-[8px]">
        {/* rource destination */}
        <div className="flex items-center gap-[16px]">
          <label className="text-[20px]">
            {busDetailData?.routes?.sourceCity
              .toLowerCase()
              .includes(busDetailData?.currentBusLocation.toLowerCase())
              ? busDetailData?.routes?.sourceCity
              : busDetailData?.routes?.destinationCity}
          </label>
          <GoArrowRight />
          <label className="text-[20px]">
            {!busDetailData?.routes?.destinationCity
              .toLowerCase()
              .includes(busDetailData?.currentBusLocation?.toLowerCase())
              ? busDetailData?.routes?.destinationCity
              : busDetailData?.routes?.sourceCity}
          </label>
        </div>
        {/* departure time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Departure Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {formatTimeTo12Hr(busDetailData?.busSchedules?.departureTime)}
          </p>
        </div>
        {/* distance */}
        <div className="flex">
          <label className="text-[20px] font-bold">Distane:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.routes?.distance}KM
          </p>
        </div>
        {/* duration */}{" "}
        <div className="flex">
          <label className="text-[20px] font-bold">Duration:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.routes?.duration / 60}Hrs
          </p>
        </div>
        {/* arrival time */}
        <div className="flex">
          <label className="text-[20px] font-bold">Arrival Time:</label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {formatTimeTo12Hr(
              calculateArrivalTime(
                busDetailData?.busSchedules?.departureTime,
                busDetailData?.routes?.duration
              )
            )}
          </p>
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
          <label className="text-[20px] font-bold text-nowrap">
            Total Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {busDetailData?.totalSeats}
          </p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Available Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">10</p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Price Per Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            Rs {busDetailData?.routes?.price}
          </p>
        </div>
      </div>
      {/* divider */}
      <div className="h-[1px] bg-black my-[8px] "></div>
      {/* booking Detail */}
      <div className="flex gap-[8px] flex-col">
        <h2 className="text-[20px] font-bold">Booking Detail</h2>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Total Seat:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            {seatName != null ? seatName.length : 0}
          </p>
        </div>
        <div className="flex">
          <label className="text-[20px] font-bold text-nowrap">
            Seat Number:
          </label>
          <div className="text-[20px] opacity-50 ml-[10px] flex flex-wrap gap-2">
            {seatName.map((name, index) => (
              <span key={index}>{name}</span>
            ))}
          </div>
        </div>

        <div className="flex mb-[24px]">
          <label className="text-[20px] font-bold text-nowrap">
            Total Price:
          </label>
          <p className="text-[20px] opacity-50 ml-[10px]">
            Rs {seatName.length * (busDetailData?.routes?.price || 0)}
          </p>
        </div>
        {/* <PrimaryButton name={"Book Seat"} handleSubmit={handleBookingDetail} /> */}
        <PrimaryButton
          name={"Book Seat"}
          handleSubmit={success ? handlePaymentModelVisibility : handleOpen}
        />
      </div>
      <EsewaPayment
        isPaymentModalVisible={isPaymentModalVisible}
        handlePaymentModelVisibility={handlePaymentModelVisibility}
        seatName={seatName}
        perSeatPrice={busDetailData?.routes?.price || 0}
        handleBookingDetail={handleBookingDetail}
      />
      <Modal open={errorModal} onClose={() => handleClose()}>
        <Box sx={{ ...style }}>
          <h2 className="text-center text-[#DC3545] text-[18px]">
            Please log in to proceed with seat booking.
          </h2>
        </Box>
      </Modal>
    </div>
  );
}

export default BusDetail;
