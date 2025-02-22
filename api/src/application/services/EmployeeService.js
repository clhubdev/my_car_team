import Employee from '../../domain/entities/Booking.js';

class EmployeeService {
    constructor(employeeRepository, sequelize) {
        this.employeeRepository = employeeRepository;
    }

    async getByUserId(userId) {

        const employee = await this.employeeRepository.findByUserId(userId);

        return employee;
    }
}

export default EmployeeService;