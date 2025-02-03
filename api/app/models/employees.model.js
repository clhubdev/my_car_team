import { DataTypes, Model } from "sequelize";
import sequelize from '../database.js'; 
import User from "./users.model.js";
import Entreprise from "./entreprises.model.js";

class Employee extends Model {}

Employee.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,  
        type: DataTypes.INTEGER,
        unique: true, 
        allowNull: false,
      },
      entreprise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Entreprise,
            key: 'id'
        },
        unique: true, 
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        unique: true, 
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['m', 'f'],
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize, 
      modelName: 'employees',
      freezeTableName: true,
      timestamps: true
    },
);

export default Employee;