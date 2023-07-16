import React from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100vw",    // Covers full viewport width
    height: "100vh", 
    position: "relative", //
  };
  const { lat, long } = useParams();
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(long),
  };
  return (
    <div className="relative">
      <LoadScript googleMapsApiKey="AIzaSyAbDLor5DBBfrNKD0FmiRR8PU1zeSPoD6E">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <h1 className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            MAP
          </h1>
          {/* You can add your markers here */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
