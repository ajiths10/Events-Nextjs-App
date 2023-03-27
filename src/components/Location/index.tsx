import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const LocationBody = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });
  const center = useMemo(
    () => ({ lat: 9.966264719076356, lng: 76.24227233899742 }),
    []
  );

  return (
    <div className="h-96 w-10/12 bg-gray-300 rounded-lg overflow-hidden">
      {!isLoaded ? (
        <h1>Map Rendering...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={15}
        >
          <Marker
            position={{ lat: 9.966264719076356, lng: 76.24227233899742 }}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default LocationBody;
