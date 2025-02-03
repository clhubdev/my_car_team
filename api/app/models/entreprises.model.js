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
            allowNull: false,
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
            allowNull: false,
        },
        vatNumber: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: false,
        },
        numberOfEmployees: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // DATEONLY stocke la date sans l'heure
        incorporationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
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