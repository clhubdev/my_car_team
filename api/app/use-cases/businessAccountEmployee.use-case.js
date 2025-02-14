import { BusinessAccountEmployeeRepository } from '../data-access/index.js';

class BusinessAccountEmployeeUseCase {
    static async post(businessAccountEmployeeData, options ={}) {
        try {
            // Création de l'entreprise
            const newBusinessAccountEmployee = await BusinessAccountEmployeeRepository.create(businessAccountEmployeeData, options);
            return newBusinessAccountEmployee;
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default BusinessAccountEmployeeUseCase;
