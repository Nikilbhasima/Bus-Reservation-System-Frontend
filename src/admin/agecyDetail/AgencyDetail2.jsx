import React from "react";
import { useNavigate } from "react-router-dom";

function AgencyDetail2() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className=" w-fit flex">
          <img
            src={"/images/organizationLogo.webp"}
            alt="userImage"
            className="w-[171px] h-[171px] rounded-[10px] shadow-xl"
          />
        </div>
        <div className="mt-[32px]">
          <div className="flex gap-[20px] mt-[24px]">
            <div className="flex flex-col w-full">
              <label>Agency Number</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                Deurali Yatayat
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label>Home Address</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                Koteshor, Kathmandu
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[24px]">
            <div className="flex flex-col w-full">
              <label>Registration Number</label>
              <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
                123456/076/077
              </div>
            </div>

            <div className="flex gap-[16px] mt-[16px] h-fit mt-auto">
              <button
                onClick={() => navigate(`agencyForm/1`)}
                className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
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
