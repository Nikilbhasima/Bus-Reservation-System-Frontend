import { Box, Modal } from "@mui/material";
import { TiTick } from "react-icons/ti";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #078DD7",
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};
function EsewaPayment({
  isPaymentModalVisible,
  handlePaymentModelVisibility,
  seatName,
  perSeatPrice,
  handleBookingDetail,
}) {
  return (
    <>
      <Modal
        open={isPaymentModalVisible}
        onClose={() => {
          handlePaymentModelVisibility();
        }}
      >
        <Box sx={{ ...style }}>
          {/* header part */}
          <div className="flex items-center bg-[#078DD7] px-[20px] py-[12px] gap-[24px]">
            <div className=" bg-[#056397] rounded-full p-[10px]">
              <TiTick className="text-[30px] text-[white]" />
            </div>
            <h2 className="text-[32px] font-semibold text-[white]">
              Ticket Confirmation
            </h2>
          </div>
          {/* payment content */}
          <div className="px-[20px] py-[16px] flex flex-col gap-[24px]">
            {/* seat content */}
            <div className="flex flex-col gap-[4px]">
              <h2 className="text-[24px] font-semibold">Selected Seat</h2>
              <div className="flex gap-[8px]">
                {seatName?.map((name, index) => (
                  <div
                    key={index}
                    className="bg-[#078DD7] w-fit text-[white] text-[20px] rounded-[12px] px-[20px] py-[15px]"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-0 h-[1px] bg-[#078DD7]" />

            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[24px] font-semibold">Price Breakdown</h2>
              <div className="flex justify-between pl-[16px] opacity-[50%] text-[18px]">
                <p>Service Charge:</p> <span>Rs 100</span>
              </div>
              <div className="flex justify-between pl-[16px] opacity-[50%] text-[18px]">
                <p>Base Price:</p>{" "}
                <span>Rs {perSeatPrice * seatName.length}</span>
              </div>
            </div>

            <hr className="border-0 h-[1px] bg-[#078DD7]" />

            <div className="flex justify-between text-[24px] font-semibold">
              <p>Total Price:</p>
              <span className="text-[#078DD7]">
                Rs {perSeatPrice * seatName.length + 100}
              </span>
            </div>
          </div>
          <button
            onClick={handleBookingDetail}
            className="border-[#4CAF50] border-[2px] rounded-[10px] text-[24px] text-[#4CAF50] flex mx-[24px] p-[12px] justify-center gap-[24px] mb-[32px] hover:-translate-y-1 duration-200 transition-all ease-in"
          >
            <img
              src="/images/svg/esewa.svg"
              className="h-[32px]"
              alt="esewa logo"
            />
            Pay Via Esewa
          </button>
        </Box>
      </Modal>
    </>
  );
}

export default EsewaPayment;
