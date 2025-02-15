import { DataTypes } from 'sequelize';
import sequelize from '../index.js';
import UserModel from './UserModel.js';
import EntrepriseModel from './EntrepriseModel.js';

const EmployeeModel = sequelize.define('employees', {
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
            model: UserModel,
            key: "id"
        }
    },
    entreprise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EntrepriseModel,
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
    isAccountManager: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: 'employees',
        freezeTableName: true,
        timestamps: true,
    }
);

export default EmployeeModel;
