import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice/AuthSlice";
import { IoIosLogOut } from "react-icons/io";

const DriverHeader = ({ driver }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#078DD7] text-white px-[16px] md:px-[64px] py-[18px] flex justify-between items-center">
      <div className="flex items-center gap-[16px]">
        <h2 className="font-bold text-[24px]">{driver?.bus?.busName}</h2>
        <p className="font-medium bg-white text-[#078DD7] rounded-[20px] py-[8px] px-[8px]">
          Route: {driver?.bus?.routes?.sourceCity} ----
          {driver?.bus?.routes?.destinationCity}
        </p>
      </div>

      <div className="flex gap-[24px] items-center">
        <h2 className="font-medium text-[20px] text-[#078DD7] bg-white rounded-[20px] py-[8px] px-[16px]">
          {driver?.driver_name}
        </h2>
        <button
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
          className="flex items-center gap-[8px] bg-white text-[#078DD7] border rounded-[8px] px-[28px] py-[12px] font-medium  cursor-pointer hover:bg-[#078DD7] hover:text-white transition-all duration-300"
        >
          <IoIosLogOut className="text-[20px]" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DriverHeader;
