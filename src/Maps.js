import React from 'react'
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: '700px',
  };
  const { lat, long } = useParams();
  const center = {
    lat: 	parseFloat(lat),
    lng: 	parseFloat(long),
  };
  return (
    <div>
    <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center mt-[30px] mb-[50px]'>MAP</h1>
      <LoadScript googleMapsApiKey="AIzaSyAbDLor5DBBfrNKD0FmiRR8PU1zeSPoD6E">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* You can add your markers here */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Maps