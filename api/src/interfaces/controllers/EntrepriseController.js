class EntrepriseController {

  constructor(entrepriseService) {
    this.entrepriseService = entrepriseService;
  }

  async create(req, res) {
    try {
      const userData = req.body;
      const user = await this.entrepriseService.createEntreprise(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default EntrepriseController;
