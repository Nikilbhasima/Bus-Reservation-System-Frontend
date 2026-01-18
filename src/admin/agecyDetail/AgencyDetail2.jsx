import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAgencyDetail } from "../../redux/agencySlice/agencyDetailSlice/AgencyDetailThunks";

function AgencyDetail2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [agencyDetail, setAgencyDetail] = useState({});

  useEffect(() => {
    getAgencyDetails();
  }, []);

  const getAgencyDetails = async () => {
    try {
      const response = await dispatch(getAgencyDetail());
      setAgencyDetail(response.payload);
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
              agencyDetail?.agency_logo
                ? agencyDetail?.agency_logo
                : "/images/organizationLogo.webp"
            }
            alt="userImage"
            className="w-[171px] h-[171px] rounded-[10px] shadow-xl"
          />
        </div>
        <div className="mt-[32px]">
          <div className="flex gap-[20px] mt-[24px]">
            <div className="flex flex-col w-full">
              <label>Agency Number</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                {agencyDetail?.travel_agency_name}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label>Home Address</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                {agencyDetail?.address}
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[24px]">
            <div className="flex flex-col w-full">
              <label>Registration Number</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                {agencyDetail?.registration_number}
              </div>
            </div>

            <div className="flex gap-[16px] mt-[16px] h-fit mt-auto">
              <button
                onClick={() => navigate(`agencyForm/1`)}
                className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white hover:-translate-y-1 duration-300 ease-in"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgencyDetail2;
