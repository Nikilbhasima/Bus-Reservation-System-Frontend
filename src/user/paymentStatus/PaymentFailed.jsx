import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

function PaymentFailed() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/book/browse/asas");
    }, 2000);
  }, []);
  return (
    <div className="h-[60vh]">
      <Modal open={true}>
        <Box sx={{ ...style }}>
          <h2 className="text-center text-primary text-[22px]">
            Payment Failed...
          </h2>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentFailed;
