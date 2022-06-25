'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    user_id: DataTypes.INTEGER,
    dock_id: DataTypes.INTEGER,
    totalCost: DataTypes.NUMERIC,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'user_id'});
    Booking.belongsTo(models.Dock, { foreignKey: 'dock_id'})
  };
  return Booking;
};
