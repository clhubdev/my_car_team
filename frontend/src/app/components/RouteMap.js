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
    if (container && container._leaflet_id) {
      container._leaflet_id = null;
    }

    let map;
    // Si on a bien les coordonnées, on affiche le trajet
    if (itineraire?.start && itineraire?.end) {
      const startCoords = itineraire.start.split(',');
      const endCoords = itineraire.end.split(',');

      // Convertir en nombres et inverser l'ordre pour Leaflet [lat, lon]
      const startLatLng = [parseFloat(startCoords[1]), parseFloat(startCoords[0])];
      const endLatLng = [parseFloat(endCoords[1]), parseFloat(endCoords[0])];

      // Initialisation de la carte centrée sur le point de départ
      map = Leaflet.map('map').setView(startLatLng, 13);

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // Marqueurs pour le départ et l'arrivée
      Leaflet.marker(startLatLng).addTo(map).bindPopup('Départ');
      Leaflet.marker(endLatLng).addTo(map).bindPopup('Arrivée');

      // Tracé de la ligne entre les deux points
      const latLngs = [startLatLng, endLatLng];
      Leaflet.polyline(latLngs, { color: 'blue' }).addTo(map);
      map.fitBounds(Leaflet.polyline(latLngs).getBounds());
    } else {
      // Sinon, afficher une carte par défaut sans trajet
      // Par exemple, centrée sur Paris
      const defaultLatLng = [48.8566, 2.3522];
      map = Leaflet.map('map').setView(defaultLatLng, 13);

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [itineraire]);

  return <div id="map" suppressHydrationWarning style={{ height: '500px', width: '100%' }} />;
}