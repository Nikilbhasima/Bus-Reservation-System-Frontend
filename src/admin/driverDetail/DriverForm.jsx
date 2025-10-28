import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

const DriverForm = () => {
  const [images, setImages] = useState({
    driverPhoto: null,
    licensePhoto: null,
  });

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [type]: URL.createObjectURL(file),
      }));
    }
  };
  const [driverDetail, setDriverDetail] = useState({
    driver_name: "",
    driver_phone: "",
    driver_email: "",
    driver_address: "",
    driver_photo: "",
    driver_license_number: "",
    license_photo: "",
    bus: "",
  });

  const handleDriverDetailChange = (e) => {
    const { name, value } = e.target;
    setDriverDetail((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[24px] ">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">
          Add Driver
        </h2>
      </div>
      <form className="flex flex-col gap-[20px] ">
        {/* part 1 */}
        <div className="flex gap-[8px] sm:gap-[20px] md:gap-[40px] lg:gap-[60px] w-full">
          <div className="flex flex-col w-full">
            <label>Driver Name</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 outline-none mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Name of Driver"
              value={driverDetail.driver_name}
              onChange={handleDriverDetailChange}
              name="driver_name"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
          <div className="flex flex-col w-full">
            <label>Email Address</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Email Address"
              value={driverDetail.driver_email}
              onChange={handleDriverDetailChange}
              name="driver_email"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex gap-[8px] sm:gap-[20px] md:gap-[40px] lg:gap-[60px]  w-full">
          <div className="flex flex-col w-full">
            <label>Contact Number</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 outline-none mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Driver Number"
              value={driverDetail.driver_phone}
              onChange={handleDriverDetailChange}
              name="driver_phone"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
          <div className="flex flex-col w-full">
            <label>Home Address</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Driver Address"
              value={driverDetail.driver_address}
              onChange={handleDriverDetailChange}
              name="driver_address"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
        </div>
        {/* part 3 */}
        <div className="flex gap-[8px] sm:gap-[20px] md:gap-[40px] lg:gap-[60px]  w-full">
          <div className="flex flex-col w-full">
            <label>Licenses Number</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 outline-none mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Name of Driver"
              value={driverDetail.driver_license_number}
              onChange={handleDriverDetailChange}
              name="driver_license_number"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
          <div className="flex flex-col w-full">
            <label>Assign Bus</label>
            <input
              type="text"
              className="border-[2px] border-[black] border-black/50 mt-[8px] rounded-[10px] px-[8px] sm:px-[16px] py-[8px]"
              placeholder="Enter Email Address"
              value={driverDetail.bus}
              onChange={handleDriverDetailChange}
              name="bus"
            />
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
        </div>
        {/* part 4 */}
        <div className="flex gap-[8px] sm:gap-[20px] md:gap-[40px] lg:gap-[60px]  w-full">
          <div className="flex flex-col w-full">
            <label>Driver Photo</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images?.driverPhoto
                    ? images?.driverPhoto
                    : "/images/downloadImage.png"
                }
                alt="driver image"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "driverPhoto")}
              />
            </div>

            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
          <div className="flex flex-col w-full">
            <label>Licenses Photo</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images?.licensePhoto
                    ? images?.licensePhoto
                    : "/images/downloadImage.png"
                }
                alt="driver image"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "licensePhoto")}
              />
            </div>
            <span className="text-[12px] mt-[4px] ml-[8px] text-[#DC2626] flex items-center gap-[4px]">
              <MdErrorOutline className="text-[16px]" />
              ERROR MESSAGE
            </span>
          </div>
        </div>
        {/* buttons part */}
        <div className="flex gap-[1rem] flex-end w-ull">
          <button className="ml-auto px-[16px] sm:px-[24px] md:px-[32px] py-[12px] rounded-[10px] bg-[#EBEBEB]">
            Cancel
          </button>
          <button className="px-[16px] sm:px-[24px] md:px-[32px] py-[12px] rounded-[10px] bg-[#078DD7] text-[white]">
            Add Driver
          </button>
        </div>
      </form>
    </>
  );
};

export default DriverForm;
