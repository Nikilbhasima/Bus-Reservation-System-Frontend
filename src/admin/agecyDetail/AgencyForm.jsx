import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadToCloudinary } from "../../utils/UploadImage";

function AgencyForm() {
  const dispatch = useDispatch();
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

  const [image, setImage] = useState();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    try {
      const uploadedUrl = await uploadToCloudinary(file);
      setAgencyDetail((pre) => ({ ...pre, agency_logo: uploadedUrl }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAgencyDetail((pre) => ({ ...pre, agency_logo: image }));
    console.log(agencyDetail);
  };

  return (
    <>
      <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
        Update Agency Detail
      </h2>
      <form
        className=" flex flex-col gap-[20px] mt-[32px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* Driver Name */}
          <div className="flex flex-col w-full">
            <label>Agency Registration</label>
            <input
              type="text"
              name="travel_agency_name"
              value={agencyDetail.travel_agency_name}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {/* <ErrorText message={errors.driver_name} /> */}
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label>Agency Registration Number</label>
            <input
              type="text"
              name="registration_number"
              value={agencyDetail.registration_number}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Address"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {/* <ErrorText message={errors.driver_email} /> */}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* Driver Name */}
          <div className="flex flex-col w-full">
            <label>Agency Address</label>
            <input
              type="text"
              name="address"
              value={agencyDetail.address}
              onChange={handleAgencyDetailChange}
              placeholder="Enter Agency Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {/* <ErrorText message={errors.driver_name} /> */}
          </div>
          <div className="flex flex-col w-full">
            <label>License Photo</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={image ? image : "/images/downloadImage.png"}
                alt="license"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
            {/* <ErrorText message={errors.licensePhoto} /> */}
          </div>
        </div>
        <div>
          <div className="flex">
            {" "}
            <button
              type="submit"
              className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AgencyForm;
