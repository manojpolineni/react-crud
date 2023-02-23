import React from "react";
import useGeolocation from "react-hook-geolocation";

const Location = () => {
    
    const ComponentWithGeolocation = () => {
    const geolocation = useGeolocation();
        
    return !geolocation.error ? (
        <ul>
            <li>Latitude: {geolocation.latitude}</li>
            <li>Longitude: {geolocation.longitude}</li>
            <li>Location accuracy: {geolocation.accuracy}</li>
            <li>Altitude: {geolocation.altitude}</li>
            <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
            <li>Heading: {geolocation.heading}</li>
            <li>Speed: {geolocation.speed}</li>
            <li>Timestamp: {geolocation.timestamp}</li>
        </ul>
        ) : (<p>No geolocation, sorry.</p>);
    };

    console.log("location", ComponentWithGeolocation);

    return (
        <div>
            <ComponentWithGeolocation/>
        </div>
    )
} 
export default Location;