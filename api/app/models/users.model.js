import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('employee', 'businessAccountEmployee', 'administrator'),
      allowNull: false,
      defaultValue: 'employee'
    },
  },
  {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
    timestamps: true,
  }
);

export default User;