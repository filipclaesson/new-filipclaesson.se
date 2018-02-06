'use strict';
module.exports = function(sequelize, DataTypes) {
  var Metrics = sequelize.define('Metrics', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    settings: DataTypes.INTEGER,
    user: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Metrics;
};