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

     await queryInterface.bulkInsert('users', [{
        email: 'test@email.fr',
        password: '$2y$10$UD8NekAJr.tNrcJjs.qpXeGiUNNy2uopjK5gOwiPs0DYrc8/NEioW',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
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
