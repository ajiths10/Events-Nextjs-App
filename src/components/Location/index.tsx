import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const LocationBody = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="h-96 w-10/12 bg-gray-300 rounded-lg overflow-hidden">
      {!isLoaded ? (
        <h1>Map Rendering...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default LocationBody;
