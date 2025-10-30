import React from "react";
import { Map, Marker, Source, Layer } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MAPTILER_KEY = "G0JzaoaaWpzTHgeOAjWx";
function RouteMap({
  latitudeS,
  longitudeS,
  latitudeD,
  longitudeD,
  routeGeoJSON,
}) {
  return (
    <Map
      initialViewState={{
        longitude: longitudeS || 85.324,
        latitude: latitudeS || 27.7172,
        zoom: 9,
      }}
      style={{ width: "100%", height: "400px", borderRadius: "12px" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`}
    >
      {latitudeS && longitudeS && (
        <Marker longitude={longitudeS} latitude={latitudeS} color="green" />
      )}
      {latitudeD && longitudeD && (
        <Marker longitude={longitudeD} latitude={latitudeD} color="red" />
      )}
      {routeGeoJSON && (
        <Source id="route" type="geojson" data={routeGeoJSON}>
          <Layer
            id="routeLine"
            type="line"
            paint={{
              "line-color": "#0074D9",
              "line-width": 4,
            }}
          />
        </Source>
      )}
    </Map>
  );
}

export default RouteMap;
