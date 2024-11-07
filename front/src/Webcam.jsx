// Webcam.jsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]); // Stocker plusieurs images

  // Fonction pour capturer une photo
  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      setImages([...images, screenshot]); // Ajouter la photo au tableau d'images
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />
      <button onClick={capturePhoto} style={{ marginTop: '10px' }}>
        Prendre une photo
      </button>

      {/* Afficher les images capturées */}
      <div style={{ marginTop: '20px' }}>
        {images.length > 0 && <h3>Photos capturées :</h3>}
        {images.map((image, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <img src={image} alt={`Captured ${index + 1}`} style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebcamCapture;
