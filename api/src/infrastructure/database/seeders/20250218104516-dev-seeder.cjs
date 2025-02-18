'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'clement.hubert@email.com',
        password: '$2y$10$UD8NekAJr.tNrcJjs.qpXeGiUNNy2uopjK5gOwiPs0DYrc8/NEioW',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'john.doe@email.com',
        password: '$2y$10$UD8NekAJr.tNrcJjs.qpXeGiUNNy2uopjK5gOwiPs0DYrc8/NEioW',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: 'claude.francois@email.com',
        password: '$2y$10$UD8NekAJr.tNrcJjs.qpXeGiUNNy2uopjK5gOwiPs0DYrc8/NEioW',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    await queryInterface.bulkInsert('entreprises', [
      {
        id: 1,
        name: '3WA',
        phone: '0164312180',
        email: '3wa@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Philips Phonografic Industries',
        phone: '0620587413',
        email: 'phillips@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    await queryInterface.bulkInsert('employees', [
      {
        id: 1,
        user_id: 1,
        entreprise_id: 1,
        lastname: 'hubert',
        firstname: 'clément',
        isAccountManager: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        entreprise_id: 1,
        lastname: 'doe',
        firstname: 'john',
        isAccountManager: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        user_id: 3,
        entreprise_id: 2,
        lastname: 'françois',
        firstname: 'claude',
        isAccountManager: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('routes', [
      {
        conductor: 1,
        start: 'Paris',
        end: 'Lyon',
        startPoint: Sequelize.literal("ST_GeomFromText('POINT(2.3522 48.8566)')"),
        endPoint: Sequelize.literal("ST_GeomFromText('POINT(4.8357 45.7640)')"),
        departureDatetime: new Date('2025-03-01T08:00:00'),
        availableSeats: 3,
        price: 45.50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conductor: 2,
        start: 'Lyon',
        end: 'Marseille',
        startPoint: Sequelize.literal("ST_GeomFromText('POINT(4.8357 45.7640)')"),
        endPoint: Sequelize.literal("ST_GeomFromText('POINT(5.3698 43.2965)')"),
        departureDatetime: new Date('2025-03-02T09:00:00'),
        availableSeats: 2,
        price: 35.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conductor: 2,
        start: 'Marseille',
        end: 'Nice',
        startPoint: Sequelize.literal("ST_GeomFromText('POINT(5.3698 43.2965)')"),
        endPoint: Sequelize.literal("ST_GeomFromText('POINT(7.2620 43.7102)')"),
        departureDatetime: new Date('2025-03-03T10:00:00'),
        availableSeats: 4,
        price: 25.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conductor: 3,
        start: 'Nice',
        end: 'Bordeaux',
        startPoint: Sequelize.literal("ST_GeomFromText('POINT(7.2620 43.7102)')"),
        endPoint: Sequelize.literal("ST_GeomFromText('POINT(-0.5792 44.8378)')"),
        departureDatetime: new Date('2025-03-04T11:00:00'),
        availableSeats: 1,
        price: 55.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conductor: 2,
        start: 'Bordeaux',
        end: 'Paris',
        startPoint: Sequelize.literal("ST_GeomFromText('POINT(-0.5792 44.8378)')"),
        endPoint: Sequelize.literal("ST_GeomFromText('POINT(2.3522 48.8566)')"),
        departureDatetime: new Date('2025-03-05T12:00:00'),
        availableSeats: 3,
        price: 65.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
