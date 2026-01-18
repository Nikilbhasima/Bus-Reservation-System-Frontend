import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { uploadToCloudinary } from "../../../utils/UploadImage";
import { MdErrorOutline } from "react-icons/md";
import {
  addTravelAgency,
  getTravelAgencyDetails,
  updateTravelAgency,
} from "../../../redux/agencySlice/agencyDetailSlice/AgencyDetailThunks";

function AddAgency() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actionType, ownerId } = useParams();
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState({ image: null });

  const [agencyDetail, setAgencyDetail] = useState({
    travel_agency_name: "",
    registration_number: "",
    agency_logo: "",
    address: "",
  });
  const handleAgencyDetailChange = (e) => {
    const { name, value } = e.target;
    setAgencyDetail((pre) => ({ ...pre, [name]: value }));
  };

  // upload file
  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploading(true);
      const uploadedUrl = await uploadToCloudinary(file);
      console.log("is url comming:", uploadedUrl);
      if (uploadedUrl) {
        setAgencyDetail((prev) => ({ ...prev, agency_logo: uploadedUrl }));
        setImages((prev) => ({ ...prev, image: uploadedUrl }));
        setUploading(false);
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, agency_logo: "Image Upload Error" }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    // Username
    if (!agencyDetail.travel_agency_name.trim()) {
      newErrors.travel_agency_name = "Travel agency name is required";
    }

    // Email
    if (!agencyDetail.registration_number.trim()) {
      newErrors.registration_number = "Registration number is required";
    }

    // Phone Number
    if (!agencyDetail.address.trim()) {
      newErrors.address = "Travel agency address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dataa:", agencyDetail);
    if (validateForm()) {
      if (actionType === "edit") {
        update(agencyDetail);
      } else {
        add();
      }
    }
  };

  const add = async () => {
    try {
      const response = await dispatch(
        addTravelAgency({ userId: ownerId, data: agencyDetail }),
      );
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Travel agency added successfully!!");
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (data) => {
    try {
      const response = await dispatch(
        updateTravelAgency({ id: ownerId, data: data }),
      );
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Travel agency updated successfully!!");
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const response = await dispatch(getTravelAgencyDetails(ownerId));
      if (response.meta.requestStatus === "fulfilled") {
        console.log(response);
        setAgencyDetail({
          travel_agency_name: response?.payload?.travel_agency_name,
          registration_number: response?.payload?.registration_number,
          agency_logo: response?.payload?.agency_logo,
          address: response?.payload?.address,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (actionType === "edit") {
      getData();
    }
  }, []);
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
        <h2 className="text-[2rem] font-semibold">Add Agency</h2>
      </div>
      {/* form part */}
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* part 1*/}
          <div className="flex flex-col w-full">
            <label>Owner Name</label>
            <input
              type="text"
              name="travel_agency_name"
              value={agencyDetail.travel_agency_name}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.travel_agency_name} />
          </div>

          {/* Reg Number */}
          <div className="flex flex-col w-full">
            <label>Enter Registration Number</label>
            <input
              type="text"
              name="registration_number"
              value={agencyDetail.registration_number}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.registration_number} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* part 1*/}
          <div className="flex flex-col w-full">
            <label>Travel Agency Address</label>
            <input
              type="text"
              name="address"
              value={agencyDetail.address}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.address} />
          </div>

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
                      agencyDetail?.agency_logo
                        ? agencyDetail.agency_logo
                        : "/images/uploadImage.png"
                    }
                    alt="agency logo"
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
              Add Agency
            </button>
          ) : (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white hover:-translate-y-1 duration-300 ease-in"
            >
              Update Agency
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default AddAgency;
