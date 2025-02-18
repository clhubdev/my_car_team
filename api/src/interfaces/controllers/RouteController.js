export default class RouteController {
  constructor(routeService) {
    this.routeService = routeService;
  }

  async createRoute(req, res) {
    try {
      const { body } = req;
      const route = await this.routeService.createRoute(body);

      return res.status(201).json({
        message: 'Trajet créé avec succès',
        data: route,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRouteById(req, res) {
    try {
      const { routeId } = req.params;

      const route = await this.routeService.getRouteById(routeId);

      return res.status(200).json({
        message: 'Trajet récupéré avec succès',
        data: route,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllRoutesByEntreprise(req, res) {
    try {
      const { entrepriseId } = req.params;

      const routes = await this.routeService.getAllRoutesByEntreprise(entrepriseId);

      return res.status(200).json({
        message: 'Trajets récupérés avec succès',
        data: routes,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSuggestions(req, res) {
    try {
      const { query } = req.params;
      const suggestions = await this.routeService.getSuggestions(query);

      return res.status(200).json({
        data: suggestions,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCoordinates(req, res) {
    try {
      const { address } = req.params;
      const coordinates = await this.routeService.getCoordinates(address);

      res.status(200).json(coordinates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRouteDurationSecondes(req, res) {
    try {
      const { startCoord, endCoord } = req.params;
      const results = await this.routeService.getProfileRoute(startCoord, endCoord);

      res.status(200).json({
        message: 'Durée estimée en seconde du trajet récupérée avec succès',
        data: results.features[0].properties.summary.duration
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
}