import React, { useState } from "react";
import OtpInput from "./OtpInput";

function OtpComponent() {
  const [otp, setOtp] = useState(Array(6).fill(""));

  return (
    <div>
      <h2 className="font-semibold text-[24px] mb-[8px]">Forget Password</h2>
      <label className="text-[15px] opacity-50">Enter Verification Code</label>
      <form className="flex flex-col gap-[16px] justify-center">
        <OtpInput otp={otp} setOtp={setOtp} />
        <button className="bg-[#078DD7] font-semibold w-full text-[white] py-[12px] rounded-[10px]">
          Verify
        </button>
      </form>
    </div>
  );
}

export default OtpComponent;
