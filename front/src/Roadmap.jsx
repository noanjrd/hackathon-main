import React from 'react';
import { MapPin } from 'lucide-react';

const RoadmapItem = ({ title, description, status, date, index }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-amber-100 border-amber-600';
      case 'in-progress':
        return 'bg-orange-50 border-orange-500';
      case 'planned':
        return 'bg-stone-50 border-stone-400';
      default:
        return '';
    }
  };

  return (
    <div className="relative mb-12">
      {index !== 0 && (
        <div className="absolute -top-8 left-4 h-8 border-l-2 border-dashed border-amber-600" />
      )}
      
      <div className="absolute -left-1 -top-2">
        <MapPin className="h-10 w-10 text-red-600" />
      </div>

      <div className={`ml-8 p-4 rounded-lg ${getStatusColor()} 
                      border-2 border-dashed transform transition-all duration-300
                      shadow-md hover:shadow-lg`}>
        <div className="inline-block px-3 py-1 mb-2 bg-amber-900 text-amber-100 
                      rounded-lg text-sm transform -rotate-2">
          {date}
        </div>

        <h3 className="text-lg font-bold mb-2 font-serif text-black">{title}</h3>
        <p className="text-stone-700 text-sm">{description}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${
            status === 'completed' ? 'bg-green-500' :
            status === 'in-progress' ? 'bg-amber-500' : 'bg-stone-400'
          }`} />
          <span className="text-xs text-stone-600">
            {status === 'completed' ? 'Découvert' :
             status === 'in-progress' ? 'En exploration' : 'À découvrir'}
          </span>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "La Première Découverte 🗺️",
      description: "Developpement de la version web avec la carte de la région",
      status: "completed",
      date: "Q1 2024"
    },
    {
      title: "Les Yeux de la Forêt 👀",
      description: "Implementation de la fonction permettant de signaler les potentiels incidents en prenant une photo",
      status: "completed",
      date: "Q1 2024"
    },
    {
      title: "Des risques ? 🎯",
      description: "Integration de requetes a partir de l'API Georisques afin de prévenir les utilisateurs en zone sensible",
      status: "in-progress",
      date: "Q2 2024"
    },
    {
      title: "L'Aventure Mobile 📱",
      description: "Applications iOS et Android pour tous les explorateurs",
      status: "in-progress",
      date: "Q2 2024"
    },
    {
      title: "Le Signal d'Alerte 🔔",
      description: "Système d'alertes personnalisées par zone",
      status: "in-progress",
      date: "Q2 2024"
    },
    {
      title: "L'Oracle Numérique 🔮",
      description: "Processing des images par deep learning afin de mieux évaluer et cartographier les potentiels dommages",
      status: "planned",
      date: "Q3 2024"
    },
    {
      title: "La Guilde des Gardiens 🤝",
      description: "Création d'une communauté active d'explorateurs qui s'entraident et progressent ensemble grâce à des défis interactifs, des quiz sur la prévention des risques, et un système de badges qui récompense chaque contribution ! 🎮",
      status: "planned",
      date: "Q4 2024"
    }
  ];

  return (
    // Ajout d'une marge top plus importante et d'un padding pour éviter le chevauchement
    <div className="max-w-md mx-auto pt-24 px-4 mt-8">
      <div className="text-center relative z-10 mb-12">
        <div className="inline-block p-4 bg-amber-50 rounded-lg border-2 border-dashed border-amber-600
                      transform -rotate-1 shadow-md">
          <h1 className="text-2xl font-bold font-serif text-amber-900 mb-2">
            La Carte des Découvertes
          </h1>
          <p className="text-sm text-stone-600">
            L'aventure Alert4Sud se dévoile...
          </p>
        </div>
      </div>

      {/* Ajout d'un z-index pour s'assurer que le contenu reste au-dessus */}
      <div className="relative bg-amber-50/50 p-6 rounded-lg z-0">
        {roadmapItems.map((item, index) => (
          <RoadmapItem
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            status={item.status}
            date={item.date}
          />
        ))}

<div className="mt-8 p-4 bg-amber-50 rounded-lg border-2 border-dashed border-amber-600
                transform rotate-1">
  <h2 className="text-lg font-serif font-bold text-center mb-3 text-black">Légende</h2>
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-green-500" />
      <span className="text-sm text-black">Découvert</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-amber-500" />
      <span className="text-sm text-black">En exploration</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-stone-400" />
      <span className="text-sm text-black">À découvrir</span>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Roadmap;