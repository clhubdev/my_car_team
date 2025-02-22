import IBookingRepository from '../../domain/repositories/IBookingRepository.js';
import BookingModel from '../database/models/BookingModel.js';

class SequelizeBookingRepository extends IBookingRepository {
    async create(booking, options = {}) {
        try {
            const created = await BookingModel.create({
                employee_id: booking.employee_id,
                route_id: booking.route_id,
                numberReservedSeats: booking.numberReservedSeats,
            }, {
                transaction: options.transaction
            });
            return created;
        } catch (error) {
            console.error(error)
        }
    }

    async findByRouteId(route_id, options = {}) {
        try {
            const bookings = await BookingModel.findAll({
                where: {
                    route_id: route_id
                },
                transaction: options.transaction
            });
            return bookings;
        } catch (error) {
            console.error(error);
        }
    }
}

export default SequelizeBookingRepository;