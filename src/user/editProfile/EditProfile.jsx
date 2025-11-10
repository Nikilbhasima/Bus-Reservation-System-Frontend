import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import TextFieldComponent from "../../component/TextFieldComponent";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[16px]">
      <div className="bg-[#078DD7]/10 p-[16px] rounded-[10px]">
        <div className="flex justify-between items-center mb-[32px]">
          <h2 className="text-[20px] font-medium">Edit Profile</h2>
          <button
            className="bg-[#078DD7] px-[32px] py-[12px] text-white rounded-[8px] flex gap-[8px] items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowRoundBack />
            Back
          </button>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[8px] mb-[24px]">
            <div className="relative w-[180px] flex flex-col gap-[8px]">
              <img src="/images/nikil.png" alt="nikil" className="w-[180px]" />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[8px]">
            <div className="flex flex-col gap-[8px] w-full">
              <label htmlFor="name">Full Name</label>
              <TextFieldComponent name={"name"} value={"Nikil Bhasima"} />
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <label htmlFor="email">Email</label>
              <TextFieldComponent name={"email"} value={"nikil@gmail.com"} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[8px]">
            <div className="flex flex-col gap-[8px] w-full">
              <label htmlFor="name">Gender</label>
              <select className="border border-gray-400 rounded-[6px] p-[12px]">
                <option>Male</option>
                <option>Female</option>
                <option>Others...</option>
              </select>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <label htmlFor="email">Location</label>
              <TextFieldComponent name={"address"} value={"Thimi"} />
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[8px] w-full md:w-[50%]">
              <label htmlFor="name">Phone Number</label>
              <TextFieldComponent name={"number"} value={"+977 9988664455"} />
            </div>
          </div>

          <div>
            <button className="mt-[32px] bg-[#078DD7] px-[32px] py-[12px] text-white rounded-[8px]">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
