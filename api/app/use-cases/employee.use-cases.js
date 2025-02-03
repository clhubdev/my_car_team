import { EmployeeRepository } from '../data-access/index.js';

class EmployeeUseCase {
    static async post(employeeData, options = {}) {
        try {
            // Création de l'entreprise
            const newEmployee = await EmployeeRepository.create(employeeData, options);
            return newEmployee;
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default EmployeeUseCase;
