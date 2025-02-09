'use client';

import { useEffect } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Redéfinition des URLs pour les icônes de Leaflet
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconUrl: '/marker.svg',
});

export default function RouteMap({ itineraire }) {
  useEffect(() => {
    // Récupérer le conteneur de la carte
    const container = document.getElementById('map');

    // Si le conteneur a déjà été utilisé pour une carte, le réinitialiser
    if (container && container._leaflet_id) {
      container._leaflet_id = null;
    }

    // Initialisation de la carte centrée sur le point de départ
    const startCoords = itineraire.start.split(',');
    const endCoords = itineraire.end.split(',');

    // Attention : ici on suppose que les coordonnées sont sous forme de chaîne "lon,lat"
    // et que Leaflet attend [latitude, longitude]
    const startLatLng = [startCoords[1], startCoords[0]];
    const endLatLng = [endCoords[1], endCoords[0]];

    const map = Leaflet.map('map').setView(startLatLng, 13);

    // Ajout du fond de carte OpenStreetMap
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Création des marqueurs pour le départ et l'arrivée
    Leaflet.marker(startLatLng)
      .addTo(map)
      .bindPopup('Départ');

    Leaflet.marker(endLatLng)
      .addTo(map)
      .bindPopup('Arrivée');

    // Création d'une polyline reliant le départ et l'arrivée
    const latLngs = [startLatLng, endLatLng];
    Leaflet.polyline(latLngs, { color: 'blue' }).addTo(map);

    // Ajustement de la vue pour inclure l'ensemble du trajet
    map.fitBounds(Leaflet.polyline(latLngs).getBounds());

    // Fonction de nettoyage pour détruire la carte au démontage du composant
    return () => {
      map.remove();
    };
  }, [itineraire]);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
}
