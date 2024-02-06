import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const Data = () => {

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []);

}

export default Data;