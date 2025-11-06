import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDriverById } from "../../redux/agencySlice/driverSlice/DriverThunks";

const DriverProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [driverDetail, setDriverDetail] = useState({});

  const handleUpdateNavigate = (id) => {
    navigate(`/driverDetail/driverForm/updateDriver/${id}`);
  };

  useEffect(() => {
    driverById();
  }, []);
  const driverById = async () => {
    try {
      const response = await dispatch(getDriverById(id));
      if (response.meta.requestStatus === "fulfilled") {
        setDriverDetail(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className=" w-fit flex">
          <img
            src={
              driverDetail?.driver_photo
                ? driverDetail?.driver_photo
                : "/images/profile.png"
            }
            alt="userImage"
            className="w-[171px] h-[171px] rounded-[10px] shadow-xl"
          />
          <div className="ml-[32px]">
            <h2 className="text-[32px]">{driverDetail?.driver_name}</h2>
            <h2 className="text-[20px]  opacity-50">
              {driverDetail?.driver_email}
            </h2>
          </div>
        </div>
      </div>
      {/* user details */}
      <div className="mt-[32px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Contact Number</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {driverDetail?.driver_phone}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Home Address</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {driverDetail?.driver_address}
            </div>
          </div>
        </div>
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Licenses Number</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {driverDetail?.driver_license_number}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Assigned Bus</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {driverDetail?.bus?.busName
                ? driverDetail?.bus?.busName
                : "Hasn't been assigned"}
            </div>
          </div>
        </div>
        <div className=" mt-[24px] md:flex">
          <div className="flex flex-col w-full">
            <label>License Photo</label>
            <img
              src={
                driverDetail?.license_photo
                  ? driverDetail?.license_photo
                  : "/images/banner.png"
              }
              alt="license image "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />
          </div>
          <div className="mt-auto ml-auto">
            <div className="flex gap-[16px] mt-[16px] h-fit">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
              >
                Cancal
              </button>
              <button
                onClick={() => handleUpdateNavigate(driverDetail?.driverId)}
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
