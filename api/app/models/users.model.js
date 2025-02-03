import { DataTypes, Model } from "sequelize";
import sequelize from '../database.js'; 

class User extends Model {}

User.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,  
        type: DataTypes.INTEGER,
        unique: true, 
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true, 
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize, 
      modelName: 'users',
      freezeTableName: true, 
      timestamps: true
    },
);

export default User;