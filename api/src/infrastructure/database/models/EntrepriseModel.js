import { DataTypes } from 'sequelize';
import sequelize from '../index.js';
import AddressModel from './AddressModel.js';

const EntrepriseModel = sequelize.define('entreprises', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    address: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: AddressModel,
            key: 'id'
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    registrationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vatNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numberOfEmployees: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    incorporationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
},
    {
        sequelize,
        modelName: 'entreprises',
        freezeTableName: true,
        timestamps: true
    }
);

export default EntrepriseModel;
