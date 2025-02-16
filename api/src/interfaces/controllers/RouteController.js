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
}