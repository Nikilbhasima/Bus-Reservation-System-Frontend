import React, { useState } from "react";

const PushNotification = () => {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handlePushNotification = (e) => {
    try {
      setNotification({
        title: "",
        message: "",
      });
      console.log(notification);
    } catch (error) {
      console.log(error);
    }
  };

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
            name="title"
            onChange={handleChange}
            placeholder="Enter Title"
            className="border px-[16px] py-[8px] rounded-[8px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label>Notification</label>
          <textarea
            type="text"
            placeholder="Enter Message"
            name="message"
            onChange={handleChange}
            className="border px-[16px] py-[8px] rounded-[8px] outline-none"
            rows={5}
          />
        </div>
        <div className="mt-[16px]" onClick={handlePushNotification}>
          <button
            type="submit"
            className="bg-[#078DD7] text-white text-medium px-[24px] py-[8px] md:px-[64px] md:py-[18px] rounded-[12px]"
          >
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
