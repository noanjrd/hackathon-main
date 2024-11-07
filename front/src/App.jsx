import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import pin from './assets/Pin.png';
import pin_red from './assets/Pin_red.png';
import camera from './assets/Camera.png';
import incendie from './assets/incendie.png';
import L from 'leaflet';
import './App.css'; // Assurez-vous que le fichier CSS est bien configuré
import Webcam from './Webcam.jsx';  

// Icones personnalisées pour les marqueurs
const RedIcon = new L.Icon({
  iconUrl: pin_red,
  iconSize: [50, 50],
});
const BlackIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [50, 50],
});

// Définir des listes fixes de positions pour chaque type de risque
const incendiesPositions = [
  { position: [43.705, 7.25], description: "Incendie signalé ici.", icon: RedIcon },
  { position: [43.72, 7.23], description: "Autre incendie signalé ici.", icon: BlackIcon },
  { position: [43.70, 7.27], description: "Incendie supplémentaire signalé ici.", icon: BlackIcon },
];

const cruesPositions = [
  { position: [43.70, 7.23], description: "Crue signalée ici.", icon: BlackIcon },
  { position: [43.71, 7.26], description: "Autre crue signalée ici.", icon: RedIcon },
];

const ventsFortsPositions = [
  { position: [43.695, 7.24], description: "Vents forts signalés ici.", icon: RedIcon },
  { position: [43.72, 7.27], description: "Autre zone de vents forts signalée ici.", icon: BlackIcon },
];

const seismePositions = [
  { position: [43.70, 7.25], description: "Séisme signalé ici.", icon: BlackIcon },
  { position: [43.71, 7.26], description: "Autre séisme signalé ici.", icon: RedIcon },
];

const neigePositions = [
  { position: [43.68, 7.23], description: "Neige signalée ici.", icon: BlackIcon },
  { position: [43.70, 7.26], description: "Autre zone de neige signalée ici.", icon: BlackIcon },
];

const tsunamiPositions = [
  { position: [43.697, 7.26], description: "Autre tsunami signalé ici.", icon: RedIcon },
];


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
      [riskType]: !prevState[riskType], // Alterner entre afficher/cacher
    }));
  };

  const [showWebcam, setShowWebcam] = useState(false);  // Etat pour afficher/masquer la webcam

  // Fonction pour basculer l'affichage de la webcam
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
  }}
  onClick={toggleWebcam} // Déplace l'événement ici pour rendre tout le bouton cliquable
>
  <img
    src={camera} // Lien vers ton icône/photo
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
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marqueurs pour Incendies */}
          {showMarkers.incendies &&
            incendiesPositions.map((incendie, index) => (
              <Marker key={`incendie-${index}`} position={incendie.position} icon={incendie.icon}>
                <Popup>{incendie.description}</Popup>
              </Marker>
            ))}

          {/* Marqueurs pour Crues */}
          {showMarkers.crues &&
            cruesPositions.map((crue, index) => (
              <Marker key={`crue-${index}`} position={crue.position} icon={crue.icon}>
                <Popup>{crue.description}</Popup>
              </Marker>
            ))}

          {/* Marqueurs pour Vents Forts */}
          {showMarkers.ventsForts &&
            ventsFortsPositions.map((vent, index) => (
              <Marker key={`ventsForts-${index}`} position={vent.position} icon={vent.icon}>
                <Popup>{vent.description}</Popup>
              </Marker>
            ))}

          {/* Marqueurs pour Séisme */}
          {showMarkers.seisme &&
            seismePositions.map((seisme, index) => (
              <Marker key={`seisme-${index}`} position={seisme.position} icon={seisme.icon}>
                <Popup>{seisme.description}</Popup>
              </Marker>
            ))}

          {/* Marqueurs pour Neige */}
          {showMarkers.neige &&
            neigePositions.map((neige, index) => (
              <Marker key={`neige-${index}`} position={neige.position} icon={neige.icon}>
                <Popup>{neige.description}</Popup>
              </Marker>
            ))}

          {/* Marqueurs pour Tsunami */}
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
          INCENDIES
        </button>
        <button className="risk-button crues" onClick={() => toggleMarkers('crues')}>
          CRUES
        </button>
        <button className="risk-button vents-forts" onClick={() => toggleMarkers('ventsForts')}>
          VENTS FORTS
        </button>
        <button className="risk-button seisme" onClick={() => toggleMarkers('seisme')}>
          SEISME
        </button>
        <button className="risk-button neige" onClick={() => toggleMarkers('neige')}>
          NEIGE
        </button>
        <button className="risk-button tsunami" onClick={() => toggleMarkers('tsunami')}>
          TSUNAMI
        </button>
      </div>
    </>
  );
}

export default App;
