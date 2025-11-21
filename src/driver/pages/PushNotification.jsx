import React from "react";

const PushNotification = () => {
  return (
    <div className="bg-[#078DD7]/10 p-[16px] md:p-[32px] rounded-[12px] md:rounded-[32px]">
      <h2 className="font-bold text-[22px] md:text-[32px]">
        Send Push Notification
      </h2>
      <div className="p-[16px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <label>Notification Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            className="border px-[16px] py-[8px] rounded-[8px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label>Notification</label>
          <textarea
            type="text"
            placeholder="Enter Message"
            className="border px-[16px] py-[8px] rounded-[8px] outline-none"
            rows={5}
          />
        </div>
        <div className="mt-[16px]">
          <button className="bg-[#078DD7] text-white text-medium px-[24px] py-[8px] md:px-[64px] md:py-[18px] rounded-[12px]">
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
