import { useState, useEffect } from "react";

import Info from './Info';
import Map from './Map';


const Data = () => {

    const [clientsData, setClientsData] = useState([]);

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
        <div className="w-full h-[70vh] flex-wrap relative flex flex-col items-center">
            <Info infoData={clientsData} />
            <Map mapCentre={[latitude, longitude]} />
        </div>
    )
}

export default Data;