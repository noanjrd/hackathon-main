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

  // Fonction pour supprimer une photo
  const deletePhoto = (index) => {
    const newImages = images.filter((_, i) => i !== index); // Filtrer l'image à supprimer
    setImages(newImages); // Mettre à jour le tableau d'images
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
        style={{
          borderRadius: '10px',
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
            <img src={image} alt={`Captured ${index + 1}`} style={{ maxWidth: '100%', borderRadius: '10px' }} />
            <button onClick={() => deletePhoto(index)} style={{ marginLeft: '10px', color: 'red' }}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebcamCapture;