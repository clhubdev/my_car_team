import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';
import Address from './addresses.model.js';

class Entreprise extends Model { }

Entreprise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        headOfficeAddress: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Address,
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

export default Entreprise;