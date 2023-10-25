import { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import iconLocation from "/icon-location.svg"; 
export default function MapApiContainer({ lat, lng }) {
  const [mapCenter, setMapCenter] = useState([lat, lng]);

  useEffect(() => {
    setMapCenter([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="MapApiContainer">
      <Map center={mapCenter} defaultZoom={11}>
        <Marker anchor={mapCenter}>
          <img
            src={iconLocation}
            width={50}
            alt="Location Marker"
          />
        </Marker>
      </Map>
    </div>
  );
}
