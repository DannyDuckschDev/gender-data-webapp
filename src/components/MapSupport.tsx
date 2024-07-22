import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Clinic } from '../types';

// Icon configuration for Leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 42], // Anchor point of the icon
  popupAnchor: [1, -34], // Anchor point of the popup relative to the icon
  shadowSize: [41, 41], // Size of the shadow
});

// Props interface for the MapSupport component
interface MapComponentProps {
  clinicData: Clinic[];
}

// MapSupport component
const MapSupport: React.FC<MapComponentProps> = ({ clinicData }) => {
  return (
    // Map container centered on Germany with a specific zoom level
    <MapContainer center={[51.1657, 10.4515]} zoom={5.7} style={{ height: '610px', width: '80%' }}>
      {/* Tile layer using OpenStreetMap tiles */}
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Map through clinicData to create markers */}
      {clinicData.map((clinic, index) => (
        <Marker key={index} position={clinic.position} icon={icon}>
          <Popup>
            <strong className='clinic-info' id='clinic-name'>{clinic.name}</strong><hr />
            <div className='clinic-info-row'>
              <strong className='clinic-info'>Opening hours:</strong>
              <p>{clinic.hours}</p>
            </div>
            <div className='clinic-info-row'>
              <strong className='clinic-info'>Address:</strong>
              <p>{clinic.address}</p>
            </div>
            <div className='clinic-info-row'>
              <strong className='clinic-info'>Website:</strong>
              <a href={clinic.url}>Go to website</a>
            </div>            
            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapSupport;
