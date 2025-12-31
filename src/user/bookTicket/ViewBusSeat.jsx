import React, { useEffect, useState } from "react";
import BusLayout from "./BusLayout";
import SleepBusLayout from "./SleepBusLayout";
import BusDetail from "./BusDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusDetailById } from "../../redux/userSlice/busSlice/BusThunks";
import {
  getBookingByDriverIdAndDate,
  getBookingsByBusIdAndDate,
} from "../../redux/userSlice/bookingSlice/BookingThunks";
import RouteMap from "../../admin/routes/RouteMap";
import axios from "axios";
const MAPTILER_KEY = "G0JzaoaaWpzTHgeOAjWx";
const OSRM_URL = "https://router.project-osrm.org/route/v1/driving";

function ViewBusSeat() {
  const dispatch = useDispatch();

  const [selectSeat, setSelectSeat] = useState([]);

  const [busDetail, setBusDetail] = useState({});

  const { busId, travelDate } = useParams();

  const [bookingList, setBookingList] = useState([]);

  const [routeGeoJSON, setRouteGeoJSON] = useState(null);

  useEffect(() => {
    getBusById();
    getAllBusBooking();
  }, [busId]);

  const getBusById = async () => {
    try {
      const response = await dispatch(
        getBusDetailById({ busId: busId, travelDate: travelDate })
      );
      console.log("bus detail:", response.payload);
      if (response.meta.requestStatus === "fulfilled") {
        setBusDetail(response.payload);
      } else {
        console.log("fail to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBusBooking = async () => {
    try {
      const response = await dispatch(
        getBookingsByBusIdAndDate({ busId: busId, tripDate: travelDate })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setBookingList(response.payload);
      } else {
        console.log("error to fetch booking detail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!busDetail?.routes) return;

    const { latitudeS, longitudeS, latitudeD, longitudeD } = busDetail?.routes;

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

          console.log("routeGeo:", routeGeo);

          setRouteGeoJSON(routeGeo);
        } catch (err) {
          console.error("OSRM route fetch error:", err);
        }
      };
      fetchRoute();
    }
  }, [busDetail]);

  return (
    <div className="py-[80px] px-[60px] flex flex-col gap-[2rem]">
      <div
        className={`  grid ${
          busDetail?.busType === "busType"
            ? "grid-cols-[38%_63%]"
            : "grid-cols-2"
        }  gap-[32px]`}
      >
        {/* bus detail */}
        <BusDetail
          seatName={selectSeat}
          busDetailData={busDetail}
          travelDate={travelDate}
        />
        {/* bus layout */}
        <div className={`flex gap-[28px] justify-center  h-fit`}>
          <BusLayout
            seatName={selectSeat}
            setSeat={setSelectSeat}
            bookingList={bookingList}
            user={"user"}
          />
          {busDetail?.busType === "SEMI_SLEEPER" && (
            <SleepBusLayout
              seatName={selectSeat}
              setSeat={setSelectSeat}
              bookingList={bookingList}
              user={"user"}
            />
          )}
        </div>
      </div>
      <RouteMap
        latitudeS={busDetail?.routes?.latitudeS}
        longitudeS={busDetail?.routes?.longitudeS}
        latitudeD={busDetail?.routes?.latitudeD}
        longitudeD={busDetail?.routes?.longitudeD}
        routeGeoJSON={routeGeoJSON}
      />
    </div>
  );
}

export default ViewBusSeat;
