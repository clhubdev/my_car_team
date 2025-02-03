import { Employee } from '../models/index.js'

class EmployeeRepository {
  static async create(employeeData, options = {}) {
    try {
      const newEmployee = await Employee.create(employeeData, options);
      return newEmployee;
    } catch (error) {
      console.error("Erreur lors de la création de l'employé :", error);
      throw error;
    }
  }
}

export default EmployeeRepository;