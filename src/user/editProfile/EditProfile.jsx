import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import TextFieldComponent from "../../component/TextFieldComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getUserDetail,
  updateUserDetail,
} from "../../redux/authSlice/AuthThunks";
import { uploadToCloudinary } from "../../utils/UploadImage";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState({ image: null });
  const [userDetail, setUserDetail] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const response = await dispatch(getUserDetail());
      if (response.meta.requestStatus === "fulfilled") {
        setUserDetail(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDetailChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const uploadedUrl = await uploadToCloudinary(file);
      if (uploadedUrl) {
        setUserDetail((prev) => ({ ...prev, image: uploadedUrl }));
        setImages((prev) => ({ ...prev, image: uploadedUrl }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, image: "Image Upload Error" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userDetail?.username?.trim()) newErrors.username = "Username Required";
    if (!userDetail?.email?.trim()) newErrors.email = "Email Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      console.log("Checking Data =", userDetail);

      const response = await dispatch(updateUserDetail(userDetail));
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Profile Edited");
      } else {
        toast.error("Failed to edit profile");
      }
    } catch (error) {
      toast.error("Failed to edit profile");
      console.log(error);
    }
  };

  const ErrorText = ({ message }) => (
    <div className="min-h-[20px]">
      <span
        className={`text-[12px] ml-[8px] text-[#DC2626] flex items-center gap-[4px] transition-opacity duration-200 ${
          message ? "opacity-100" : "opacity-0"
        }`}
      >
        <MdErrorOutline className="text-[16px]" />
        {message || "placeholder"}
      </span>
    </div>
  );

  return (
    <div className="p-[16px]">
      <div className="bg-[#078DD7]/10 p-[16px] rounded-[10px]">
        <div className="flex justify-between items-center mb-[32px]">
          <h2 className="text-[20px] font-medium">Edit Profile</h2>
          <button
            className="bg-[#078DD7] px-[32px] py-[12px] text-white rounded-[8px] flex gap-[8px] items-center"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack />
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[8px] mb-[24px]">
              <div className="relative w-[180px] flex flex-col gap-[8px]">
                <img src={userDetail?.image} alt="user" className="w-[180px]" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "image")}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[8px]">
              <div className="flex flex-col gap-[8px] w-full">
                <label>Full Name</label>
                <TextFieldComponent
                  name="username"
                  value={userDetail?.username || ""}
                  onChange={handleUserDetailChange}
                />
                <ErrorText message={errors.username} />
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <label>Email</label>
                <TextFieldComponent
                  name="email"
                  value={userDetail?.email || ""}
                  onChange={handleUserDetailChange}
                />
                <ErrorText message={errors.email} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[8px]">
              <div className="flex flex-col gap-[8px] w-full">
                <label>Gender</label>
                <select
                  name="gender"
                  value={userDetail?.gender || ""}
                  onChange={handleUserDetailChange}
                  className="border border-gray-400 rounded-[6px] p-[12px]"
                >
                  <option value="">Select a Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others...</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <label>Location</label>
                <TextFieldComponent
                  name="address"
                  value={userDetail?.address || ""}
                  onChange={handleUserDetailChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-col gap-[8px] w-full md:w-[50%]">
                <label>Phone Number</label>
                <TextFieldComponent
                  name="phoneNumber"
                  value={userDetail?.phoneNumber || ""}
                  onChange={handleUserDetailChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-[32px] bg-[#078DD7] px-[32px] py-[12px] text-white rounded-[8px]"
              on
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
