import PushNotification from "./pages/PushNotification";
import Ticket from "./pages/Ticket";

const DriverContent = ({ driverId }) => {
  return (
    <div className="p-[16px] md:p-[64px]">
      <Ticket driverId={driverId} />
      <div className="mt-[32px]">
        <PushNotification />
      </div>
    </div>
  );
};

export default DriverContent;
