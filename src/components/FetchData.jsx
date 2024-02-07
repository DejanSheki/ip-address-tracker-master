import { useState, useEffect } from "react";

import Info from './Info';
import Map from './Map';

import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Data = () => {

    const [clientsData, setClientsData] = useState([]);

    const mapRef = useRef(null);
    // const latitude = 51.505;
    // const longitude = -0.09;

    const [latitude, setLatitude] = useState(51.505);
    const [longitude, setLongitude] = useState(-0.09)

    useEffect(() => {
        fetch(`https://ipapi.co/json/`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setClientsData(data);
                setLatitude(data.latitude);
                setLongitude(data.longitude);
            });
    }, []);

    return (
        <div className="w-[1440px] h-[75vh] flex-wrap relative flex flex-col">
            <Info infoData={clientsData} />
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
        </div>
    )
}

export default Data;