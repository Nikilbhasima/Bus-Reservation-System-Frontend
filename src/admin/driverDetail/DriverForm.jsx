import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { uploadToCloudinary } from "../../utils/UploadImage";
import { useNavigate, useParams } from "react-router-dom";

const DriverForm = () => {
  const { actionType, id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState({
    driverPhoto: false,
    licensePhoto: false,
  });

  const [images, setImages] = useState({
    driverPhoto: null,
    licensePhoto: null,
  });

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

  const [errors, setErrors] = useState({});

  const handleDriverDetailChange = (e) => {
    const { name, value } = e.target;
    setDriverDetail((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview image immediately
    setImages((prev) => ({
      ...prev,
      [type]: URL.createObjectURL(file),
    }));

    // Show loading
    setLoading((prev) => ({ ...prev, [type]: true }));

    try {
      const uploadedUrl = await uploadToCloudinary(file);

      if (uploadedUrl) {
        if (type === "driverPhoto") {
          setDriverDetail((prev) => ({ ...prev, driver_photo: uploadedUrl }));
        } else if (type === "licensePhoto") {
          setDriverDetail((prev) => ({ ...prev, license_photo: uploadedUrl }));
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          [type]: "Failed to upload image",
        }));
      }
    } catch (err) {
      console.error("Upload error:", err);
      setErrors((prev) => ({
        ...prev,
        [type]: "Error uploading image",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!driverDetail.driver_name.trim())
      newErrors.driver_name = "Driver name is required";

    // Email
    if (!driverDetail.driver_email.trim()) {
      newErrors.driver_email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        driverDetail.driver_email
      )
    ) {
      newErrors.driver_email = "Invalid email format";
    }

    // Phone number
    if (!driverDetail.driver_phone.trim()) {
      newErrors.driver_phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(driverDetail.driver_phone)) {
      newErrors.driver_phone = "Phone number must be 10 digits";
    }

    // Address
    if (!driverDetail.driver_address.trim())
      newErrors.driver_address = "Home address is required";

    // License number
    if (!driverDetail.driver_license_number.trim())
      newErrors.driver_license_number = "License number is required";

    // Bus selection
    if (!driverDetail.bus || driverDetail.bus === "null")
      newErrors.bus = "Please assign a bus";

    // Driver photo
    if (!images.driverPhoto) newErrors.driverPhoto = "Driver photo is required";

    // License photo
    if (!images.licensePhoto)
      newErrors.licensePhoto = "License photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", driverDetail);
    } else {
      console.log(" Validation failed");
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
    <>
      <div className="flex justify-between items-center mb-[24px]">
        {actionType === "addDriver" ? (
          <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
            Add Driver
          </h2>
        ) : (
          <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
            Update Driver
          </h2>
        )}
      </div>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        {/* part 1 */}
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* Driver Name */}
          <div className="flex flex-col w-full">
            <label>Driver Name</label>
            <input
              type="text"
              name="driver_name"
              value={driverDetail.driver_name}
              onChange={handleDriverDetailChange}
              placeholder="Enter Name of Driver"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.driver_name} />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label>Email Address</label>
            <input
              type="text"
              name="driver_email"
              value={driverDetail.driver_email}
              onChange={handleDriverDetailChange}
              placeholder="Enter Email Address"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.driver_email} />
          </div>
        </div>

        {/* part 2 */}
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* Contact Number */}
          <div className="flex flex-col w-full">
            <label>Contact Number</label>
            <input
              type="text"
              name="driver_phone"
              value={driverDetail.driver_phone}
              onChange={handleDriverDetailChange}
              placeholder="Enter Driver Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.driver_phone} />
          </div>

          {/* Address */}
          <div className="flex flex-col w-full">
            <label>Home Address</label>
            <input
              type="text"
              name="driver_address"
              value={driverDetail.driver_address}
              onChange={handleDriverDetailChange}
              placeholder="Enter Driver Address"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.driver_address} />
          </div>
        </div>

        {/* part 3 */}
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* License Number */}
          <div className="flex flex-col w-full">
            <label>License Number</label>
            <input
              type="text"
              name="driver_license_number"
              value={driverDetail.driver_license_number}
              onChange={handleDriverDetailChange}
              placeholder="Enter License Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.driver_license_number} />
          </div>

          {/* Assign Bus */}
          <div className="flex flex-col w-full">
            <label>Assign Bus</label>
            <select
              name="bus"
              value={driverDetail.bus}
              onChange={handleDriverDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value="null">Assign Bus</option>
              <option value="Kathmandu-Pokhera">Kathmandu-Pokhera</option>
              <option value="Kathmandu-Chitwan">Kathmandu-Chitwan</option>
              <option value="Pokhara-Butwal">Pokhara-Butwal</option>
            </select>
            <ErrorText message={errors.bus} />
          </div>
        </div>

        {/* part 4 */}
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          {/* Driver Photo */}
          <div className="flex flex-col w-full">
            <label>Driver Photo</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images.driverPhoto
                    ? images.driverPhoto
                    : "/images/downloadImage.png"
                }
                alt="driver"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "driverPhoto")}
              />
            </div>
            <ErrorText message={errors.driverPhoto} />
          </div>

          {/* License Photo */}
          <div className="flex flex-col w-full">
            <label>License Photo</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images.licensePhoto
                    ? images.licensePhoto
                    : "/images/downloadImage.png"
                }
                alt="license"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "licensePhoto")}
              />
            </div>
            <ErrorText message={errors.licensePhoto} />
          </div>
        </div>

        {/* buttons part */}
        <div className="flex gap-[1rem] flex-end w-full">
          <button
            type="button"
            className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
            onClick={() => {
              setDriverDetail({
                driver_name: "",
                driver_phone: "",
                driver_email: "",
                driver_address: "",
                driver_photo: "",
                driver_license_number: "",
                license_photo: "",
                bus: "",
              });
              setImages({ driverPhoto: null, licensePhoto: null });
              setErrors({});
              navigate(-1);
            }}
          >
            Cancel
          </button>
          {actionType === "addDriver" ? (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Add Driver
            </button>
          ) : (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Update Driver
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default DriverForm;
