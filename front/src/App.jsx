import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import L from 'leaflet';
import './App.css'; // Assurez-vous que le fichier CSS est bien configuré

// Icones personnalisées pour les marqueurs
const fireIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/482/482010.png',
  iconSize: [25, 25],
});

function App() {
  return (
    <>
      <div className="report-button-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <button className="report-button" style={{ width: '400px', height: '60px', borderRadius: '500px', padding: '10px', fontSize: '25px' }}>SIGNALER UN RISQUE</button>
      </div>

      <div className="map-container" style={{ marginBottom: '20px', height: '400px', width: '100%',  borderRadius: '15px',  overflow: 'hidden' }}>
        <MapContainer center={[43.7, 7.25]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[43.7, 7.25]} icon={fireIcon}>
            <Popup>Nice - Marqueur de risque.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="risk-buttons-container" style={{ textAlign: 'center' }}>
        <button className="risk-button incendie">INCENDIES</button>
        <button className="risk-button crues">CRUES</button>
        <button className="risk-button vents-forts">VENTS FORTS</button>
        <button className="risk-button seisme">SEISME</button>
        <button className="risk-button neige">NEIGE</button>
        <button className="risk-button tsunami">TSUNAMI</button>
      </div>
    </>
  );
}

export default App;
