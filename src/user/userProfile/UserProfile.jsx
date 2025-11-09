import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[16px]">
      <div className="flex justify-between my-[16px]">
        <div className="w-[60%] ">
          <h2 className="font-bold text-[32px]">Profile Page</h2>
          <p className="text-black/50 font-medium">
            Manage Your account and track your activities.
          </p>
        </div>

        <div className="w-[40%] text-[#078DD7] text-[20px] flex items-center justify-center md:justify-end gap-[8px]">
          <div
            onClick={() => {
              navigate("/editProfile");
            }}
          >
            Edit Profile
          </div>
          <FaRegEdit />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] md:flex-row">
        <div className="md:w-[50%] p-[16px] my-[16px] bg-[#078DD7]/10 rounded-[10px]">
          <div className="flex gap-[16px] mb-[16px]">
            <img src="/images/nikil.png" alt="nikil" className="w-[120px]" />
            <div className="flex flex-col gap[8px]">
              <p className="text-[20px] font-medium">Nikil Bhasima</p>
              <p className="text-black/50">nikil@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-[20px]">Gender: </p>
            <p>Male</p>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />

          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-[20px]">Location: </p>
            <p>Thimi</p>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />

          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-[20px]">Phone Number: </p>
            <p>+977 9866445544</p>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />
        </div>

        <div className="md:w-[50%] p-[16px] my-[16px] bg-[#078DD7]/10 rounded-[10px]">
          <div className="text-[#078DD7] flex gap-[8px] items-center text-[20px] font-bold mb-[16px]">
            <FaLock />
            <div>Security Setting</div>
          </div>

          <div className="flex items-center justify-between my-[16px]">
            <div>Change Password</div>
            <button className="bg-[#078DD7] px-[32px] py-[12px] rounded-[8px] text-white">
              Change Password
            </button>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />

          <div className="flex items-center justify-between my-[16px]">
            <div>Two Factor Authentication</div>
            <button className="bg-[#078DD7] px-[32px] py-[12px] rounded-[8px] text-white">
              Enable 2FA
            </button>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />

          <div className="flex items-center justify-between my-[16px]">
            <div>Login Session</div>
            <button className="bg-[#078DD7] px-[32px] py-[12px] rounded-[8px] text-white">
              View Session
            </button>
          </div>
          <hr className="text-[#078DD7] my-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
