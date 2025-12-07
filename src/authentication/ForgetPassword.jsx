import { Box, Modal } from "@mui/material";
import { useState } from "react";
import OtpInput from "./forgetComponent/OtpInput";
import PasswordFieldComponent from "../component/PasswordFieldComponent";
import EmailComponent from "./forgetComponent/EmailComponent";
import OtpComponent from "./forgetComponent/OtpComponent";
import NewPasswordForm from "./forgetComponent/NewPasswordForm";
import { FadeLoader } from "react-spinners";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #078DD7",
  p: "24px",
  borderRadius: "10px",
};
function ForgetPassword({ isForgetPasswordVisible, hideForgetPassword }) {
  const [showEmail, setShowEmail] = useState(true);

  const [showOtp, setShowOtp] = useState(false);

  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const [mainEmail, setMainEmail] = useState();

  const [loading, setLoading] = useState(false);
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

          {showEmail && (
            <EmailComponent
              setShowEmail={setShowEmail}
              setShowOtp={setShowOtp}
              setMainEmail={setMainEmail}
              setLoading={setLoading}
            />
          )}

          {/* otp part */}

          {showOtp && (
            <OtpComponent
              setShowOtp={setShowOtp}
              setShowUpdatePassword={setShowUpdatePassword}
              mainEmail={mainEmail}
              setLoading={setLoading}
            />
          )}

          {/* enter new password */}
          {showUpdatePassword && (
            <NewPasswordForm
              setShowUpdatePassword={setShowUpdatePassword}
              setShowEmail={setShowEmail}
              mainEmail={mainEmail}
              hideForgetPassword={hideForgetPassword}
              setLoading={setLoading}
            />
          )}

          {loading && (
            <div className="bg-[#078DD7]/20 absolute w-full h-full top-0 left-0 rounded-[10px] z-10 flex items-center justify-center">
              <FadeLoader />
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default ForgetPassword;
