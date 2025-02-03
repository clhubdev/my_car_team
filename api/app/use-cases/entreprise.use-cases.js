import { EntrepriseRepository } from '../data-access/index.js';

class EntrepriseUseCase {
    static async post(entrepriseData, options = {}) {
        try {
            // Création de l'entreprise
            const newEntreprise = await EntrepriseRepository.create(entrepriseData, options);
            return newEntreprise;
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default EntrepriseUseCase;
