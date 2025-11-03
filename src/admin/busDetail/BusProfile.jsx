import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBusById } from "../../redux/agencySlice/busSlice/busThunks";

function BusProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const [busDetail, setBusDetail] = useState({
    // busphotos: [],
  });

  useEffect(()=> {
    busById();
  }, []);

  const busById = async () => {
    try{
      const response = await dispatch(getBusById(id));
      if (response.meta.requestStatus === "fulfilled") {
        setBusDetail(response.payload);
        console.log("ABCD");
        console.log(response.payload);
      }
    }catch (error) {
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
            <h2 className="text-[20px]  opacity-50">{busDetail?.busRegistrationNumber}</h2>
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
              {/* <img
              src={
                busDetail?.busphotos[0]
              }
              alt="bus front "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />

            <img
              src={
                busDetail?.busphotos[1]  
              }
              alt="bus back "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            />

            <img
              src={
                busDetail?.busphotos[2]  
              }
              alt="bus interior "
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
            /> */}
            {busDetail?.busphotos?.map((data, index)=> (
              <img key={index}
              src={data}
              alt="bus interior"
              className="rounded-[10px] w-[445px] h-[177px] mt-[8px]"
              />
            ))}
            </div>
          </div>
          <div className="mt-auto ml-auto">
            <div className="flex gap-[16px] mt-[16px] h-fit">
              <button className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]" onClick={() => {navigate(-1);}}>
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
