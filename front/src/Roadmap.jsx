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
      {/* Ligne pointillée entre les éléments */}
      {index !== 0 && (
        <div className="absolute -top-8 left-4 h-8 border-l-2 border-dashed border-amber-600" />
      )}
      
      {/* Point de repère */}
      <div className="absolute -left-1 -top-2">
        <MapPin className="h-10 w-10 text-red-600" />
      </div>

      <div className={`ml-8 p-4 rounded-lg ${getStatusColor()} 
                      border-2 border-dashed transform transition-all duration-300
                      shadow-md hover:shadow-lg`}>
        {/* Badge date style parchemin */}
        <div className="inline-block px-3 py-1 mb-2 bg-amber-900 text-amber-100 
                      rounded-lg text-sm transform -rotate-2">
          {date}
        </div>

        <h3 className="text-lg font-bold mb-2 font-serif">{title}</h3>
        <p className="text-stone-700 text-sm">{description}</p>

        {/* Icône de statut */}
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
      description: "Lancement de l'application avec détection des risques d'incendie",
      status: "completed",
      date: "Q1 2024"
    },
    {
      title: "Les Yeux de la Forêt 👀",
      description: "Installation des caméras de surveillance en temps réel",
      status: "completed",
      date: "Q1 2024"
    },
    {
      title: "Le Signal d'Alerte 🔔",
      description: "Système d'alertes personnalisées par zone",
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
      title: "L'Oracle Numérique 🔮",
      description: "Prédiction des risques par intelligence artificielle",
      status: "planned",
      date: "Q3 2024"
    },
    {
      title: "La Guilde des Gardiens 🤝",
      description: "Création du réseau d'entraide communautaire",
      status: "planned",
      date: "Q4 2024"
    }
  ];

  return (
    <div className="max-w-md mx-auto py-8 px-4">
      {/* En-tête style carte au trésor */}
      <div className="text-center mb-12">
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

      {/* Conteneur principal avec effet parchemin */}
      <div className="relative bg-amber-50/50 p-6 rounded-lg">
        {/* Items de la roadmap */}
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

        {/* Légende style carte au trésor */}
        <div className="mt-8 p-4 bg-amber-50 rounded-lg border-2 border-dashed border-amber-600
                       transform rotate-1">
          <h2 className="text-lg font-serif font-bold text-center mb-3">Légende</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm">Découvert</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-sm">En exploration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-stone-400" />
              <span className="text-sm">À découvrir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;