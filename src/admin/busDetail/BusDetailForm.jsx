import React from "react";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { uploadToCloudinary } from "../../utils/UploadImage";
import { useNavigate, useParams } from "react-router-dom";

const amenitiesList = [
  "AC",
  "TV",
  "Charging Port",
  "Comfort Seat",
  "Free Wi-Fi",
  "Music System",
];

function BusDetailForm() {
   const { actionType, id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState({
    busFront: false,
    busBack: false,
    busInterior: false,
  });

  const [images, setImages] = useState({
    busFront: false,
    busBack: false,
    busInterior: false,
  });

  const [busDetail, setBusDetail] = useState({
    bus_name: "",
    reg_num: "",
    total_seats: "",
    bus_route: "",
    bus_schedule: "",
    bus_type: "",
    bus_amenities:"",
    bus_front: "",
    bus_back: "",
    bus_interior: "",
  });

  const [selected, setSelected] = useState([]);
  const [errors, setErrors] = useState({});

  // Handler for amenities
  const handleAmenityChange = (item) => {
  let updated;
  if (selected.includes(item)) {
    updated = selected.filter((i) => i !== item);
  } else {
    updated = [...selected, item];
  }
  setSelected(updated);
  setBusDetail((prev) => ({
    ...prev,
    bus_amenities: updated,
  }));
};



  const handleBusDetailChange = (e) => {
    const { name, value } = e.target;
    setBusDetail((prev) => ({ ...prev, [name]: value }));
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
        if (type === "busFront") {
          setBusDetail((prev) => ({ ...prev, bus_front: uploadedUrl }));
        } else if (type === "busBack") {
          setBusDetail((prev) => ({ ...prev, bus_back: uploadedUrl }));
        }else if (type === "busInterior") {
          setBusDetail((prev) => ({ ...prev, bus_interior: uploadedUrl }));
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
    if (!busDetail.bus_name.trim())
      newErrors.bus_name = "Bus name is required";

    // Reg. Number
    if (!busDetail.reg_num.trim())
      newErrors.reg_num = "Register Number is required";

    // Bus Type
    if (!busDetail.bus_type.trim())
      newErrors.bus_type = "Bus Type is required";

    // Bus Route
    if (!busDetail.bus_route.trim())
      newErrors.bus_route = "Bus Route is required";

    // Bus Schedule
    if (!busDetail.bus_schedule.trim())
      newErrors.bus_schedule = "Bus Schedule is required";

    // Seat
    if (!busDetail.total_seats.trim()) {
      newErrors.total_seats = "Total Seats should be defined";
    } else if (!/^\d{2}$/.test(busDetail.total_seats)) {
      newErrors.total_seats = "Total Seats must be 2 digits or less";
    }

    // Bus photo
    if (!images.busFront) newErrors.busFront = "Bus photo is required";
    if (!images.busBack) newErrors.busBack = "Bus photo is required";
    if (!images.busInterior) newErrors.busInterior = "Interior photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", busDetail);
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
        {actionType === "addBus" ? (
          <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
            Add Bus
          </h2>
        ) : (
          <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
            Update Bus
          </h2>
        )}
      </div>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        {/* part 1 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Bus Name */}
          <div className="flex flex-col w-full">
            <label>Bus Name</label>
            <input
              type="text"
              name="bus_name"
              value={busDetail.bus_name}
              onChange={handleBusDetailChange}
              placeholder="Enter Name of Bus"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.bus_name} />
          </div>

          {/* Reg Number */}
          <div className="flex flex-col w-full">
            <label>Register Number</label>
            <input
              type="text"
              name="reg_num"
              value={busDetail.reg_num}
              onChange={handleBusDetailChange}
              placeholder="Enter Register Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.reg_num} />
          </div>
        </div>

        {/* part 2 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Total Seat Number */}
          <div className="flex flex-col w-full">
            <label>Total Seats</label>
            <input
              type="text"
              name="total_seats"
              value={busDetail.total_seats}
              onChange={handleBusDetailChange}
              placeholder="Enter Total Seats"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.total_seats} />
          </div>

          {/* Bus Type */}
          <div className="flex flex-col w-full">
            <label>Bus Type</label>
            <select
              type="text"
              name="bus_type"
              value={busDetail.bus_type}
              onChange={handleBusDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value={"null"}>Select a Type</option>
              <option value={"AC Bus"}>AC Bus</option>
              <option value={"Sleeper Bus"}>Sleeper Bus</option>
            </select>
            <ErrorText message={errors.bus_type} />
          </div>
        </div>

        {/* part 3 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Bus Timing */}
          <div className="flex flex-col w-full">
              <label>Bus Schedule</label>
              <select
                type="text"
                name="bus_schedule"
                value={busDetail.bus_schedule}
                onChange={handleBusDetailChange}
                className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
              >
              
                <option value={"null"}>Select a Schedule</option>
                <option value={"Morning"}>Morning</option>
                <option value={"Day"}>Day</option>
                <option value={"Night"}>Night</option>
              </select>
              <ErrorText message={errors.bus_schedule} />
          </div>

          {/* Assign Bus */}
          <div className="flex flex-col w-full">
            <label>Assign Route</label>
            <select
              name="bus_route"
              value={busDetail.bus_route}
              onChange={handleBusDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value="null">Assign Route</option>
              <option value="Kathmandu-Pokhera">Kathmandu-Pokhera</option>
              <option value="Kathmandu-Chitwan">Kathmandu-Chitwan</option>
              <option value="Pokhara-Butwal">Pokhara-Butwal</option>
            </select>
            <ErrorText message={errors.bus_route} />
          </div>
        </div>

        {/* Part Checkbox */}

        <div className="flex flex-col w-full bg-gray-100 p-4 rounded-[10px]">
          <h3 className="font-semibold text-lg mb-3">Bus Amenities</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {amenitiesList.map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-gray-800 text-base"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => handleAmenityChange(item)}
                  className="w-4 h-4 accent-[#078DD7]"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* part 4 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Bus Photo */}

          {/* Bus Front */}
          <div className="flex flex-col w-full">
            <label>Bus Front</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images.busFront
                    ? images.busFront
                    : "/images/downloadImage.png"
                }
                alt="busFront"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "busFront")}
              />
            </div>
            <ErrorText message={errors.busFront} />
          </div>

          {/* Bus Back */}
          <div className="flex flex-col w-full">
            <label>Bus Back</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images.busBack
                    ? images.busBack
                    : "/images/downloadImage.png"
                }
                alt="busBack"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "busBack")}
              />
            </div>
            <ErrorText message={errors.busBack} />
          </div>

          {/* Bus Interior */}
          <div className="flex flex-col w-full">
            <label>Bus Interior</label>
            <div className="relative w-full mt-[8px]">
              <img
                src={
                  images.busInterior
                    ? images.busInterior
                    : "/images/downloadImage.png"
                }
                alt="driver"
                className="h-[10rem] m-auto"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileChange(e, "busInterior")}
              />
            </div>
            <ErrorText message={errors.busInterior} />
          </div>
        </div>

        {/* buttons part */}
        <div className="flex gap-[1rem] flex-end w-full">
          <button
            type="button"
            className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
            onClick={() => {
              setBusDetail({
                bus_amenities: "",
                bus_name: "",
                reg_num: "",
                total_seats: "",
                bus_route: "",
                bus_schedule: "",
                bus_type: "",
                bus_front: "",
                bus_back: "",
                bus_interior: "",
              });
              setImages({ busFront: null, busBack: null, busInterior: null });
              setErrors({});
              navigate(-1);
            }}
          >
            Cancel
          </button>
          {actionType === "addBus" ? (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Add Bus
            </button>
          ) : (
            <button
              type="submit"
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Update Bus
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default BusDetailForm;
