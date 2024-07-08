import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import clinics from '../data/clinicForVictims.json';
import '../styles/support.css';

// Icon configuration for Leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 42],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Clinic {
  position: [number, number];
  name: string;
  address: string;
  url: string;
  hours: string;
}

// Type assertion for clinics data
const clinicData: Clinic[] = clinics.map(clinic => ({
  ...clinic,
  position: clinic.position as [number, number] // Ensure position is treated as LatLngTuple
}));


const Support: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setIsExpanded(prevState => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <div className="support-page">
      <div className="disclaimer-banner">
        <p>
          I'd love to be as inclusive as possible. This project has just started. Please feel free to share your knowledge on organizations, NGOs, Apps, Software, etc. you’d think would fit in here. <br />
          Right now the offers I share here are unfortunately available in German. The outpatient clinic for victims DEFINITELY takes care of you if you can't speak German, but the websites are in German.
        </p>
        <button>To the contact form</button>
      </div>
      <div className="support-cards">
        <div className={`support-card ${isExpanded['dickpics'] ? 'expanded' : ''}`}>
          <div className="card-header" onClick={() => toggleExpand('dickpics')}>
            <span className="icon">⚖️</span>
            <span>Easy Criminal Charge against Dickpics</span>
            <button className="toggle-button">{isExpanded['dickpics'] ? '▲' : '▼'}</button>
          </div>
          {isExpanded['dickpics'] && (
            <div className="card-content">
              <p>The website helps you to easily and quickly file a report against unsolicited sexual pictures.</p>
              <button onClick={() => window.open('https://dickstinction.com/', '_blank')}>Go to Website</button>
            </div>
          )}
        </div>
        <div className={`support-card ${isExpanded['noa'] ? 'expanded' : ''}`}>
          <div className="card-header" onClick={() => toggleExpand('noa')}>
            <span className="icon">📞</span>
            <span>NoA - Nummer ohne Anruf</span>
            <button className="toggle-button">{isExpanded['noa'] ? '▲' : '▼'}</button>
          </div>
          {isExpanded['noa'] && (
            <div className="card-content">
              <p>In case someone asks for your name, your number or your Instagram account, but you want to remain anonymous, introduce yourself as "Noa" and pass on the number 0157 5302 4990 or the Instagram account @_call_me_noa_. The other person will automatically receive a message explaining that you were not feeling well.</p>
              <button onClick={() => window.open('https://noanruf.de/', '_blank')}>Go to Website</button>
            </div>
          )}
        </div>
      </div>
      <div className="support-card map-card">
        <div className="map-card-content">
          <span>Find the nearest Outpatient Clinic for Victims</span>
          <p>Victim and trauma outpatient clinics (OTA) are contact points in Germany, Austria and Switzerland for the acute care of victims of traumatizing events, especially victims of violent and sexual crimes.</p>
          <MapContainer center={[51.1657, 10.4515]} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {clinicData.map((clinic: Clinic, index: number) => (
              <Marker key={index} position={clinic.position} icon={icon}>
                <Popup>
                  <strong>{clinic.name}</strong><br />
                  Opening hours: {clinic.hours} <br />
                  Address: {clinic.address} <br />
                  Website: <a href={clinic.url}>Go to website</a><br />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Support;
