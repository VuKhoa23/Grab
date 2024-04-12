import React, { useRef, useEffect, useState } from 'react';
import './Main.css'
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
function Main() {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <Box height="0.9">
                <div ref={mapContainer} className="map-container" />
            </Box>
        </>
    )
}

export default Main;