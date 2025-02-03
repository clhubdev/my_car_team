import config from '../config.js';

class OpenRouteService {
    static async getCoordinates(address) {
        const apiKey = config.openRouteServiceKey;
        const url = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(address)}&size=1&boundary.country=FR`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
                }
            });
            const data = await response.json();

            if (data.features.length === 0) {
                throw new Error('Aucun résultat trouvé pour l\'adresse fournie.');
            }

            const [longitude, latitude] = data.features[0].geometry.coordinates;

            return `${longitude},${latitude}`;
        } catch (error) {
            console.error('Erreur lors du géocodage:', error);
            throw error;
        }
    }

    static async getDistanceMeters(start, end) {
        const apiKey = config.openRouteServiceKey;
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
                }
            });

            const data = await response.json();
            
            const distance = data.features[0].properties.segments[0].distance;
            return distance;
        } catch (error) {
            console.error('Erreur lors du calcul de la distance :', error.message);
            throw error;
        }
    }
}

export default OpenRouteService;