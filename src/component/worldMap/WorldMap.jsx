import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './WorldMap.scss';

const WorldMap = () => {
  return (
    <div className='WorldMap'>
      <MapContainer
        center={[41.5, 75.5]}
        zoom={7}              
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap катышуучулары'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Бишкек */}
        <Marker position={[42.8746, 74.6122]}>
          <Popup>Бишкек</Popup>
        </Marker>

        {/* Ош */}
        <Marker position={[40.5283, 72.7985]}>
          <Popup>Ош</Popup>
        </Marker>

        {/* Нарын */}
        <Marker position={[41.4287, 75.9910]}>
          <Popup>Нарын</Popup>
        </Marker>

        {/* Каракол */}
        <Marker position={[42.4907, 78.3936]}>
          <Popup>Каракол</Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default WorldMap;