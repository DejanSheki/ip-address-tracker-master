import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent(props) {
  const map = useMap();
  console.log("map center:", map.getCenter());
  map.panTo(props.mapCentre);
  return null;
}

const Map = (props) => {
  const latitude = 51.505;
  const longitude = -0.09;

  return (
    <div className="w-[1440px] h-[75vh] flex flex-wrap relative z-0">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <MapComponent mapCentre={props.mapCentre} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
