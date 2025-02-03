import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';

import Entreprise from './entreprises.model.js';
import Employee from './employees.model.js';

class BusinessAccountEmployee extends Model {}

BusinessAccountEmployee.init(
  {
    entreprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Entreprise,
        key: 'id',
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,    
        key: 'id',
      },
      unique: true
    },
  },
  {
    sequelize,
    modelName: 'business_account_employees',
    freezeTableName: true,
    timestamps: false,
  }
);

export default BusinessAccountEmployee;