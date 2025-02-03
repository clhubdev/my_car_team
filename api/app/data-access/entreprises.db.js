import { Entreprise } from '../models/index.js'

class EntrepriseRepository {
  static async create(entrepriseData, options = {}) {
    try {
      const newEntreprise = await Entreprise.create(entrepriseData, options);
      return newEntreprise;
    } catch (error) {
      console.error("Erreur lors de la création de l'entreprise :", error);
      throw error;
    }
  }
}

export default EntrepriseRepository;