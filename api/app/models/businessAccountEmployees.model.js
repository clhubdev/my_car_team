import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';
import Employee from './employees.model.js';
import Entreprise from './entreprises.model.js';
import User from './users.model.js';

class BusinessAccountEmployee extends User {}

BusinessAccountEmployee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Employee,
        key: 'id'
      },
    },
    entreprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Entreprise,
        key: 'id',
      },
    },
    // Vous pouvez ajouter d'autres attributs spécifiques à ce type d'employé
  },
  {
    sequelize,
    modelName: 'business_account_employees',
    freezeTableName: true,
    timestamps: false,
  }
);

export default BusinessAccountEmployee;