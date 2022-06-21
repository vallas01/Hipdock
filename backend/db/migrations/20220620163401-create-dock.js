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
        type: Sequelize.STRING(35)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      country: {
        type: Sequelize.STRING(20)
      },
      cost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
