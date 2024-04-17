import React, { useRef, useEffect, useState } from 'react';
import './Main.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Stomp from 'stompjs'
import SockJS from 'sockjs-client/dist/sockjs';
import { List, ListItem, ListItemText } from '@mui/material';
function Main() {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("Hello " + Date.now())
    const [username, setUsername] = useState("KHOA")
    const [stompClient, setStompClient] = useState(null)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        const socket = new SockJS("http://localhost:8080/ws", null, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2dWFuaGtob2EwMDciLCJpYXQiOjE3MTI5MDEzMzgsImV4cCI6MTcxMjkwMTQwOCwidXNlci1kZXRhaWxzIjp7InVzZXJuYW1lIjoidnVhbmhraG9hMDA3Iiwicm9sZXMiOlsiVVNFUiJdfX0.VXke0c3EKISdKVUhm9a2FZvMVs4wGWXxD-c4a3N20-MNMeUtSUA_QvdZ3OcxGHSAfT4jFbYhIt4YYNWmKnhZsg'
            }
        })
        const client = Stomp.over(socket)

        client.connect([], () => {
            client.subscribe("/topic/messages", (message) => {
                const receivedMessage = JSON.parse(message.body)
                setMessages((prevMessages) => [...prevMessages, receivedMessage])
            })

            client.subscribe("/topic/messages/all", (message) => {
                console.log("Chat all channel")
            })
        })

        setStompClient(client);
        return () => {
            client.disconnect
        }
    }, []);

    const sendMessage = () => {
        if (message.length > 0) {
            const clientMessage = {
                username,
                action: message
            };
            stompClient.send("/app/chat", {}, JSON.stringify(clientMessage))
            setMessage("Hello " + Date.now())
        }
    }

    return (
        <>
            <Box height="0.8">
                <div ref={mapContainer} className="map-container" />
            </Box>
            <Box height="0.1">
                <List>
                    {
                        messages.map((msg, ind) => (
                            <ListItem key={ind}>
                                <ListItemText primary={msg.action} />
                            </ListItem>
                        ))}
                </List>
                <Button onClick={sendMessage}>Send Message</Button>
            </Box>
        </>
    )
}

export default Main;