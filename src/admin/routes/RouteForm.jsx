import React, { useState, useEffect } from "react";
import { MdErrorOutline } from "react-icons/md";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RouteMap from "./RouteMap";

const MAPTILER_KEY = "G0JzaoaaWpzTHgeOAjWx";
const OSRM_URL = "https://router.project-osrm.org/route/v1/driving";

function RouteForm() {
  const navigate = useNavigate();

  const [routeDetail, setRouteDetail] = useState({
    routeName: "",
    sourceCity: "",
    destinationCity: "",
    distance: "",
    duration: "",
    price: "",
    latitudeS: "",
    longitudeS: "",
    latitudeD: "",
    longitudeD: "",
  });

  const [suggestions, setSuggestions] = useState({
    source: [],
    destination: [],
  });
  const [errors, setErrors] = useState({});
  const [routeGeoJSON, setRouteGeoJSON] = useState(null);

  // Handle input changes and fetch suggestions
  const handleRouteDetailChange = (e) => {
    const { name, value } = e.target;
    setRouteDetail((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "sourceCity") fetchSuggestions("source", value);
    if (name === "destinationCity") fetchSuggestions("destination", value);
  };

  // Fetch geocoding suggestions
  const fetchSuggestions = async (type, query) => {
    if (!query) {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
      return;
    }
    try {
      const res = await axios.get(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(
          query
        )}.json?key=${MAPTILER_KEY}`
      );
      setSuggestions((prev) => ({ ...prev, [type]: res.data.features || [] }));
    } catch (err) {
      console.error("Geocoding error:", err);
    }
  };

  // When user selects a suggestion
  const handleSelectLocation = (type, place) => {
    const [longitude, latitude] = place.center;
    setRouteDetail((prev) => ({
      ...prev,
      [type === "source" ? "sourceCity" : "destinationCity"]: place.place_name,
      [type === "source" ? "latitudeS" : "latitudeD"]: latitude,
      [type === "source" ? "longitudeS" : "longitudeD"]: longitude,
    }));
    setSuggestions((prev) => ({ ...prev, [type]: [] }));
  };

  // Fetch and draw route
  useEffect(() => {
    const { latitudeS, longitudeS, latitudeD, longitudeD } = routeDetail;

    if (latitudeS && longitudeS && latitudeD && longitudeD) {
      const fetchRoute = async () => {
        try {
          const res = await axios.get(
            `${OSRM_URL}/${longitudeS},${latitudeS};${longitudeD},${latitudeD}?overview=full&geometries=geojson`
          );

          const data = res.data.routes[0];
          const routeGeo = {
            type: "Feature",
            geometry: data.geometry,
          };

          setRouteGeoJSON(routeGeo);
          setRouteDetail((prev) => ({
            ...prev,
            distance: (data.distance / 1000).toFixed(2) + " km",
            duration: (data.duration / 60).toFixed(2) + " min",
          }));
        } catch (err) {
          console.error("OSRM route fetch error:", err);
        }
      };
      fetchRoute();
    }
  }, [
    routeDetail.latitudeS,
    routeDetail.longitudeS,
    routeDetail.latitudeD,
    routeDetail.longitudeD,
  ]);

  // Error text component
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

  //  Validation
  const validateForm = () => {
    const newErrors = {};

    if (!routeDetail.routeName.trim())
      newErrors.routeName = "Route name is required";

    if (!routeDetail.price.trim()) {
      newErrors.price = "Ticket price is required";
    } else if (isNaN(routeDetail.price)) {
      newErrors.price = "Price must be a valid number";
    } else if (parseFloat(routeDetail.price) <= 0) {
      newErrors.price = "Price must be greater than zero";
    }

    if (!routeDetail.sourceCity.trim())
      newErrors.sourceCity = "Source city is required";

    if (!routeDetail.destinationCity.trim())
      newErrors.destinationCity = "Destination city is required";

    if (
      routeDetail.sourceCity.trim() &&
      routeDetail.destinationCity.trim() &&
      routeDetail.sourceCity === routeDetail.destinationCity
    ) {
      newErrors.destinationCity = "Source and destination cannot be the same";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("✅ Form submitted successfully:", routeDetail);
    } else {
      console.log("❌ Validation failed");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[24px]">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px] font-semibold">
          Add Route
        </h2>
      </div>

      <form className="flex flex-col gap-[20px]" onSubmit={handleFormSubmit}>
        {/* Route Name & Price */}
        <div className="flex gap-[20px] w-full">
          <div className="flex flex-col w-full">
            <label>Route Name</label>
            <input
              type="text"
              name="routeName"
              value={routeDetail.routeName}
              onChange={handleRouteDetailChange}
              placeholder="Enter Route Name"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.routeName} />
          </div>

          <div className="flex flex-col w-full">
            <label>Ticket Price</label>
            <input
              type="text"
              name="price"
              value={routeDetail.price}
              onChange={handleRouteDetailChange}
              placeholder="Enter Ticket Price"
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            <ErrorText message={errors.price} />
          </div>
        </div>

        {/* Source & Destination */}
        <div className="flex gap-[20px] w-full">
          <div className="mb-[16px] relative w-full">
            <label>Source City</label>
            <input
              type="text"
              name="sourceCity"
              value={routeDetail.sourceCity}
              onChange={handleRouteDetailChange}
              placeholder="Enter source location"
              className="border-[2px] w-full border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {suggestions.source.length > 0 && (
              <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-10 max-h-[150px] overflow-y-auto">
                {suggestions.source.map((place) => (
                  <li
                    key={place.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectLocation("source", place)}
                  >
                    {place.place_name}
                  </li>
                ))}
              </ul>
            )}
            <ErrorText message={errors.sourceCity} />
          </div>

          <div className="mb-[16px] relative w-full">
            <label>Destination City</label>
            <input
              type="text"
              name="destinationCity"
              value={routeDetail.destinationCity}
              onChange={handleRouteDetailChange}
              placeholder="Enter destination location"
              className="border-[2px] w-full border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px]"
            />
            {suggestions.destination.length > 0 && (
              <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-10 max-h-[150px] overflow-y-auto">
                {suggestions.destination.map((place) => (
                  <li
                    key={place.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectLocation("destination", place)}
                  >
                    {place.place_name}
                  </li>
                ))}
              </ul>
            )}
            <ErrorText message={errors.destinationCity} />
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-col gap-[20px] w-full">
          <label>Route Map</label>
          <RouteMap
            latitudeS={routeDetail.latitudeS}
            longitudeS={routeDetail.longitudeS}
            latitudeD={routeDetail.latitudeD}
            longitudeD={routeDetail.longitudeD}
            routeGeoJSON={routeGeoJSON}
          />
        </div>

        {/* Distance & Duration */}
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Distance</label>
            <input
              type="text"
              name="distance"
              value={routeDetail.distance}
              readOnly
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-gray-100"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={routeDetail.duration}
              readOnly
              className="border-[2px] border-black/50 outline-none mt-[8px] rounded-[10px] px-[16px] py-[8px] bg-gray-100"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-[1rem] flex-end w-full">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
          >
            Add Route
          </button>
        </div>
      </form>
    </>
  );
}

export default RouteForm;
