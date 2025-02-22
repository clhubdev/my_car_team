import Booking from '../../domain/entities/Booking.js';

class BookingService {
  constructor(bookingRepository, routeRepository, sequelize) {
    this.bookingRepository = bookingRepository;
    this.routeRepository = routeRepository;
    this.sequelize = sequelize;
  }

  async create({ employee_id, route_id, numberReservedSeats }) {
    const transaction = await this.sequelize.transaction();

    try {
      // On récupère la route pour vérifier la capacité de la voiture
      const route = await this.routeRepository.getById(route_id, { transaction });

      // Afin de connaitre le nombre de places déjà réservées sur ce trajet on récupère toutes les réservations concernant ce trajet
      const results = await this.bookingRepository.findByRouteId(route_id, { transaction });
      const totalReservedSeats = results.reduce((acc, booking) => acc + booking.numberReservedSeats, 0);

      // On crée une nouvelle réservation
      const booking = Booking.create(
        employee_id,
        route_id,
        numberReservedSeats,
        route.dataValues.availableSeats,
        totalReservedSeats
      );

      // On enregistre la réservation en base de données
      const newBooking = await this.bookingRepository.create(booking, { transaction });

      await transaction.commit();

      return newBooking;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

export default BookingService;
