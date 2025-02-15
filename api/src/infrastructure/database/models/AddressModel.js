import { DataTypes } from 'sequelize';
import sequelize from '../index.js';

const AddressModel = sequelize.define('addresses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: 'addresses',
        freezeTableName: true,
        timestamps: true,
    });

export default AddressModel;
