import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Clinic } from '../types';

// Icon configuration for Leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 42],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Props interface for the MapSupport component
interface MapComponentProps {
  clinicData: Clinic[];
}

// MapSupport component
const MapSupport: React.FC<MapComponentProps> = ({ clinicData }) => {
  return (
    <MapContainer center={[51.1657, 10.4515]} zoom={6} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {clinicData.map((clinic, index) => (
        <Marker key={index} position={clinic.position} icon={icon}>
          <Popup>
            <strong className='clinic-name clinic-info'>{clinic.name}</strong><br />
            <strong className='clinic-info'>Opening hours:</strong><br /> {clinic.hours} <br />
            <strong className='clinic-info'>Address:</strong><br /> {clinic.address} <br />
            <strong className='clinic-info'>Website:</strong> <a href={clinic.url}>Go to website</a><br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapSupport;
