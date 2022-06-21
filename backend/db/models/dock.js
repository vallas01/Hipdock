'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dock = sequelize.define('Dock', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    cost: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
    imagePath: DataTypes.STRING
  }, {});
  Dock.associate = function(models) {
    // associations can be defined here
    Dock.belongsTo(models.User, { foreignKey: 'user_id'});
    Dock.hasMany(models.Review, { foreignKey: 'dock_id', onDelete: "CASCADE",hooks:true});
    Dock.hasMany(models.Booking, { foreignKey: 'dock_id', onDelete: "CASCADE",hooks:true});
  };
  return Dock;
};
