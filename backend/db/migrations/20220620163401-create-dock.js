'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Docks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      city: {
        type: Sequelize.STRING(10)
      },
      state: {
        type: Sequelize.STRING(10)
      },
      country: {
        type: Sequelize.STRING(20)
      },
      cost: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(255)
      },
      longitude: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imagePath: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Docks');
  }
};
