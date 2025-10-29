import React from "react";
import { useNavigate } from "react-router-dom";

const DriverProfile = () => {
  const navigate = useNavigate();
  const handleUpdateNavigate = (id) => {
    navigate(`/driverDetail/driverForm/updateDriver/${id}`);
  };
  return (
    <>
      <div>
        <div className=" w-fit flex">
          <img
            src="/images/profile.png"
            alt="userImage"
            className="w-[171px] h-[171px] rounded-[10px] shadow-xl"
          />
          <div className="ml-[32px]">
            <h2 className="text-[32px]">Username</h2>
            <h2 className="text-[20px]  opacity-50">usergmail.com</h2>
          </div>
        </div>
      </div>
      {/* user details */}
      <div className="mt-[32px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Contact Number</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              9866445566
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Home Address</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              9866445566
            </div>
          </div>
        </div>
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Licenses Number</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              1234 3321 1234
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Assigned Bus</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              BA 1245 KHA 738
            </div>
          </div>
        </div>
        <div className=" mt-[24px] md:flex">
          <div className="flex flex-col w-full">
            <label>License Photo</label>
            <img
              src="/images/banner.png"
              alt="license image "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />
          </div>
          <div className="mt-auto ml-auto">
            <div className="flex gap-[16px] mt-[16px] h-fit">
              <button className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]">
                Cancal
              </button>
              <button
                onClick={() => handleUpdateNavigate(1)}
                className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverProfile;
