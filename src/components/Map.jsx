import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

  return (
    <div className="w-[1440px] h-[75vh] flex flex-wrap relative z-0">
      <MapContainer
        center={[latitude, longitude]}
        ref={mapRef}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
