import React from "react";
import { useNavigate } from "react-router-dom";

function BusProfile() {
  const navigate = useNavigate();
  const handleUpdateNavigate = (id) => {
    navigate(`/busDetail/busDetailForm/updateBus/${id}`);
  };

  return (
    <>
      <div>
        <div className=" w-fit flex">
          <div className="ml-[32px]">
            <h2 className="text-[32px]">Kathmandu Yatayat</h2>
            <h2 className="text-[20px]  opacity-50">बा ४ ख ०१२३</h2>
          </div>
        </div>
      </div>
      {/* bus details */}
      <div className="mt-[32px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Total Seats</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              22
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Bus Type</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              AC Bus
            </div>
          </div>
        </div>
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Bus Route</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              Kathmandu-Siraha
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Bus Schedule</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              Morning
            </div>
          </div>
        </div>
        <div className=" mt-[24px] md:flex md:flex-col">
          <div className="flex flex-col w-full">
            <label>Bus Photos</label>
            <div className="flex flex-col w-full lg:flex-row lg:gap-[8px]">
              <img
              src="/images/banner.png"
              alt="license image "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />

            <img
              src="/images/banner.png"
              alt="license image "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />

            <img
              src="/images/banner.png"
              alt="license image "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />
            </div>
          </div>
          <div className="mt-auto ml-auto">
            <div className="flex gap-[16px] mt-[16px] h-fit">
              <button className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]">
                Cancle
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
}

export default BusProfile;
