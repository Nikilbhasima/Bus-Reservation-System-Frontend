import { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { uploadToCloudinary } from "../../utils/UploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addDriver,
  getDriverById,
  updateDriverDetail,
} from "../../redux/agencySlice/driverSlice/DriverThunks";
import { toast } from "react-toastify";
import { getAllBus } from "../../redux/agencySlice/busSlice/busThunks";

const DriverForm = () => {
  const dispatch = useDispatch();
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

  const [busList, setBusList] = useState([]);

  const [driverDetail, setDriverDetail] = useState({
    driver_name: "",
    driver_phone: "",
    driver_email: "",
    driver_address: "",
    driver_photo: "",
    driver_license_number: "",
    license_photo: "",
    bus: null,
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
        driverDetail.driver_email,
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
    // if (!driverDetail.bus || driverDetail.bus === "null")
    //   newErrors.bus = "Please assign a bus";

    // Driver photo
    if (!images.driverPhoto) newErrors.driverPhoto = "Driver photo is required";

    // License photo
    if (!images.licensePhoto)
      newErrors.licensePhoto = "License photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("driver detail:", driverDetail);
        const response =
          actionType === "addDriver"
            ? await dispatch(addDriver(driverDetail))
            : await dispatch(
                updateDriverDetail({
                  id: driverDetail?.driverId,
                  driverData: driverDetail,
                }),
              );
        if (response.meta.requestStatus === "fulfilled") {
          setDriverDetail({
            driver_name: "",
            driver_phone: "",
            driver_email: "",
            driver_address: "",
            driver_photo: "",
            driver_license_number: "",
            license_photo: "",
            bus: null,
          });
          setImages({
            driverPhoto: null,
            licensePhoto: null,
          });
          toast.success("Driver added successfully");
        }
      } catch (error) {
        toast.error("Failed to add Driver");
        console.log(error);
      }
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

  useEffect(() => {
    getDriverByIdData(id);
    getAllBuses();
  }, [id, actionType]);

  const getAllBuses = async () => {
    try {
      const response = await dispatch(getAllBus());
      if (response.meta.requestStatus === "fulfilled") {
        setBusList(
          response.payload.filter((data) => data.assignStatus != "ASSIGN"),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDriverByIdData = async (id) => {
    try {
      const response = await dispatch(getDriverById(id));
      if (response.meta.requestStatus === "fulfilled") {
        setDriverDetail(response.payload);
        setImages({
          driverPhoto: response?.payload?.driver_photo,
          licensePhoto: response?.payload?.license_photo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              value={driverDetail.bus?.busId || ""}
              onChange={(e) =>
                setDriverDetail((prev) => ({
                  ...prev,
                  bus: e.target.value
                    ? { busId: parseInt(e.target.value) }
                    : null,
                }))
              }
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value="null">Assign Bus</option>
              {busList.map((data, index) => (
                <option key={index} value={data?.busId}>
                  {data?.busName}--{data?.busRegistrationNumber}
                </option>
              ))}
            </select>
            {/* <ErrorText message={errors.bus} /> */}
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
