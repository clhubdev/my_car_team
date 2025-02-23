import BookingService from '../../src/application/services/BookingService';
import { jest } from '@jest/globals';

describe('BookingService', () => {
    let bookingService;
    let bookingRepository;
    let routeRepository;
    let sequelize;
    let transaction;

    // Avant chaque test -> mook chaque dépendance (simulation)
    beforeEach(() => {
        bookingRepository = {
            findByRouteId: jest.fn(),
            create: jest.fn(),
        };
        routeRepository = {
            getById: jest.fn(),
        };
        transaction = {
            commit: jest.fn(),
            rollback: jest.fn(),
        };
        sequelize = {
            transaction: jest.fn().mockResolvedValue(transaction),
        };
        bookingService = new BookingService(bookingRepository, routeRepository, sequelize);
    });

    describe('create', () => {
        it("should fail if the reservation exceeds the available seats", async () => {
            // Création d'un trajet avec 5 places disponibles
            const route = { dataValues: { availableSeats: 5 } };
            // Deux réservations existantes totalisant 4 places réservées (3 + 1)
            const bookings = [{ numberReservedSeats: 3 }, { numberReservedSeats: 1 }];

            // Simulation de la récupération de la route et des réservations existantes
            routeRepository.getById.mockResolvedValue(route);
            bookingRepository.findByRouteId.mockResolvedValue(bookings);

            // Tentative de réservation de 2 places supplémentaires (4 + 2 > 5)
            await expect(
                bookingService.create({ employee_id: 1, route_id: 1, numberReservedSeats: 2 })
            ).rejects.toThrow("Il n'y a plus de places disponibles");

            // Vérification que la transaction a été annulée
            expect(transaction.rollback).toHaveBeenCalled();
        });

        it('should create a new booking successfully', async () => {
            const route = { dataValues: { availableSeats: 10 } };
            const bookings = [{ numberReservedSeats: 2 }, { numberReservedSeats: 3 }];
            const newBooking = { id: 1, employee_id: 1, route_id: 1, numberReservedSeats: 2 };

            routeRepository.getById.mockResolvedValue(route);
            bookingRepository.findByRouteId.mockResolvedValue(bookings);
            bookingRepository.create.mockResolvedValue(newBooking);

            const result = await bookingService.create({ employee_id: 1, route_id: 1, numberReservedSeats: 2 });

            expect(sequelize.transaction).toHaveBeenCalled();
            expect(routeRepository.getById).toHaveBeenCalledWith(1, { transaction });
            expect(bookingRepository.findByRouteId).toHaveBeenCalledWith(1, { transaction });
            expect(bookingRepository.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    employee_id: 1,
                    route_id: 1,
                    numberReservedSeats: 2,
                }),
                { transaction }
            );
            expect(transaction.commit).toHaveBeenCalled();
            expect(result).toEqual(newBooking);
        });

        it('should rollback transaction if an error occurs', async () => {
            // Simulation d'une erreur lors de la récupération de la route
            routeRepository.getById.mockRejectedValue(new Error('Test error'));

            await expect(
                bookingService.create({ employee_id: 1, route_id: 1, numberReservedSeats: 2 })
            ).rejects.toThrow('Test error');

            expect(sequelize.transaction).toHaveBeenCalled();
            expect(routeRepository.getById).toHaveBeenCalledWith(1, { transaction });
            expect(transaction.rollback).toHaveBeenCalled();
        });
    });
});
