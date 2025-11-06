import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRouteById } from "../../redux/agencySlice/routeSlice/RouteThunks";
import { useNavigate, useParams } from "react-router-dom";
import RouteMap from "./RouteMap";
import axios from "axios";
const MAPTILER_KEY = "G0JzaoaaWpzTHgeOAjWx";
const OSRM_URL = "https://router.project-osrm.org/route/v1/driving";
function RouteFullDetail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const [routeData, setRouteData] = useState({});

  const [routeGeoJSON, setRouteGeoJSON] = useState(null);

  useEffect(() => {
    const { latitudeS, longitudeS, latitudeD, longitudeD } = routeData;

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
        } catch (err) {
          console.error("OSRM route fetch error:", err);
        }
      };
      fetchRoute();
    }
  }, [
    routeData.latitudeS,
    routeData.longitudeS,
    routeData.latitudeD,
    routeData.longitudeD,
  ]);

  useEffect(() => {
    getRouteByID();
  }, []);

  const getRouteByID = async () => {
    try {
      const response = await dispatch(getRouteById(id));
      console.log(response.payload);
      if (response.meta.requestStatus === "fulfilled") {
        setRouteData(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">Routes</h2>
      <div className="mt-[32px]">
        {/* part 1 */}
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-full">
            <label>Route Name</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {routeData?.routeName}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Ticket Price</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              Rs{routeData?.price}
            </div>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex  flex-col w-full">
            <label>Source </label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {routeData?.sourceCity}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Destination</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {routeData?.destinationCity}
            </div>
          </div>
        </div>
        {/* part 3 */}
        <div className="flex mt-[24px] gap-[20px]">
          <div className="flex  flex-col w-full">
            <label>Distance</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {routeData?.distance} Km
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Duration</label>
            <div className="rounded-[10px] shadow-xl px-[16px] py-[16px]  mt-[8px] opacity-50 flex items-center">
              {routeData?.duration} min
            </div>
          </div>
        </div>
        {/* part 4 */}
        <div className="mt-[24px] ">
          <RouteMap
            latitudeS={routeData?.latitudeS}
            longitudeS={routeData?.longitudeS}
            latitudeD={routeData?.latitudeD}
            longitudeD={routeData?.longitudeD}
            routeGeoJSON={routeGeoJSON}
          />
        </div>
        {/* part 5 */}
        <div className="mt-auto ml-auto">
          <div className="flex gap-[16px] mt-[16px] h-fit">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="ml-auto px-[24px] py-[12px] rounded-[10px] bg-[#EBEBEB]"
            >
              Cancal
            </button>
            <button
              onClick={() => navigate(`/routes/routeForm/updateRoute/${id}`)}
              className="px-[24px] py-[12px] rounded-[10px] bg-[#078DD7] text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RouteFullDetail;
