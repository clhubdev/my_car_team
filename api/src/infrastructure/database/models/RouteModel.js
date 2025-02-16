import { DataTypes } from 'sequelize';
import sequelize from '../index.js';
import EmployeeModel from './EmployeeModel.js';

const RouteModel = sequelize.define('routes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    conductor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EmployeeModel,
            key: 'id',
        },
    },
    start: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startPoint: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false,
    },
    endPoint: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false,
    },
    departureDatetime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
},
    {
        sequelize,
        modelName: 'routes',
        freezeTableName: true,
        timestamps: true
    }
);

export default RouteModel;
