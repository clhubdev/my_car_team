import { DataTypes } from 'sequelize';
import sequelize from '../index.js';
import EmployeeModel from './EmployeeModel.js';
import RouteModel from './RouteModel.js';

const BookingModel = sequelize.define('bookings', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EmployeeModel,
            key: 'id',
        },
    },
    route_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RouteModel,
            key: 'id',
        },
    },
    numberReservedSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isValidate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    sequelize,
    modelName: 'bookings',
    freezeTableName: true,
    timestamps: true,
});

export default BookingModel;
