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
          cost: 2.25,
          longitude: -157.86,
          latitude: 21.31,
          description: 'Easy access and a very friendly owner',
          imagePath: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-uopload-reid-callaway.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {user_id: 2, name: 'The Yacht Club of Hilton Head',
      imagePath: 'https://upscalelivingmag-com-images.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/sailboat-racing.jpg',
       cost: 2.25, description: 'Beautiful with a great bar!!!', address: '99 Helmsman Way', city: 'Hilton Head Island', state: 'SC', country: 'USA', latitude: 43.8210, longitude: -89.0214, createdAt: new Date(), updatedAt: new Date()},
      {user_id: 3, name: 'Delray Harbour Club Marina',
      imagePath:  'https://img.marinas.com/v2/865482a619e67f4c67041997880ad09fb363febcec073c0c1899e457aaa7029d.jpg',
       cost: 2.35, description: 'Right on the Intercoastal', address: '1035 S. Federal Highway', city: 'Delray Beach', state: 'FL', country: 'USA', latitude: 43.1023, longitude: -89.2301, createdAt: new Date(), updatedAt: new Date()},
      {user_id: 3, name: 'Bonefish Marina',
      imagePath: 'https://img.marinas.com/v2/cf91105d12bfbf4ae0b927be1116f0249c308c14a2fdc4086f1e463058d09852.jpg',
       cost: 2.15, description: 'Enjoy, fun party!', address: '97 Coco Plum Drive', city: 'Marathon', state: 'FL', country: 'USA', latitude: 43.1023, longitude: -89.2301, createdAt: new Date(), updatedAt: new Date()},
      {user_id: 1, name: 'Grand Bahama Yacht Club',
      imagePath: 'https://res.cloudinary.com/dockwa/image/upload/c_scale,w_800/v1/marinas/grandbahamayachtclub/GBI_0470.png',
       cost: 2.95, description: 'Reservation recommended', address: 'none', city: 'Freeport', state: 'BA', country: 'Bahamas', latitude: 43.1023, longitude: -89.2301, createdAt: new Date(), updatedAt: new Date()},


    ], {});
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
