import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";
import User from "./users.model.js";
import Entreprise from "./entreprises.model.js";

class Employee extends User {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id"
      }
    },
    entreprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Entreprise,
        key: "id"
      }
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
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM('m', 'f'),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'employees',
    freezeTableName: true,
    timestamps: true,
  }
);

export default Employee;