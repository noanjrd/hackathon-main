import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import pin from './assets/Pin.png';
import pin_red from './assets/Pin_red.png';
import camera from './assets/Camera.png';
import incendie from './assets/incendie.png';
import './App.css';
import Webcam from './Webcam.jsx';

import crues from './assets/crues.png';
import ventsforts from './assets/ventsforts.png';
import seisme from './assets/seisme.png';
import neige from './assets/neige.png';
import tsunami from './assets/tsunami.png';

// Custom marker icons
const RedIcon = new L.Icon({
  iconUrl: pin_red,
  iconSize: [50, 50],
});
const BlackIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [50, 50],
});

// Fixed positions for each risk type
const incendiesPositions = [
  { position: [43.705, 7.25], description: "Incendie signalé ici.", icon: RedIcon },
  { position: [43.72, 7.23], description: "Autre incendie signalé ici.", icon: BlackIcon },
];
const cruesPositions = [{ position: [43.70, 7.23], description: "Crue signalée ici.", icon: BlackIcon }];
const ventsFortsPositions = [{ position: [43.695, 7.24], description: "Vents forts signalés ici.", icon: RedIcon }];
const seismePositions = [{ position: [43.70, 7.25], description: "Séisme signalé ici.", icon: BlackIcon }];
const neigePositions = [{ position: [43.68, 7.23], description: "Neige signalée ici.", icon: BlackIcon }];
const tsunamiPositions = [{ position: [43.697, 7.26], description: "Autre tsunami signalé ici.", icon: RedIcon }];

// SearchControl component for adding search functionality to the map
const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new L.Icon.Default(),
        draggable: false,
      },
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
};

function App() {
  const [showMarkers, setShowMarkers] = useState({
    incendies: false,
    crues: false,
    ventsForts: false,
    seisme: false,
    neige: false,
    tsunami: false,
  });

  const toggleMarkers = (riskType) => {
    setShowMarkers((prevState) => ({
      ...prevState,
      [riskType]: !prevState[riskType],
    }));
  };

  const [showWebcam, setShowWebcam] = useState(false);

  const toggleWebcam = () => {
    setShowWebcam(!showWebcam);
  };

  return (
    <>
      <div className="report-button-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          className="report-button"
          style={{
            width: '400px',
            height: '60px',
            display: 'flex',
            borderRadius: '500px',
            padding: '10px',
            paddingLeft: '70px',
            fontSize: '25px',
            marginTop: '100px',
          }}
          onClick={toggleWebcam}
        >
          <img
            src={camera}
            alt="Icône Risque"
            style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '-20px' }}
          />
          SIGNALER UN RISQUE
        </button>
      </div>
      {showWebcam && <Webcam />}

      <div className="map-container" style={{ marginBottom: '20px', height: '400px', width: '100%', borderRadius: '15px', overflow: 'hidden' }}>
        <MapContainer center={[43.7, 7.25]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <SearchControl /> {/* Add the search bar here */}

          {/* Display markers based on toggles */}
          {showMarkers.incendies &&
            incendiesPositions.map((incendie, index) => (
              <Marker key={`incendie-${index}`} position={incendie.position} icon={incendie.icon}>
                <Popup>{incendie.description}</Popup>
              </Marker>
            ))}
          {showMarkers.crues &&
            cruesPositions.map((crue, index) => (
              <Marker key={`crue-${index}`} position={crue.position} icon={crue.icon}>
                <Popup>{crue.description}</Popup>
              </Marker>
            ))}
          {showMarkers.ventsForts &&
            ventsFortsPositions.map((vent, index) => (
              <Marker key={`vent-${index}`} position={vent.position} icon={vent.icon}>
                <Popup>{vent.description}</Popup>
              </Marker>
            ))}
          {showMarkers.seisme &&
            seismePositions.map((seisme, index) => (
              <Marker key={`seisme-${index}`} position={seisme.position} icon={seisme.icon}>
                <Popup>{seisme.description}</Popup>
              </Marker>
            ))}
          {showMarkers.neige &&
            neigePositions.map((neige, index) => (
              <Marker key={`neige-${index}`} position={neige.position} icon={neige.icon}>
                <Popup>{neige.description}</Popup>
              </Marker>
            ))}
          {showMarkers.tsunami &&
            tsunamiPositions.map((tsunami, index) => (
              <Marker key={`tsunami-${index}`} position={tsunami.position} icon={tsunami.icon}>
                <Popup>{tsunami.description}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>




      <div className="risk-buttons-container" style={{ textAlign: 'center' }}>
        <button className="risk-button incendie" src={incendie} alt="Incendie" onClick={() => toggleMarkers('incendies')}>
        <div><img src={incendie} alt="Incendie" /></div>
        <text>INCENDIES</text>
        </button>
        <button className="risk-button crues" onClick={() => toggleMarkers('crues')}>
         <div><img src={crues} alt="Crues" /></div> 
        <text>CRUES</text>
        </button>
        <button className="risk-button vents-forts" onClick={() => toggleMarkers('ventsForts')}>
        <div><img src={ventsforts} alt="Vents" /></div>
        <text>VENTS FORTS</text>
        </button>
        <button className="risk-button seisme" onClick={() => toggleMarkers('seisme')}>
        <div><img src={seisme} className="seisme-icon" alt="Séisme" /></div>
        <text>SEISMES</text>
        </button>
        <button className="risk-button neige" onClick={() => toggleMarkers('neige')}>
        <div><img src={neige} alt="Neige" /></div>
        <text>NEIGE</text>
        </button>
        <button className="risk-button tsunami" onClick={() => toggleMarkers('tsunami')}>
        <div><img src={tsunami} alt="Tsunami" /></div>
        <text>TSUNAMI</text>
        </button>
      </div>
    </>
  );
}

export default App;