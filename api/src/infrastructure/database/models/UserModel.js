import { DataTypes } from 'sequelize';
import sequelize from '../index.js';

const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
},
  {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
    timestamps: true,
  });

export default UserModel;
