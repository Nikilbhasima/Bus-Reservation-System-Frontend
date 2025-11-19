import React, { useState } from "react";
import OtpInput from "./OtpInput";
import { useDispatch } from "react-redux";
import { validateOtp } from "../../redux/optSlice/OtpThunks";
import { toast } from "react-toastify";

function OtpComponent({ setShowOtp, setShowUpdatePassword, mainEmail }) {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const dispatch = useDispatch();

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (otp.includes("")) {
      hasError = true;
      toast.error("Please enter all 6 digits of the OTP");
      return;
    }

    if (!hasError) {
      try {
        const response = await dispatch(
          validateOtp({ email: mainEmail, otp: otp })
        );
        if (response.meta.requestStatus === "fulfilled") {
          setShowOtp(false);
          setShowUpdatePassword(true);
        } else {
          toast.error("Failed to validate otp");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-[24px] mb-[8px]">Forget Password</h2>
      <label className="text-[15px] opacity-50">Enter Verification Code</label>
      <form
        className="flex flex-col gap-[16px] justify-center"
        onSubmit={handleSubmitOtp}
      >
        <OtpInput otp={otp} setOtp={setOtp} />
        <button
          type="submit"
          className="bg-[#078DD7] font-semibold w-full text-[white] py-[12px] rounded-[10px]"
        >
          Verify
        </button>
      </form>
    </div>
  );
}

export default OtpComponent;
