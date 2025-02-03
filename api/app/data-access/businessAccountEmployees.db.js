import { BusinessAccountEmployee } from '../models/index.js'

class BusinessAccountEmployeeRepository {
  static async create(businessAccountEmployeeData, options = {}) {
    try {
      const newBusinessAccountEmployee = await BusinessAccountEmployee.create(businessAccountEmployeeData, options);
      
      return newBusinessAccountEmployee;
    } catch (error) {
      console.error("Erreur lors de la création du business account :", error);
      throw error;
    }
  }
}

export default BusinessAccountEmployeeRepository;