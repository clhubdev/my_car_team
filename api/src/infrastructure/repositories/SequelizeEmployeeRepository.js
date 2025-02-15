import IEmployeeRepository from '../../domain/repositories/IEmployeeRepository.js';
import EmployeeModel from '../database/models/EmployeeModel.js';

class SequelizeEmployeeRepository extends IEmployeeRepository {
    async create(employeeEntity, options = {}) {
        try {
            const created = await EmployeeModel.create({
                user_id: employeeEntity.user_id,
                entreprise_id: employeeEntity.entreprise_id,
                lastname: employeeEntity.lastname,
                firstname: employeeEntity.firstname,
                birthday: employeeEntity.birthday
            });

            return created;
        } catch (error) {
            console.log(error)
        }

    }

    async findById(id, options = {}) {
        const employee = await EmployeeModel.findByPk(id);
        return employee;
    }
}

export default SequelizeEmployeeRepository;