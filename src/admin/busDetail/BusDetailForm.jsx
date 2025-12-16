import { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { uploadToCloudinary } from "../../utils/UploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addBus,
  getBusById,
  updateBusDetail,
} from "../../redux/agencySlice/busSlice/busThunks";
import { toast } from "react-toastify";
import { getAllRoute } from "../../redux/agencySlice/routeSlice/RouteThunks";
import { getAllTravelAgencySchedule } from "../../redux/agencySlice/scheduleSlice/ScheduleThunks";

const amenitiesList = [
  "AC",
  "TV",
  "Charging Port",
  "Comfort Seat",
  "Free Wi-Fi",
  "Music System",
];

function BusDetailForm() {
  const dispatch = useDispatch();
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

  const [scheduleList, setScheduleList] = useState([]);
  const [routeList, setRouteList] = useState([]);

  const [busDetail, setBusDetail] = useState({
    busName: "",
    busRegistrationNumber: "",
    totalSeats: "",
    busType: "",
    busphotos: [],
    amenities: [],
    isActive: true,
    busSchedules: "",
    routes: "",
    seatPrice: 0,
    sleeperPrice: 0,
  });
  console.log("bus detail:", busDetail);
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
      amenities: updated,
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

    const localPreview = URL.createObjectURL(file);
    setImages((prev) => ({
      ...prev,
      [type]: localPreview,
    }));

    setLoading((prev) => ({ ...prev, [type]: true }));

    try {
      const uploadedUrl = await uploadToCloudinary(file);

      if (uploadedUrl) {
        setImages((prev) => ({
          ...prev,
          [type]: uploadedUrl,
        }));

        setBusDetail((prev) => {
          let updatedPhotos = [...(prev.busphotos || [])];

          if (type === "busFront") updatedPhotos[0] = uploadedUrl;
          else if (type === "busBack") updatedPhotos[1] = uploadedUrl;
          else if (type === "busInterior") updatedPhotos[2] = uploadedUrl;

          return { ...prev, busphotos: updatedPhotos };
        });
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
    if (!busDetail.busName.trim()) newErrors.busName = "Bus name is required";

    // Reg. Number
    if (!busDetail.busRegistrationNumber.trim())
      newErrors.busRegistrationNumber = "Register Number is required";

    // Bus Type
    if (!busDetail.busType.trim()) newErrors.busType = "Bus Type is required";

    // Bus Route
    // if (!busDetail.bus_route.trim())
    //   newErrors.bus_route = "Bus Route is required";

    // Bus Schedule
    // if (!busDetail.bus_schedule.trim())
    //   newErrors.bus_schedule = "Bus Schedule is required";

    // Seat
    if (!String(busDetail.totalSeats).trim()) {
      newErrors.totalSeats = "Total Seats should be defined";
    } else if (!/^\d{2}$/.test(String(busDetail.totalSeats))) {
      newErrors.totalSeats = "Total Seats must be 2 digits or less";
    }

    // Bus photo
    if (!images.busFront) newErrors.busFront = "Bus photo is required";
    if (!images.busBack) newErrors.busBack = "Bus photo is required";
    if (!images.busInterior)
      newErrors.busInterior = "Interior photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const finalBusData = {
          ...busDetail,
          busphotos: [images.busFront, images.busBack, images.busInterior],

          totalSeats: parseInt(busDetail?.totalSeats),
        };

        const response =
          actionType === "addBus"
            ? await dispatch(addBus(finalBusData))
            : await dispatch(
                updateBusDetail({
                  id: parseInt(finalBusData?.busId),
                  busData: finalBusData,
                })
              );

        if (response.meta.requestStatus === "fulfilled") {
          setBusDetail({
            busName: "",
            busRegistrationNumber: "",
            totalSeats: "",
            busType: "",
            busphotos: [],
            amenities: [],
            isActive: true,
          });
          setImages({
            busFront: null,
            busBack: null,
            busInterior: null,
          });
          toast.success("Process Sucessfull!");
        } else {
          toast.error("Failed to Add Bus");
        }
      } catch (error) {
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
    getBusDetailById(id);
  }, [id, actionType]);

  const getBusDetailById = async (id) => {
    try {
      if (id != null) {
        const response = await dispatch(getBusById(id));

        if (response.meta.requestStatus === "fulfilled") {
          const data = response.payload;

          setBusDetail({
            ...data,
            totalSeats: String(data.totalSeats || ""), // make sure it's a string
          });

          setImages({
            busFront: data?.busphotos?.[0] || null,
            busBack: data?.busphotos?.[1] || null,
            busInterior: data?.busphotos?.[2] || null,
          });

          if (Array.isArray(data.amenities)) {
            setSelected(data.amenities);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching bus details:", error);
    }
  };

  // fetching data of scheduleList and routeList
  useEffect(() => {
    getScheduleAndRouteList();
  }, []);

  const getScheduleAndRouteList = async () => {
    try {
      const response2 = await dispatch(getAllRoute());
      if (response2.meta.requestStatus === "fulfilled") {
        setRouteList(response2.payload);
      }
      const response3 = await dispatch(getAllTravelAgencySchedule());
      if (response3.meta.requestStatus === "fulfilled") {
        setScheduleList(response3.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              name="busName"
              value={busDetail.busName}
              onChange={handleBusDetailChange}
              placeholder="Enter Name of Bus"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.busName} />
          </div>

          {/* Reg Number */}
          <div className="flex flex-col w-full">
            <label>Register Number</label>
            <input
              type="text"
              name="busRegistrationNumber"
              value={busDetail.busRegistrationNumber}
              onChange={handleBusDetailChange}
              placeholder="Enter Register Number"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.busRegistrationNumber} />
          </div>
        </div>

        {/* part 2 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Total Seat Number */}
          <div className="flex flex-col w-full">
            <label>Total Seats</label>
            <input
              type="text"
              name="totalSeats"
              value={busDetail.totalSeats}
              onChange={handleBusDetailChange}
              placeholder="Enter Total Seats"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.totalSeats} />
          </div>

          {/* Bus Type */}
          <div className="flex flex-col w-full">
            <label>Bus Type</label>
            <select
              type="text"
              name="busType"
              value={busDetail.busType}
              onChange={handleBusDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value={""}>Select a Type</option>
              <option value={"AC"}>AC Bus</option>
              <option value={"DELUXE"}>Delux Bus</option>
              <option value={"SOFA_SEATER"}>Sofa Seater</option>
              <option value={"TOURIST"}>Tourist Bus</option>
              <option value={"SEMI_SLEEPER"}>Sleeper Bus</option>
            </select>
            <ErrorText message={errors.busType} />
          </div>
        </div>

        {/* part 3 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Bus Timing */}
          <div className="flex flex-col w-full">
            <label>Bus Schedule</label>
            <select
              type="text"
              name="busSchedules"
              value={busDetail?.busSchedules?.busScheduleId || ""}
              onChange={(e) =>
                setBusDetail((pre) => ({
                  ...pre,
                  busSchedules: e.target.value
                    ? { busScheduleId: parseInt(e.target.value) }
                    : null,
                }))
              }
              // onChange={handleBusDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value={"null"}>Select a Schedule</option>
              {scheduleList.map((data, index) => (
                <option key={index} value={data?.busScheduleId}>
                  {data?.departureTime}
                </option>
              ))}
            </select>
            {/* <ErrorText message={errors.bus_schedule} /> */}
          </div>

          {/* Assign Bus */}
          <div className="flex flex-col w-full">
            <label>Assign Route</label>
            <select
              name="routes"
              value={busDetail?.routes?.routeId || null}
              onChange={(e) =>
                setBusDetail((pre) => ({
                  ...pre,
                  routes: e.target.value
                    ? { routeId: parseInt(e.target.value) }
                    : null,
                }))
              }
              // onChange={handleBusDetailChange}
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-white text-gray-700 cursor-pointer"
            >
              <option value="null">Assign Route</option>
              {routeList.map((data, index) => (
                <option key={index} value={data?.routeId}>
                  {data?.routeName}
                </option>
              ))}
            </select>
            {/* <ErrorText message={errors.bus_route} /> */}
          </div>
        </div>

        {/* part 5 */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
          {/* Total Seat Number */}
          <div className="flex flex-col w-full">
            <label>Seat Price</label>
            <input
              type="number"
              name="seatPrice"
              value={busDetail.seatPrice}
              onChange={handleBusDetailChange}
              placeholder="Enter Total Seats"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.seatPrice} />
          </div>

          {/* price for sleeper */}

          {busDetail?.busType === "SEMI_SLEEPER" && (
            <div className="flex flex-col w-full">
              <label>Sleeper Price</label>
              <input
                type="number"
                name="sleeperPrice"
                value={busDetail.sleeperPrice}
                onChange={handleBusDetailChange}
                placeholder="Enter Total Seats"
                className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
              />
              <ErrorText message={errors.sleeperPrice} />
            </div>
          )}
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
                  images.busBack ? images.busBack : "/images/downloadImage.png"
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
                busName: "",
                busRegistrationNumber: "",
                totalSeats: "",
                busType: "",
                busphotos: [],
                amenities: [],
                isActive: "",
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
