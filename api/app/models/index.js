import Address from './addresses.model.js';
import BusinessAccountEmployees from './businessAccountEmployees.model.js';
import Employee from './employees.model.js';
import Entreprise from './entreprises.model.js'
import User from './users.model.js';

// Association users-employees
User.hasOne(Employee, {
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
  foreignKey: 'user_id'
});

Employee.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    allowNull: true,
  }
});

//Association entreprises, business_account_employees
Entreprise.hasMany(BusinessAccountEmployees, {
  foreignKey: 'entreprise_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

BusinessAccountEmployees.belongsTo(Entreprise, {
  foreignKey: 'entreprise_id',
});

//Association employees, business_account_employees
Employee.hasOne(BusinessAccountEmployees, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE',    
  onUpdate: 'CASCADE',
});
BusinessAccountEmployees.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

//Association entreprises - employees
Entreprise.hasMany(Employee, {
  foreignKey: 'entreprise_id',
  onDelete: 'CASCADE',    
  onUpdate: 'CASCADE',
});

Employee.belongsTo(Entreprise, {
  foreignKey: 'entreprise_id',
});

//Association addresses - entreprise
Address.hasOne(Entreprise, {
  foreignKey: 'headOfficeAddress',
  onDelete: 'RESTRICT',    
  onUpdate: 'CASCADE',
});

Entreprise.belongsTo(Address, {
  foreignKey: 'headOfficeAddress',
});

export {
  User,
  Employee,
  Address,
  BusinessAccountEmployees,
  Entreprise,
};