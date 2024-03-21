import React, { useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaulIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaulIcon


const GeoCoderMarker = ({ address }) => {
    
    const map = useMap()
    const [position, setPosition] = useState([60, 19])

    return (
        <Marker position={position} icon={DefaulIcon}>
            <Popup />
        </Marker>
    )
}

export default GeoCoderMarker;
