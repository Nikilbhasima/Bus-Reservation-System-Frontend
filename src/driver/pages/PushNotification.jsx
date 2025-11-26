import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getBusDriver,
  sendPushNotification,
} from "../../redux/agencySlice/driverSlice/DriverThunks";
import { FadeLoader } from "react-spinners";

const PushNotification = () => {
  const dispatch = useDispatch();
  const [driver, setDriver] = useState();
  const [loading, setLoading] = useState(false);

  const getDriver = async () => {
    try {
      const response = await dispatch(getBusDriver());
      if (response.meta.requestStatus === "fulfilled") {
        console.log("Push Notification Driver", response.payload);
        setDriver(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDriver();
  }, []);

  const busId = driver?.bus?.busId;

  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handlePushNotification = async () => {
    const today = new Date().toISOString().split("T")[0];
    setLoading(true);

    const response = await dispatch(
      sendPushNotification({
        busId,
        today,
        notificationData: notification,
      })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      console.log(busId);
      setNotification({ title: "", message: "" });
      console.log(notification);
    } else {
      setLoading(false);
      console.log("NOT SENT");
    }
  };

  return (
    <div className="relative bg-[#078DD7]/10 p-[16px] md:p-[32px] rounded-[12px] md:rounded-[32px]">
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

          {loading && (
            <div className="bg-[#078DD7]/20 absolute w-full h-full top-0 left-0 rounded-[10px] z-10 flex items-center justify-center">
              <FadeLoader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
