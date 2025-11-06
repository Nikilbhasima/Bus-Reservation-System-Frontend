import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBusById } from "../../redux/agencySlice/busSlice/busThunks";

function BusProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [busDetail, setBusDetail] = useState({
    // busphotos: [],
  });

  useEffect(() => {
    busById();
  }, []);

  const busById = async () => {
    try {
      const response = await dispatch(getBusById(id));
      if (response.meta.requestStatus === "fulfilled") {
        setBusDetail(response.payload);
        console.log("ABCD");
        console.log(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateNavigate = (id) => {
    navigate(`/busDetail/busDetailForm/updateBus/${id}`);
  };

  return (
    <>
      <div>
        <div className=" w-fit flex">
          <div className="ml-[32px]">
            <h2 className="text-[32px]">{busDetail?.busName}</h2>
            <h2 className="text-[20px]  opacity-50">
              {busDetail?.busRegistrationNumber}
            </h2>
          </div>
        </div>
      </div>
      {/* bus details */}
      <div className="mt-[32px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Total Seats</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {busDetail?.totalSeats}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Bus Type</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {busDetail?.busType}
            </div>
          </div>
        </div>
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Bus Route</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {busDetail?.routes?.routeName
                ? busDetail?.routes?.routeName
                : "Route hasn't been assigned"}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Bus Schedule</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {busDetail?.busSchedules?.departureTime}--(
              {busDetail?.busSchedules?.period})
            </div>
          </div>
        </div>

        <div className="mt-[24px]">
          <label>Amenities</label>
          <div className="rounded-[10px] shadow-xl px-[16px] py-[16px] mt-[8px] flex flex-wrap gap-[12px]">
            {busDetail?.amenities && busDetail.amenities.length > 0 ? (
              busDetail.amenities.map((item, index) => (
                <span
                  key={index}
                  className="bg-[#E6F4FF] text-[#078DD7] px-[12px] py-[6px] rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))
            ) : (
              <p className="opacity-50">No amenities added.</p>
            )}
          </div>
        </div>

        <div className="mt-[16px]">Photos</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] mt-[16px]">
          {busDetail?.busphotos?.map((data, index) => {
            const labels = ["Front", "Back", "Interior"]; // 👈 labels for each photo
            return (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-[10px] shadow-md p-[8px]"
              >
                <img
                  src={data}
                  alt={`bus-${labels[index]}`}
                  className="rounded-[10px] w-full h-[200px] object-cover"
                />
                <span className="mt-[8px] text-gray-700 font-medium">
                  {labels[index] || `Photo ${index + 1}`}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto ml-auto">
          <div className="flex gap-[16px] mt-[16px] h-fit">
            <button
              className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancle
            </button>
            <button
              onClick={() => handleUpdateNavigate(busDetail?.busId)}
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusProfile;
