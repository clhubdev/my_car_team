import Entreprise from './entreprises.model.js';
import Address from './addresses.model.js';
import Administrator from './administrators.models.js';
import User from './users.model.js';
import BusinessAccountEmployee from './businessAccountEmployees.model.js';
import Employee from './employees.model.js';


// Administrator - User (1:1)
Administrator.belongsTo(User, { foreignKey: "user_id", as: "user" });
User.hasOne(Administrator, { foreignKey: "user_id", as: "administratorDetails" });

// BusinessAccountEmployee - Employee (1:1)
BusinessAccountEmployee.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });
Employee.hasOne(BusinessAccountEmployee, { foreignKey: 'employee_id', as: 'businessAccount' });

// Employee - User (1:1)
Employee.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasOne(Employee, { foreignKey: 'user_id', as: 'employeeDetails' });

// Entreprise - Address
Entreprise.belongsTo(Address, { foreignKey: 'headOfficeAddress', as: 'address',
});
Address.hasOne(Entreprise, { foreignKey: 'headOfficeAddress', as: 'entreprise',
});

