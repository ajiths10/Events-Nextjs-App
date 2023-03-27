import React, { useMemo } from "react";
import {
  GoogleMap,
  Marker,
  Polygon,
  useLoadScript,
} from "@react-google-maps/api";

const LocationBody = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 24.886, lng: -70.268 }), []);

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  return (
    <div className="h-96 w-10/12 bg-gray-300 rounded-lg overflow-hidden">
      {!isLoaded ? (
        <h1>Map Rendering...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={5}
        >
          {/* <Marker
            position={{ lat: 9.966264719076356, lng: 76.24227233899742 }}
          /> */}
          <Polygon paths={paths} options={options} />
        </GoogleMap>
      )}
    </div>
  );
};

export default LocationBody;
