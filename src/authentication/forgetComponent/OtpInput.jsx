import React, { useState, useRef } from "react";

export default function OtpInput({ otp, setOtp }) {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pasteData)) return; // allow only numbers

    const pasteArray = pasteData.split("").slice(0, otp.length);
    const newOtp = [...otp];

    pasteArray.forEach((digit, i) => {
      newOtp[i] = digit;
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = digit;
      }
    });

    setOtp(newOtp);

    // Focus last filled input
    const lastIndex = pasteArray.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  };

  return (
    <div className="flex gap-3 mt-[16px] mx-auto">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-[60px] h-[60px] rounded-[10px] border border-[#078DD7] text-center text-2xl 
                     focus:outline-none focus:ring-2 focus:ring-[#078DD7]"
        />
      ))}
    </div>
  );
}
