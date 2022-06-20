'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('Docks', [
        { user_id: 1,
          name: "Andy's Tiki Dock",
          address: '1599 Ala Moana Blvd',
          city: 'Honolulu',
          state: 'HA',
          country: 'USA',
          cost: 2.20,
          longitude: -157.86,
          latitude: 21.31,
          description: 'Easy access. Friendly owner',
          imagePath: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-uopload-reid-callaway.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Docks', null, {});
  }
};
