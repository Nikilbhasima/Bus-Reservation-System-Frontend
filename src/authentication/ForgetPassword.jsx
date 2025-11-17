import { Box, Modal } from "@mui/material";
import { useState } from "react";
import OtpInput from "./forgetComponent/OtpInput";
import PasswordFieldComponent from "../component/PasswordFieldComponent";
import EmailComponent from "./forgetComponent/EmailComponent";
import OtpComponent from "./forgetComponent/OtpComponent";
import NewPasswordForm from "./forgetComponent/NewPasswordForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #000",
  p: "24px",
  borderRadius: "10px",
};
function ForgetPassword({ isForgetPasswordVisible, hideForgetPassword }) {
  return (
    <>
      <Modal
        open={isForgetPasswordVisible}
        onClose={() => {
          hideForgetPassword();
        }}
      >
        <Box sx={{ ...style }}>
          {/* email part */}
          <EmailComponent />

          {/* otp part */}
          <OtpComponent />

          {/* enter new password */}
          <NewPasswordForm />
        </Box>
      </Modal>
    </>
  );
}

export default ForgetPassword;
