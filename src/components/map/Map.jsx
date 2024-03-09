import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import { useEffect, useState, useContext, useRef } from 'react';
import { DataContext } from "../../App.js";


function Map() {
    
    // const citiesData = useContext(DataContext);
    const [ custdata, setCustdata ] = useContext(DataContext);
    const [clickLocation, setClickLocation] = useState(null);
    const [params, setParams] = useSearchParams();
    const lat = params.get("lat");
    const lng = params.get("lng");

    const mapRef = useRef(null);

    useEffect(() => {
        if (lat != null && lng != null) {
            const newPosition = [parseFloat(lat), parseFloat(lng)];
            setPosition(newPosition);
            if (mapRef.current) {
                mapRef.current.flyTo(newPosition, 13);
            }
        }
    }, [lat, lng]);

    const [position, setPosition] = useState([38.727881642324164, -9.140900099907554]);
    const navigate = useNavigate();

    const handleMapClick = (e) => {
        console.log("Map clicked!");
        console.log(e.latlng);
        setClickLocation(e.latlng);
        const { lat,lng } = e.latlng;
        setParams({lat:lat,lng : lng});
        //navigate(`/form?lat=${lat}&lng=${lng}`);
        navigate("form",{ state: { lat: lat, lng: lng } });
    };

    return (
        <div className={styles.mapContainer}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={styles.Map} style={{ height: '100vh' }} ref={mapRef}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {
                    custdata.map((city) => (
                        <Marker position={[parseFloat(city.position.lat), parseFloat(city.position.lng)]} key={city.id}>
                            <Popup>
                                {city.notes}
                            </Popup>
                        </Marker>
                    ))
                }
                <ClickHandler onMapClick={handleMapClick} />
                {clickLocation && (
                    <Marker position={clickLocation}>
                        <Popup>You clicked here</Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

const ClickHandler = ({ onMapClick }) => {
    const map = useMapEvents({
      click: (e) => {
        onMapClick(e);
      },
    })
};

export default Map;
