import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { uploadToCloudinary } from "../../../utils/UploadImage";
import { FadeLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { registerUser, updateOwner } from "../../../redux/authSlice/AuthThunks";
import { toast } from "react-toastify";
import axios from "axios";
import { getOwnerDetail } from "../../../redux/agencySlice/driverSlice/DriverThunks";

function AddOwner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ownerId } = useParams();
  const [ownerDetail, setOwnerDetail] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "ROLE_OWNER",
    image: null,
  });
  const [images, setImages] = useState({ image: null });

  const [uploading, setUploading] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (ownerId > 0) getOwnerDetailData(ownerId);
  }, []);

  const getOwnerDetailData = async () => {
    try {
      const response = await dispatch(getOwnerDetail(ownerId));
      if (response.meta.requestStatus === "fulfilled") {
        setOwnerDetail({
          username: response?.payload?.username,
          phoneNumber: response?.payload?.phoneNumber,
          email: response?.payload?.email,
          image: response?.payload?.image,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChage = (e) => {
    const { name, value } = e.target;
    setOwnerDetail((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("submit data:", ownerDetail);
      if (ownerId > 0) {
        updateData();
      } else {
        setOwnerDetail((data) => ({ ...data, [password]: 12345678 }));
        callApi(ownerDetail);
      }
    }
  };

  const callApi = async (data) => {
    try {
      const response = await dispatch(registerUser(data));
      if (response.meta.requestStatus === "fulfilled") {
        setOwnerDetail({
          username: "",
          phoneNumber: "",
          email: "",
          password: "",
          role: "ROLE_OWNER",
          image: null,
        });
        toast.success("Owner added successfully!");
      } else {
        toast.error("Fail to add Owner!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const response = await dispatch(
        updateOwner({ userId: ownerId, detail: ownerDetail })
      );
      console.log("update response:", response);
      if (response.meta.requestStatus === "fulfilled") {
        setOwnerDetail({
          username: "",
          phoneNumber: "",
          email: "",
          password: "",
          role: "ROLE_OWNER",
          image: null,
        });
        toast.success("Owner Data updated successfull");
        navigate(-1);
      } else {
        toast.error("Fail to update owner data");
      }
    } catch (error) {
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

  const validateForm = () => {
    const newErrors = {};

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Username
    if (!ownerDetail.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email
    if (!ownerDetail.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(ownerDetail.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone Number
    if (!ownerDetail.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(ownerDetail.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // upload file
  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploading(true);
      const uploadedUrl = await uploadToCloudinary(file);
      if (uploadedUrl) {
        setOwnerDetail((prev) => ({ ...prev, image: uploadedUrl }));
        setImages((prev) => ({ ...prev, image: uploadedUrl }));
        setUploading(false);
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, image: "Image Upload Error" }));
    }
  };

  return (
    <>
      {/* this is header part */}
      <div className="flex items-center gap-[16px] mb-[24px]">
        <div
          onClick={() => navigate(-1)}
          className="bg-[#078DD7] text-[white] text-[20px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in "
        >
          <IoArrowBack className="text-[20px]" />
        </div>
        <h2 className="text-[2rem] font-semibold">Add Owner</h2>
      </div>
      {/* this is form part */}
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* part 1*/}
          <div className="flex flex-col w-full">
            <label>Owner Name</label>
            <input
              type="text"
              name="username"
              value={ownerDetail.username}
              onChange={handleChage}
              placeholder="Enter Owner Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.username} />
          </div>

          {/* Reg Number */}
          <div className="flex flex-col w-full">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={ownerDetail.email}
              onChange={handleChage}
              placeholder="Enter Email"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.email} />
          </div>
        </div>
        {/* part two */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          <div className="flex flex-col w-full">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={ownerDetail.phoneNumber}
              onChange={handleChage}
              placeholder="Enter Phone Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.phoneNumber} />
          </div>

          {/* Reg Number */}
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col gap-[8px] mb-[24px]">
              {uploading ? (
                <div className="flex justify-center">
                  <FadeLoader />
                </div>
              ) : (
                <div className="relative w-[180px] flex flex-col gap-[8px]">
                  <img
                    src={
                      ownerDetail?.image == null
                        ? "/images/uploadImage.png"
                        : ownerDetail?.image
                    }
                    alt="user"
                    className="w-[180px]"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "image")}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* part 3 */}

        {ownerId > 0 && (
          <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <div className="flex flex-col w-full">
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={ownerDetail.password}
                onChange={handleChage}
                placeholder="Enter Password"
                className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
              />
            </div>
          </div>
        )}

        {/* button part */}
        <div className="flex gap-[1rem] flex-end w-full">
          <button
            type="button"
            className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB] hover:-translate-y-1 duration-300 ease-in"
          >
            Cancel
          </button>
          {ownerId < 1 ? (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white hover:-translate-y-1 duration-300 ease-in"
            >
              Add Owner
            </button>
          ) : (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white hover:-translate-y-1 duration-300 ease-in"
            >
              Update Bus
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default AddOwner;
